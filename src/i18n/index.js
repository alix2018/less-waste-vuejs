import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    home: {
      title: 'Reducing your waste',
      subtitle: 'Doesn\'t have to be hard'
    }
  },
  fr: {
    home: {
      title: 'Réduire vos déchets',
      subtitle: 'n\'est pas si difficile'
    }
  },
  nl: {
    home: {
      title: 'Je afval verminderen',
      subtitle: 'is niet zo moeilijk'
    }
  }
};

export default createI18n({
  locale: 'en',
  legacy: false,
  globalInjection: true,
  messages
});
