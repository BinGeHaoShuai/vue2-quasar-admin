// Ver: 1.9
// Last Update: 2023/07/12
// 功能性修改请及时更新版本号并修改注释
// Wr = |W * cos(α)| + |H * sin(α)|
// Hr = |H * cos(α)| + |W * sin(α)|

import { isEmpty } from 'lodash-es'

// TODO: 验证字体加载是否正常

const waterMarkId = 'page--watermark'
const fontSize = 18
const fontFamily = '"Source Han Sans HW SC VF", "思源黑体 HW VF", "SourceHanSansHWSC", "Roboto", "-apple-system", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"'
const lineOffset = 22
const waterMarkColOffset = 100
const waterMarkRowOffset = 100
const rotateAngle = 20

/**
 * 生成全屏水印
 * @function
 * @param {Array<string>} strArray 水印文本，每行一个
 */
const generateWatermark = (strArray) => {
  if (isEmpty(strArray) || strArray.includes(undefined)) {
    return
  }
  const canvas = document.createElement('canvas')
  const rectWidth = getStrMaxWidth(strArray)
  const rectHeight = lineOffset * strArray.length
  const angleCos = Math.cos(rotateAngle * Math.PI / 180)
  const angleSin = Math.sin(rotateAngle * Math.PI / 180)

  canvas.width = Math.abs(rectWidth * angleCos) + Math.abs(rectHeight * angleSin) + waterMarkColOffset
  canvas.height = Math.abs(rectWidth * angleSin) + Math.abs(rectHeight * angleCos) + waterMarkRowOffset
  canvas.onselectstart = () => false

  const canvasCenterX = canvas.width / 2
  const convasCenterY = canvas.height / 2

  const canvasContext = canvas.getContext('2d')
  canvasContext.translate(canvasCenterX, convasCenterY)
  canvasContext.rotate(rotateAngle * Math.PI / 180)
  canvasContext.translate(-canvasCenterX, -convasCenterY)
  canvasContext.font = `${fontSize}px ${fontFamily}`
  // Debug start
  // canvasContext.fillStyle = 'red'
  // canvasContext.fillRect(0, 0, canvas.width, canvas.height)
  // Debug finish
  canvasContext.fillStyle = '#666'
  canvasContext.textAlign = 'center'
  let offset = 0
  for (const str of strArray) {
    canvasContext.fillText(
      str,
      canvasCenterX,
      fontSize + offset + (canvas.height - rectHeight) / 2
    )
    offset += lineOffset
  }

  const div = document.createElement('div')
  div.id = waterMarkId
  div.style.pointerEvents = 'none'
  div.style.top = '40px'
  div.style.left = '0px'
  div.style.opacity = '0.15'
  div.style.position = 'fixed'
  div.style.zIndex = '999'
  div.style.width = document.documentElement.clientWidth + 'px'
  div.style.height = document.documentElement.clientHeight + 'px'
  div.style.background = 'url(' + canvas.toDataURL('image/png') + ') left top repeat'
  document.body.appendChild(div)
}

const getStrMaxWidth = (strArray) => {
  const canvas = document.createElement('canvas')
  const canvasContext = canvas.getContext('2d')
  let strMaxWidth = 0
  canvasContext.font = `${fontSize}px ${fontFamily}`
  // 非等宽字体不一定字符最多就最长
  strArray.forEach(str => {
    const strWidth = canvasContext.measureText(str).width
    strMaxWidth = strMaxWidth >= strWidth ? strMaxWidth : strWidth
  })
  canvas.remove()
  return strMaxWidth
}

export const setWaterMark = (strArray) => {
  if (document.getElementById(waterMarkId) === null) {
    generateWatermark(strArray)
  } else {
    removeWaterMark()
    generateWatermark(strArray)
  }
}

export const removeWaterMark = () => {
  if (document.getElementById(waterMarkId) !== null) {
    document.body.removeChild(document.getElementById(waterMarkId))
  }
}

export const isWaterMarkExist = () => {
  return document.getElementById(waterMarkId) !== null
}
