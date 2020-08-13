// state 存放基本数据
const state = {
  isCollapse: JSON.parse(sessionStorage.getItem('isCollapse')) || false,
  count: 10,
}

// mutations 更改 store 的唯一方法，提交mutations，类似事件，事件类型 + 回调函数
const mutations = {
  SET_COLLAPSE(state) {
    state.isCollapse = !state.isCollapse
    // Cookie 缓存
    // Cookie.set('isCollapse',JSON.stringify(state.isCollapse))
    // JSON.parse(Cookie.get('isCollapse'))
    // H5 本地缓存
    sessionStorage.setItem('isCollapse', JSON.stringify(state.isCollapse)) //  存 setItem 删除 removeItme('key') 清除全部clear()
    // JSON.parse(sessionStorage.getItem('isCollapse')) // 取 getItem
  },
  SET_COUNT(store, value) {
    store.count = value
  }
}

// getters 相当于计算属性
const getters = {
  count: state => state.count + 10
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}