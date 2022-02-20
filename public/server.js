const express = require('express');
const path = require('path');
const fs = require('fs');
const Handlebars = require('handlebars');
const { translations, defaultLanguage, availableLanguages } = require('./translations');

// Import Handlebars file
const indexHbs = fs.readFileSync(path.resolve(__dirname, 'index.hbs'));
const indexTemplate = Handlebars.compile(indexHbs.toString());

// Set up the app
const app = express();
app.use(express.static('dist'));

const port = process.env.PORT || 8080;

app.get('/*', (req, res) => {
  const websiteAvailableLanguages = availableLanguages();
  const language = websiteAvailableLanguages.includes(req.query.hl) ? req.query.hl : defaultLanguage;
  const languageTranslations = translations[language].metadata;

  let languageCode;
  switch (language) {
    case 'fr':
      languageCode = 'fr_FR';
      break;
    case 'nl':
      languageCode = 'nl_NL';
      break;
    default:
      languageCode = 'en_GB';
  }

  const data = {
    language,
    languageCode,
    noJavascriptText: languageTranslations.noJavascript,
    title: languageTranslations.title,
    description: languageTranslations.description
  };
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send(indexTemplate(data));
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
