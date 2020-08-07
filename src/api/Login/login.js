import service from "@/utils/request.js"
/**
 * 验证码
 */
export function GetChapter(data) {
  return service.request({
    url: "/getSms/",
    method: "post", // default get
    data: data
  })
}
// 请求信息中的 Request Method 字段位 options 则表示存在跨域问题
// TODO：如何解决跨域，更改 vue.config.js 中的 proxy（具体如何操作，进一步学习）