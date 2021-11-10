import { createApp } from 'vue';
import VueGtag from 'vue-gtag';
import i18n from './i18n';
import App from './App.vue';
import router from './router';
import store from './store';
import config from '../config';

createApp(App)
  .use(router)
  .use(store)
  .use(VueGtag, {
    config: {
      id: process.env.NODE_ENV === 'production' ? config.googleAnalyticsId : '',
      params: {
        anonymize_ip: true,
        allow_google_signals: false,
        allow_ad_personalization_signals: false
      }
    }
  })
  .use(i18n)
  .mount('#app');
