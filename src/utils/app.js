import cookie from "js-cookie"

const TOKEN = "user_token"
const NAME = "user_name"

//  TOKEN  ==> set, get, remove
export function getUserToken() {
  return cookie.get(TOKEN)
}

export function setUserToken(value) {
  return cookie.set(TOKEN, value)
}

export function removeUserToken() {
  return cookie.remove(TOKEN)
}

//  USERNAME  ==> set, get, remove
export function setUserName(value) {
  return cookie.set(NAME, value)
}

export function getUserName() {
  return cookie.get(NAME)
}

export function removeUserName() {
  return cookie.remove(NAME)
}