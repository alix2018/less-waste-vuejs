import { createApp } from 'vue';
import VueGtag from 'vue-gtag';
import i18n from './i18n';
import App from './App.vue';
import router from './router';

createApp(App)
  .use(router)
  .use(VueGtag, {
    config: { id: 'UA-147425189-3' }
  })
  .use(i18n)
  .mount('#app');
