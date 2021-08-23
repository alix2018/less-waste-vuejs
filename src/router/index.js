import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../components/HomePage.vue';
import TestPage from '../components/TestPage.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    }, {
      path: '/test',
      name: 'Test',
      component: TestPage,
    }, {
      path: '/:catchAll(.*)',
      redirect: '/'
    }
  ]
});
