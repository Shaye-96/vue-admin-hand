import Vue from "vue";
import Vuex from "vuex";
import Cookie from "js-cookie";
Vue.use(Vuex);

import login from "./modules/Login.js"
import config from "./modules/Config.js"

export default new Vuex.Store({
  /**
   * 模块化
   */
  modules: {
    config,
    login
  }
});
