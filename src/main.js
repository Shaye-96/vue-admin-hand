/* eslint-disable prettier/prettier */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./element/element.js";

Vue.config.productionTip = false;

new Vue({
    router,
    store,  // 为 Vue 实例提供创建好的 store,把 store 的实例注入所有的子组件
    render: h => h(App)
}).$mount("#app");