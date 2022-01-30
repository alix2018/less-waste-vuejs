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

const metadata = {
  en: {
    title: 'Tips to easily reduce your waste'
  },
  fr: {
    title: 'Des conseils pour réduire tes déchets facilement'
  },
  nl: {
    title: 'Tips om je afval gemakkelijk te verminderen'
  }
};

app.get('/:name', (req, res) => {
  const currentLanguage = metadata[req.query.hl];
  const data = {
    name: req.path.split('/')[1],
    title: currentLanguage.title
  };
  res.send(indexTemplate(data));
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
