import { createI18n } from 'vue-i18n/index';
import messages from './translations';

const determineDefaultLanguage = () => {
  let defaultLanguage = 'en';
  const userLanguages = navigator.languages;

  // Get all the supported languages
  const websiteAvailableLanguages = [];
  Object.keys(messages).forEach((lang) => {
    websiteAvailableLanguages.push(lang);
  });

  const urlParams = new URL(document.location).searchParams;
  const urlLanguage = urlParams.get('hl');
  if (websiteAvailableLanguages.includes(urlLanguage)) {
    defaultLanguage = urlLanguage;
  } else {
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
