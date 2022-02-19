import { createRouter, createWebHistory } from 'vue-router';

import PageHome from '../components/PageHome.vue';
import PagePrivacyPolicy from '../components/PagePrivacyPolicy.vue';
import NewsletterForm from '../components/NewsletterForm.vue';
import NewsletterConfirmation from '../components/NewsletterConfirmation.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: PageHome,
    }, {
      path: '/privacy-policy',
      name: 'Privacy Policy',
      component: PagePrivacyPolicy,
    }, {
      path: '/newsletter',
      name: 'Newsletter',
      component: NewsletterForm,
    }, {
      path: '/newsletter-confirmation',
      name: 'NewsletterConfirmation',
      component: NewsletterConfirmation,
    }, {
      path: '/:catchAll(.*)',
      redirect: '/'
    }
  ]
});
