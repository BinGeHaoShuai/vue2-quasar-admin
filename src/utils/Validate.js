import { isEmpty } from 'lodash-es'

export const notEmptyRule = (val) => {
  if (typeof val === 'number') {
    val = val.toString()
  }
  return !isEmpty(val) || '不允许为空'
}
