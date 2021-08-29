import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    home: {
      language_en: 'English',
      language_fr: 'French',
      language_nl: 'Dutch',
      pluralExample: 'no item | {count} item | {count} items',
      subtitle: 'Doesn\'t have to be hard',
      testButton: 'Do the test',
      tipsButton: 'See tips',
      title: 'Reducing your waste'
    }
  },
  fr: {
    home: {
      language_en: 'Anglais',
      language_fr: 'Français',
      language_nl: 'Néerlandais',
      pluralExample: 'pas d\'élément | {count} élément | {count} éléments',
      subtitle: 'n\'est pas si difficile',
      testButton: 'Faire le test',
      tipsButton: 'Voir les astuces',
      title: 'Réduire vos déchets'
    }
  },
  nl: {
    home: {
      language_en: 'Engels',
      language_fr: 'Franse',
      language_nl: 'Nederlands',
      pluralExample: 'no item | {count} item | {count} items',
      subtitle: 'is niet zo moeilijk',
      testButton: 'Doen de test',
      tipsButton: 'Zie tips',
      title: 'Je afval verminderen'
    }
  }
};

export default createI18n({
  locale: 'en',
  legacy: false,
  globalInjection: true, // Inject i18n properties and function to all components for options API
  messages
});
