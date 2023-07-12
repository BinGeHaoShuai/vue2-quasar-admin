import { Notify } from 'quasar'
import { nanoid } from 'nanoid/non-secure'

const NotifyList = []

export const NotifyByCode = (code, msg) => {
  if (isNotifyExist(code, msg)) {
    return
  }

  const notifyId = nanoid()

  switch ((typeof code) === 'number' ? code : code.substr(0, 1)) {
    case 'N':
      NotifyNormalTop(msg, notifyId)
      break
    case 'W':
    case 401 :
      NotifyWarnTop(msg, notifyId)
      break
    case 'E':
      NotifyErrorTop(msg, notifyId)
      break
    case 'C':
      NotifyConfirmTop(msg, notifyId)
      break
    default:
      NotifyErrorTop(msg, notifyId)
  }
  NotifyList.push({ id: notifyId, code, msg })
}

export const NotifyNormalTop = (msg, id = '') => {
  Notify.create({
    message: msg,
    position: 'top',
    color: 'info',
    group: false,
    onDismiss: delNotifyById(id)
  })
}

export const NotifyWarnTop = (msg, id = '') => {
  Notify.create({
    message: msg,
    position: 'top',
    color: 'warning',
    group: false,
    onDismiss: delNotifyById(id)
  })
}

export const NotifyConfirmTop = (msg, id = '') => {
  Notify.create({
    message: msg,
    position: 'top',
    color: 'primary',
    group: false,
    onDismiss: delNotifyById(id)
  })
}

export const NotifySuccessTop = (msg, id = '') => {
  Notify.create({
    message: msg,
    position: 'top',
    color: 'positive',
    group: false,
    onDismiss: delNotifyById(id)
  })
}

export const NotifyErrorTop = (msg, id = '') => {
  Notify.create({
    message: msg,
    position: 'top',
    color: 'negative',
    group: false,
    onDismiss: delNotifyById(id)
  })
}

const isNotifyExist = (code, msg) => {
  for (const notifyItem of NotifyList) {
    if (
      notifyItem.code === code &&
      notifyItem.msg === msg
    ) {
      return true
    }
  }
  return false
}

const delNotifyById = (id) => {
  return () => {
    const notifyIndex = NotifyList.findIndex(item => item.id === id)
    NotifyList.splice(notifyIndex, 1)
  }
}
