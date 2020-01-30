import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import 'babel-polyfill';
import vuetify from "./plugins/vuetify";
import mixinGlobal from './mixins/Global';

Vue.config.productionTip = false;
Vue.mixin(mixinGlobal);
require("@/assets/styles/_variables.scss");

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");