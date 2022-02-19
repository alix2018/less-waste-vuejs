const express = require('express');
const path = require('path');
const fs = require('fs');
const Handlebars = require('handlebars');

// Import Handlebars file
const indexHbs = fs.readFileSync(path.resolve(__dirname, 'index.hbs'));
const indexTemplate = Handlebars.compile(indexHbs.toString());

// Set up the app
const app = express();
app.use(express.static('dist'));

const port = process.env.PORT || 8080;

// Metadata translations
// TODO: Use i18n translation file
const metadata = {
  en: {
    title: 'Tips to easily reduce your waste',
    description: 'You want to start reducing your waste? Or you already are active in the zero waste and want to get easy tips and tricks? We have the solution!',
    noJavascript: 'Please enable JavaScript to view this website.'
  },
  fr: {
    title: 'Des conseils pour réduire tes déchets facilement',
    description: 'Tu veux commencer à réduire tes déchets? Ou tu es déjà actif dans le zero waste et tu veux avoir des conseils et astuces facilement? Nous avons la solution !',
    noJavascript: 'Veuillez activer JavaScript pour afficher ce site Web.'
  },
  nl: {
    title: 'Tips om je afval gemakkelijk te verminderen',
    description: 'Wil je beginnen met het verminderen van je afval? Of ben je al actief in de zero waste en wil je makkelijke tips en tricks? Wij hebben de oplossing!',
    noJavascript: 'Schakel JavaScript in om deze website te bekijken.'
  }
};

app.get('/*', (req, res) => {
  // TODO: get direct array of available languages
  const language = ['en', 'nl', 'fr'].includes(req.query.hl) ? req.query.hl : 'en';
  const languageTranslations = metadata[language];

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
