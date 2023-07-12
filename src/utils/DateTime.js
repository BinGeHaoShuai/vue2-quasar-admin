// Ver: 0.1
// Last Update: 2022/11/25
// 功能性修改请及时更新版本号并修改注释

// TODO: 封装 moment 提供的其他方法，以便后期维护统一调整

import { template } from 'lodash-es'
import moment from 'moment'

const baseDate = () => {
  return moment()
}

export const baseDateSeparator = '-'
export const baseTimeSeparator = ':'
// 这种格式只应用于 moment.js 格式化，ISO 8601
// http://momentjs.cn/docs/#/displaying/format/
// 如果项目不得不在前端也使用 java.text.DateFormat，引入 moment-jdateformatparser
export const baseDateFormat = ['YYYY', 'MM', 'DD'].join(baseDateSeparator)
export const baseYearMonthFormat = ['YYYY', 'MM'].join(baseDateSeparator)
export const chsDateFormat = 'YYYY年MM月DD日'
export const baseTimeFormat = ['HH', 'mm', 'ss'].join(baseTimeSeparator)

/**
 * 获取原始 Date 对象
 * @param date
 * @return {moment.Moment}
 */
export const getDateObj = (date) => {
  return moment(date)
}

/**
 * 获取格式化日期
 * @param val
 * @return {string}
 */
export const getFormatDate = (val) => {
  return getDateObj(val).format(baseDateFormat)
}

/**
 * 获取中文格式化日期
 * @param val
 * @return {string}
 */
export const getChsFormatDate = (val) => {
  return getDateObj(val).format(chsDateFormat)
}

/**
 * 获取格式化时间
 * @param val
 * @return {string}
 */
export const getFormatTime = (val) => {
  return getDateObj(val).format(baseTimeFormat)
}

/**
 * 获取当前时间
 * @return {string}
 */
export const getNowFormatTime = () => {
  return baseDate().format(baseTimeFormat)
}

/**
 * 获取当前日期
 * @return {string}
 */
export const getNowFormatDate = () => {
  return baseDate().format(baseDateFormat)
}

/**
 * 获取前一天日期
 * @return {string}
 */
export const getYesterdayFormatDate = () => {
  return getLastDaysFormatDate(1)
}

/**
 * 获取后一天日期
 * @return {string}
 */
export const getTomorrowFormatDate = () => {
  return getNextDaysFormatDate(1)
}

/**
 * 获取前 7 天日期
 * @return {string}
 */
export const getLastweekFormatDate = () => {
  return getLastDaysFormatDate(7)
}

/**
 * 获取向后自定义天数相对日期
 * @param val
 * @return {string}
 */
export const getNextDaysFormatDate = (val) => {
  return getNextDaysDateObj(val).format(baseDateFormat)
}

/**
 * 获取向后自定义天数相对日期原始对象
 * @param val
 * @return {moment.Moment}
 */
export const getNextDaysDateObj = (val) => {
  return baseDate().add(val, 'days')
}

/**
 * 获取自定义天数相对日期
 * @param val
 * @return {string}
 */
export const getLastDaysFormatDate = (val) => {
  return getLastDaysDateObj(val).format(baseDateFormat)
}

/**
 * 获取自定义天数相对日期原始对象
 * @param val
 * @return {moment.Moment}
 */
export const getLastDaysDateObj = (val) => {
  return baseDate().subtract(val, 'days')
}

/**
 * 格式化非标准日期，例如 2022-8-1 => 2022-08-01
 * @param val
 * @return {string}
 */
export const formatNonstandardDate = (val) => {
  return getDateObj(new Date(val)).format(baseDateFormat)
}
