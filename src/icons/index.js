import Vue from "vue";
import svgIcon from "./svgIcon.vue"

Vue.component('svg-icon', svgIcon)

// 目录，是否遍历子集目录，正则表达式定义遍历规则
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => {
  return requireContext.keys().map(requireContext)
}
requireAll(req)