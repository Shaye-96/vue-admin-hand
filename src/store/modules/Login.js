import {
  Login
} from "@/api/Login/login.js";
import {
  setUserToken,
  setUserName,
  getUserName,
  removeUserToken,
  removeUserName
} from "@/utils/app";

// state 存放基本数据
const state = {
  userName: getUserName() || '',
  token: ''
}

// mutations 更改 store 的唯一方法，提交mutations，类似事件，事件类型 + 回调函数
const mutations = {
  // username 
  SET_USERNAME(state, value) {
    state.userName = value
  },
  // token
  SET_TOKEN(state, value) {
    state.token = value
  }
}

// getters 相当于计算属性
const getters = {}

/**
 * 同 mutations 类似，用于修改state 中数据的值
 * 1.主要是异步，也可以同步(触发action ，action再触发mutati)
 * 2.action 改变状态最后是通过提交 mutation this.$store.depatch(actionName)
 * 3.角色定位基于流程顺序，二者扮演不同角色
 * mutation：专注修改state，理论上是修改state 的唯一途径
 * action：业务代码、异步请求
 */
const actions = {
  // 同步
  // setMenuStatus(content, value) {
  //   content.commit("SET_COLLAPSE")
  // }
  /**
   * 异步：请求接口返回数据后，接着去做别的事情
   */
  login(content, value) {
    return new Promise((resolve, reject) => {
      Login(value) // 调用的是api 下的登陆方法
        .then(response => {
          resolve(response)
          setUserToken(response.data.data.token)
          setUserName(response.data.data.username)
          content.commit("SET_USERNAME".response.data.data.userName)
          content.commit("SET_TOKEN".response.data.data.token)
        })
        .catch(error => {
          reject(error);
        })
    })
  },
  exit(content) {
    return new Promise((resolve, reject) => {
      removeUserToken();
      removeUserName();
      content.commit("SET_TOKEN", '')
      content.commit("SET_USERNAME", '')
      resolve()
    })
  }
  /**
   * 外部调用：
   * this.$store.dispatch('login', 参数)
   *  .then((response) => { resolve(response) })
   *  .catch(error => { reject(error) })
   */
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}