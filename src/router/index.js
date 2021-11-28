import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../components/HomePage.vue';
import PrivacyPolicyPage from '../components/PrivacyPolicyPage.vue';
import NewsletterConfirmation from '../components/NewsletterConfirmation.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    }, {
      path: '/privacy-policy',
      name: 'Privacy Policy',
      component: PrivacyPolicyPage,
    }, {
      path: '/confirmation',
      name: 'NewsletterConfirmation',
      component: NewsletterConfirmation,
    }, {
      path: '/:catchAll(.*)',
      redirect: '/'
    }
  ]
});
