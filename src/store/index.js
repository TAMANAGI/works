import Vue from "vue";
import Vuex from "vuex";
import common from "./modules/common";
import profile from "./modules/profile";
import bsp from "./modules/BSP_Release";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    common,
    profile,
    bsp,
  },
});