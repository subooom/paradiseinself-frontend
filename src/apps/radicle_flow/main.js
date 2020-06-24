import Vue from 'vue';
import VueRouter from 'vue-router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faSave } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';

library.add(faEnvelope);
library.add(faSave);
library.add(faGoogle);
library.add(faFacebook);
library.add(faUser);
library.add(faKey);

Vue.config.productionTip = false;

window.Vue = require('vue');

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueRouter);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
