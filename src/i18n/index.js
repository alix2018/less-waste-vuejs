import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    home: {
      language_en: 'English',
      language_fr: 'French',
      language_nl: 'Dutch',
      pluralExample: 'no item | {count} item | {count} items',
      subtitle: 'Available soon',
      testButton: 'Do the test',
      tipsButton: 'See tips',
      title: 'Reducing your waste'
    }
  },
  fr: {
    home: {
      title: 'Des conseils pour réduire tes déchets',
      subtitle: 'Bientôt disponible',
      h2_first_section_title: 'Des informations faciles, simples et efficaces',
      article_title_time: 'Tu as envie de gagner du temps ?',
      article_text_time: 'Ici pas de blabla, on te fournit les points clés pour que  tu puisses avancer à ton rythme.',
      article_title_info: 'Tu ne sais plus où donner de la tête ?',
      article_text_info: 'On va t\'aider à réduire tes déchets pour chacunes des pièces de ta maison.',
      article_title_environment: 'Tu veux préserver ta santé ?',
      article_text_environment: '... Et celle de la planète. On te donne les comportements à éviter pour prendre soin de toi et de l\'environment.',
      article_title_money: 'Tu souhaites faire des économies ?',
      article_text_money: 'On te donne des astuces pour soulager ton porte-monnaie tout en réduisant ton impact.',
      newsletter_coming_soon: 'Tu as répondu <span class="highlight">« oui »</span> à toutes les questions précédentes ?',
      newsletter_inscription: 'Alors inscris-toi à notre newsletter pour être informé de la suite !',
      newsletter_button_subscribe: 'S\'abonner',
      about_us_who_we_are: 'Qui sommes-nous ?',
      about_us_description: 'Bonjour à toi qui est assis bien sagement derrière ton écran. Nous sommes <span class="highlight">Shannon & Stéphanie</span>, respectivement Belge et Française vivant en Belgique et aux Pays-Bas. Oui, ça fait un sacré mix.\n\nTu te demandes surement pourquoi on a fait ce site ? Figure toi qu\'on travaille toutes les 2 à la <span class="highlight">réduction de nos déchets</span> et on a vite eu les mêmes frustrations et les mêmes expériences foireuses, promis on te racontera !\n\nDu coup on aimerait t\'embarquer dans <span class="highlight">notre aventure zero waste</span> et t\'aider à développer la tienne (que tu en sois à tes débuts ou que tu aies déjà de l\'expérience). Ce qu\'on veut c\'est rendre ton expérience la plus sympa possible en te fournissant les infos dont tu as besoin <span class="highlight">facilement</span>.  Et puis pourquoi pas embarquer tes potes aussi car tout seul on n\'irait pas très loin pour sauver notre belle planète. 🌍',
      social_in_the_meantime: 'Tu veux en savoir plus ?',
      social_follow_us: 'Suis-nous sur les réseaux sociaux&#8239;!',
      social_instagram: 'Instagram',
      social_facebook: 'Facebook',
      share_title: 'Envie de partager avec tes potes ?',
      share_description: 'Envoie-leur ce lien, et n\'oublie pas ta famille, tes collègues, ton voisin, ton chat, ton chien... Pour qu\'on puisse tous agir à notre échelle !',
      share_button_copy: 'Copier l\'URL',
      share_button_native_share: 'Partager',
      language_en: 'Anglais',
      language_fr: 'Français',
      language_nl: 'Néerlandais',
      pluralExample: 'pas d\'élément | {count} élément | {count} éléments'
    },
    newsletter: {
      form_error_message: 'Malheureusement ton inscription n\'a pas pu être enregistrée. Essaie de nouveau 🤞',
      form_success_message: 'Ton inscription à bien marché, bienvenue parmis nous ! 🎉',
      form_title: 'Newsletter',
      from_subtitle: 'Toi aussi tu as hâte de connaître la prochaine étape ? 🙂',
      form_label_email: 'Entre ton adresse e-mail pour t\'inscrire',
      form_email_input_example: 'Indique ton adresse e-mail pour t\'abonner. Par exemple: abc{\'@\'}xyz.com',
      form_accept_terms: 'J\'accepte de recevoir votre newsletter et j\'accepte la déclaration de confidentialité des données.',
      form_unsubscribe: 'Tu peux te désinscrire à tout moment en utilisant le lien figurant dans notre newsletter.',
      form_sendingblue_terms: 'Nous utilisons Sendinblue comme plateforme de marketing. En cliquant ci-dessous pour soumettre ce formulaire, tu reconnais que les informations que tu as fournies seront transférées à Sendinblue pour être traitées conformément à leur ',
      form_sendingblue_terms_link: 'conditions d\'utilisation',
      form_btn_submit: 'Confirmer'
    },
    privacyPolicy: {
      btn_back_to_home: 'Retour à l\'accueil'
    },
    footer: {
      comment_ideas: 'Tu as des commentaires ou des idées&#8239;? Contacte-nous&#8239;!',
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
