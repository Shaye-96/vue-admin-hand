
import router from "./index";

import { getToken } from "@/utils/app"

// 路由白名单
const whiteRouter = ['/login'];

// 路由守卫
/**
 * next()：一定要调用该方法来resolve 这个钩子，执行结果依赖next 方法的调用参数
 * next()：执行 to 里面的路由对象
 * next(false)：中断当前路由
 * next('/')或者 next({path:'/'})：终端当前导航，跳转到一个新的导航
 */
router.beforeEach((to, from, next) => {
  if (getToken()) {
    next()
  } else {
    if(whiteRouter.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
  next()
})