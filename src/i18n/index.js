import { createI18n } from 'vue-i18n/index';
import { translations, defaultLanguage, availableLanguages } from '@public/translations';

const determineDefaultLanguage = () => {
  let currentDefaultLanguage = defaultLanguage;
  const userLanguages = navigator.languages;
  const websiteAvailableLanguages = availableLanguages();

  const urlParams = new URL(document.location).searchParams;
  const savedLanguage = urlParams.get('hl') || localStorage.getItem('language');
  if (websiteAvailableLanguages.includes(savedLanguage)) {
    currentDefaultLanguage = savedLanguage;
  } else {
    // TODO: improve the every function
    userLanguages.every((userLanguage) => { // Determine the highest language supported. Ex: en-nl will select English language
      const [languageCode] = userLanguage.split('-');
      if (websiteAvailableLanguages.includes(languageCode)) {
        currentDefaultLanguage = languageCode;
        // Stop the loop when language matches
        return false;
      }

      return true;
    });
  }

  return currentDefaultLanguage;
};

export default createI18n({
  locale: determineDefaultLanguage(),
  legacy: false,
  globalInjection: true, // Inject i18n properties and function to all components for options API
  messages: translations
});
