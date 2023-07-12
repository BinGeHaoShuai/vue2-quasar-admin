import axios from 'axios'
import { Loading } from 'quasar'
import { debounce } from 'lodash-es'
import { NotifyByCode, NotifyErrorTop } from 'src/utils/Notify'
import { clearCookies } from 'src/utils/Auth'

export const apiBase = process.env.DEV ? '/api' : '/project_name'

const request = axios.create({
  baseURL: apiBase,
  timeout: 20000
})

let loadingCount = 0
const loadingDelay = 350
const loadingDebounce = 100

const loadingDelayTimeoutIdList = []

const unauthDebounce = debounce(() => {
  clearCookies()
}, 500)

request.interceptors.request.use(config => {
  showLoading()
  config.headers['X-Powered-By'] = '3.2.1'
  config.headers['Access-Control-Allow-Headers'] = 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With'
  config.headers['Content-Type'] = 'application/json'
  return config
}, err => {
  NotifyErrorTop(`[${err.config.method.toUpperCase()}] ${err.config.url} failed: ${err.message}`)
  return Promise.reject(err)
})

request.interceptors.response.use(config => {
  hideLoading()
  if (config.data.code === '0' || config.data.code === '0') {
    // success
  } else {
    // 如果后端返回代码非成功
    if (config.data && config.data.code && config.data.msg) {
      // 如果后端返回了错误信息，根据 code 提示错误
      NotifyByCode(config.data.code, config.data.msg)
      switch (config.data.code) {
        case '401':
          unauthDebounce()
          break
      }
    } else {
      // 如果后端未返回信息，根据 http status 提示错误
      NotifyErrorTop(`[${config.config.method.toUpperCase()}] ${config.config.url} failed: ${config.status} ${config.statusText}`)
    }
    return Promise.reject(config.data)
  }
  return config.data.data
}, err => {
  hideLoading()
  NotifyErrorTop(`[${err.config.method.toUpperCase()}] ${err.config.url} failed: ${err.message}`)
  return Promise.reject(err)
})

const showLoading = () => {
  loadingCount++
  const loadingDelayTimeoutId = setTimeout(() => {
    if (loadingCount > 0) {
      Loading.show()
    }
  }, loadingDelay)
  loadingDelayTimeoutIdList.push(loadingDelayTimeoutId)
}

const hideLoading = () => {
  loadingCount--
  // 如果 showLoading 延迟时间过长
  // |                    延迟 3000 ms                     |
  // | 第一次请求 100 ms | 间隔 100 ms | 第二次请求 100 ms |
  // 有可能出现第二次请求被计入第一次延迟开始的情况，点击按钮发送请求后直接判定显示 loading
  if (loadingCount <= 0) {
    loadingDelayTimeoutIdList.forEach(() => {
      clearTimeout(loadingDelayTimeoutIdList.pop())
    })
  }
  setTimeout(() => {
    if (loadingCount <= 0) {
      Loading.hide()
    }
  }, loadingDebounce)
}

export default { service: request }
