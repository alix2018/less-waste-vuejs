import { createI18n } from 'vue-i18n/index';
import messages from './translations';

const determineDefaultLanguage = () => {
  let defaultLanguage = 'en';
  const userLanguages = navigator.languages;
  const websiteAvailableLanguages = [];

  // Get all the supported languages
  Object.keys(messages).forEach((lang) => {
    websiteAvailableLanguages.push(lang);
  });

  // Determine the highest language supported
  // Ex: en-nl will select English language
  userLanguages.every((userLanguage) => {
    const [languageCode] = userLanguage.split('-');
    if (websiteAvailableLanguages.includes(languageCode)) {
      defaultLanguage = languageCode;
      // Stop the loop when language matches
      return false;
    }

    return true;
  });

  return defaultLanguage;
};

export default createI18n({
  locale: determineDefaultLanguage(),
  legacy: false,
  globalInjection: true, // Inject i18n properties and function to all components for options API
  messages
});
