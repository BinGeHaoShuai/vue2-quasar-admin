import Vue from 'vue'

const cookiesKeyList = ['jwtToken', 'JSESSIONID']

export const clearCookies = () => {
  if (!process.env.DEV) {
    cookiesKeyList.forEach(cookieKey => {
      Vue.prototype.$cookies.remove(cookieKey)
    })
    // window.location.href = somewhere
  }
}
