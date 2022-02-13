import { createI18n } from 'vue-i18n/index';
import messages from './translations';

const determineDefaultLanguage = () => {
  let defaultLanguage = 'en';
  const userLanguages = navigator.languages;

  // Get all the supported languages
  // TODO: get direct array of available languages
  const websiteAvailableLanguages = [];
  Object.keys(messages).forEach((lang) => {
    websiteAvailableLanguages.push(lang);
  });

  const urlParams = new URL(document.location).searchParams;
  const savedLanguage = urlParams.get('hl') || localStorage.getItem('language');
  if (websiteAvailableLanguages.includes(savedLanguage)) {
    defaultLanguage = savedLanguage;
  } else {
    // TODO: improve the every function
    userLanguages.every((userLanguage) => { // Determine the highest language supported. Ex: en-nl will select English language
      const [languageCode] = userLanguage.split('-');
      if (websiteAvailableLanguages.includes(languageCode)) {
        defaultLanguage = languageCode;
        // Stop the loop when language matches
        return false;
      }

      return true;
    });
  }

  return defaultLanguage;
};

export default createI18n({
  locale: determineDefaultLanguage(),
  legacy: false,
  globalInjection: true, // Inject i18n properties and function to all components for options API
  messages
});
