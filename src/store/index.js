import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // state 存放基本数据
  state: {
    isCollapse:false,
    count: 10,
  },
  // mutations 更改 store 的唯一方法，提交mutations，类似事件，事件类型 + 回调函数
  mutations: {
    SET_COLLAPSE(state) {
      state.isCollapse = !state.isCollapse
    },
    SET_COUNT(store, value) {
      store.count = value
      console.log(store.count);
    }
  },
  // getters 相当于计算属性
  getters: {
    count: state => state.count + 10
  },
  actions: {},
  modules: {}
});
