import Vue from "vue";
import {
  Button,
  Form,
  FormItem,
  Input,
  Col,
  Row,
  Message,
  MessageBox,
  Container,
  Header,
  Aside,
  Main,
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
  select,
  option,
  datePicker,
  table,
  tableColumn
} from "element-ui";

Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Col);
Vue.use(Row);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItemGroup);
Vue.use(MenuItem);
Vue.use(select);
Vue.use(option);
Vue.use(datePicker);
Vue.use(table);
Vue.use(tableColumn);
/**
 * Message组件并没有install 方法供Vue来操作的
 * 按照官方引入方法会报错
 * 手动给 Message 添加 install 方法 
 */
Message.install = function (Vue, options) {
  Vue.prototype.$message = Message
}
Vue.use(Message);
MessageBox.install = function (Vue, options) {
  Vue.prototype.$msBox = MessageBox
}
Vue.use(MessageBox);