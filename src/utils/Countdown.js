// Ver: 1.0
// Last Update: 2022/08/25
// 功能性修改请及时更新版本号并修改注释

/**
 * setTimout 在计时结束后将任务加入队列，等待空闲资源执行
 * 计算上一次计时结束后的误差时间作为下一次的参数
 * 每次执行触发回调方法，剩余次数作为参数
 * @function
 * @param {number}    times   重复次数
 * @param {number}    timeout 延迟时长，单位 ms
 * @param {function}  func    回调方法
 */
export const countdown = (times, timeout, func) => {
  if (times === 0) {
    return
  }
  const startTime = new Date().getTime()
  setTimeout(() => {
    const endTime = new Date().getTime()
    const deviation = endTime - startTime - timeout
    times--
    func(times)
    countdown(times, timeout - deviation, func)
  }, timeout)
}
