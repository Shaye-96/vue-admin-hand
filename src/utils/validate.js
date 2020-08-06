// 校验规则
/**
 * 过滤特殊字符穿
 */
export function stripscript(str) {
  var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）&;—|{}【】‘；：”“'。，、？ ]")
  var rs = "";
  for (var i = 0; i < str.length; i++) {
          rs = rs + str.substr(i, 1).replace(pattern, '');
      }
  return rs;
}
/**
 * 验证邮箱
 */
export function checkEmial(value) {
  const reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
  return !reg.test(value)
}
/**
 * 验证密码 6-20为字母数字组合
 */
export function checkPassword(value) {
  const reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
  return !reg.test(value)
}
/**
 * 验证验证码 6位字母或数字
 */
export function checkChapter(value) {
  const reg = /^[a-z0-9]{6}$/;
  return !reg.test(value)
}