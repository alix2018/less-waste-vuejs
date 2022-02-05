const express = require('express');
const path = require('path');
const fs = require('fs');
const Handlebars = require('handlebars');

// Import Handlebars file
const indexHbs = fs.readFileSync(path.resolve(__dirname, 'index.hbs'));
const indexTemplate = Handlebars.compile(indexHbs.toString());

// Set up the app
const app = express();
const port = process.env.PORT || 3000;

// Metadata translations
const metadata = {
  en: {
    title: 'Tips to easily reduce your waste',
    description: 'You want to start reducing your waste? Or you already are active in the zero waste and want to get easy tips and tricks? We have the solution!'

  },
  fr: {
    title: 'Des conseils pour réduire tes déchets facilement',
    description: 'Tu veux commencer à réduire tes déchets? Ou tu es déjà actif dans le zero waste et tu veux avoir des conseils et astuces facilement? Nous avons la solution !'
  },
  nl: {
    title: 'Tips om je afval gemakkelijk te verminderen',
    description: 'Wil je beginnen met het verminderen van je afval? Of ben je al actief in de zero waste en wil je makkelijke tips en tricks? Wij hebben de oplossing!'
  }
};

app.get('/*', (req, res) => {
  const language = req.query.hl;
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
    language: req.query.hl,
    title: languageTranslations.title,
    description: languageTranslations.description,
    languageCode
  };
  res.send(indexTemplate(data));
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
