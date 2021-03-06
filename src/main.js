/* eslint-disable prettier/prettier */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueCompositionApi from '@vue/composition-api';
import "./element/element.js";

// 路由守卫
import "./router/Guard";
// svg 图标
import "./icons/index.js"

Vue.config.productionTip = false;
Vue.use(VueCompositionApi);

new Vue({
    router,
    store,  // 为 Vue 实例提供创建好的 store,把 store 的实例注入所有的子组件
    render: h => h(App)
}).$mount("#app");