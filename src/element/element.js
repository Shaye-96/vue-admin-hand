import Vue from "vue";
import { Button, Form, FormItem, Input, Col, Row, Message } from "element-ui";

Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Col);
Vue.use(Row);
/**
 * Message组件并没有install 方法供Vue来操作的
 * 按照官方引入方法会报错
 * 手动给 Message 添加 install 方法 
 */
Message.install = function (Vue, options) {
  Vue.prototype.$message = Message
}
Vue.use(Message);