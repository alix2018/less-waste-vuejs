import { createApp } from 'vue';
import VueGtag from 'vue-gtag';
import i18n from './i18n';
import App from './App.vue';
import router from './router';
import store from './store';

const gtagId = process.env.NODE_ENV === 'production' ? 'UA-147425189-3' : '';

createApp(App)
  .use(router)
  .use(store)
  .use(VueGtag, {
    config: { id: gtagId }
  })
  .use(i18n)
  .mount('#app');
