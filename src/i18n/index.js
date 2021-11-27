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
      article_title_environment: 'Contribuer à préserver la planète',
      article_title_info: 'Informations à disposition',
      article_title_money: 'Préservez votre santé et votre porte monnaie      ',
      article_title_time: 'Gagner du temps',
      article_text_environment: 'Grace à nos conseils tu pourras réduire tes déchets facilement et contribuer à un vivre dans un meilleur environnement!',
      article_text_info: 'Nous te fournissons toutes les informations nécessaires. Pas de blabla, juste les points clés pour pouvoir commencer à ton rythme.',
      article_text_money: 'Evitez les particules dans les bouteilles en plastique et n\'achetez plus des cotons tiges tous les mois et passez aux produits ré-utilisables.',
      article_text_time: 'Tu ne sais pas par où commencer et tu ne veux pas passer des heures à chercher ce qui existe pour réduire tes déchets facilement? On a la solution!',
      h2_firs_section_title: 'Facile, simple et efficace.',
      language_en: 'Anglais',
      language_fr: 'Français',
      language_nl: 'Néerlandais',
      pluralExample: 'pas d\'élément | {count} élément | {count} éléments',
      subtitle: 'Bientôt disponible',
      testButton: 'Faire le test',
      tipsButton: 'Voir les astuces',
      title: 'Conseils pour réduire tes déchets',

      newsletter_coming_soon: 'Nous serons bientôt là...',
      newsletter_inscription: 'Inscris-toi à notre newsletter pour être averti!',
      newsletter_button_subscribe: 'S\'abonner',
      social_in_the_meantime: 'En attendant,',
      social_follow_us: 'suis nous et écris nous sur les réseaux sociaux!',
      share_title: 'Ce site web est top!',
      share_description: 'Agis à ton échelle et partage le avec tes amis, ta famille, tes collègues, ton voisin, ton chien, ton chat... On accepte tout le monde :) Notre cause n\'a de but que si tout le monde s\'y met!\nPartage sur tes réseaux sociaux préférés, sinon tu peux aussi copier l\'URL directement.',
      about_us_who_we_are: 'Qui sommes nous ?',
      about_us_description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n\n It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.'
    },
    footer: {
      copyright: '© 2021. Tous droits réservés.',
      privacy_policy: 'Politique de confidentialité'
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
  locale: 'fr',
  legacy: false,
  globalInjection: true, // Inject i18n properties and function to all components for options API
  messages
});
