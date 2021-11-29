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
      about_us_description: 'Bonjour à toi qui est assis bien gentillement derrière ton écran et qui se demande qui nous sommes et pourquoi nous avons fait ce site. Nous sommes Shannon & Stéphanie, respectivement Belge et Français vivant en Belgique et aux Pays-Bas (oui ca fait un sacré mix). On s\'est d\'ailleurs rencontrées lors d\'un stage aux Pays-Bas et on n\'a jamais perdu contact.\n\n L\'une des raisons c\'est qu\'on a les mêmes valeurs, les mêmes et la même vision. De là est né ce projet qui a pour but d\'aider les gens (comme nous) à avancer dans le zéro déchet. On en est tous à des niveaux différents. Certains ne savent pas ce que c\'est d\'autres ont peur de se lancer et les plus avertis qui font ça depuis longtemps. Nous on veut juste rendre ça facile en utilisant notre connaissance et notre expérience et puis atteindre le plus de gens possible car toutes seules on n\'irait pas très loin dans le réduction des déchets à l\'échelle planétaire.\n\nVoilà un petit résumé sur nous et notre projet :) Si tu as des questions \'hésite pas à nous contacter par mail ou sur les réseaux sociaux.'
    },
    newsletter: {
      form_error_message: 'Malheureusement ton inscription n\'a pas pu être enregistrée. Essaie de nouveau 🤞',
      form_success_message: 'Ton inscription à bien marché, bienvenue parmis nous! 🎉',
      form_title: 'Newsletter',
      from_subtitle: 'Toi aussi tu as hâtes de voir la suite ? 🙂',
      form_label_email: 'Entre ton adresse e-mail pour t\'inscrire',
      form_email_input_example: 'Indique ton adresse e-mail pour t\'abonner. Par exemple: abc{\'@\'}xyz.com',
      form_accept_terms: 'J\'accepte de recevoir vos lettres d\'information et j\'accepte la déclaration de confidentialité des données.',
      form_unsubscribe: 'Tu peux te désinscrire à tout moment en utilisant le lien figurant dans notre newsletter.',
      form_sendingblue_terms: 'Nous utilisons Sendinblue comme plateforme de marketing. En cliquant ci-dessous pour soumettre ce formulaire, tu reconnais que les informations que tu as fournies seront transférées à Sendinblue pour être traitées conformément à leur ',
      form_sendingblue_terms_link: 'conditions d\'utilisation',
      form_btn_submit: 'Envoyer'
    },
    privacyPolicy: {
      btn_back_to_home: 'Retour à l\'accueil'
    },
    footer: {
      comment_ideas: 'Tu as des commentaires ou des idées? Contacte-nous!',
      copyright: '© {year}. Tous droits réservés.',
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
