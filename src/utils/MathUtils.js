// Ver: 0.4
// Last Update: 2023/04/26
// 功能性修改请及时更新版本号并修改注释

// math.js exponentiation(**) used for at least Chrome 52
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation#browser_compatibility
// Add /mathjs/ to quasar.conf.js => build.transpileDependencies
// Add "@babel/plugin-transform-exponentiation-operator" to babel.config.js => plugins

// So DO NOT use bigint because @babel/plugin-transform-exponentiation-operator use Math.pow() replace **

import { all, create } from 'mathjs'

// https://mathjs.org/docs/core/configuration.html
const config = {
  epsilon: 1e-12,
  matrix: 'Matrix', // 'Matrix' | 'Array'
  number: 'number', // 'number' | 'BigNumber'
  precision: 64,
  predictable: false,
  randomSeed: null
}

const math = create(all, config)

const MathUtils = {
  PI: math.pi,
  add: (...params) => {
    return math.add(...params)
  },
  subtract: (x, y) => {
    return math.subtract(x, y)
  },
  multiply: (...params) => {
    return math.multiply(...params)
  },
  divide: (x, y) => {
    return math.divide(x, y)
  },
  sin: (x) => {
    return math.sin(x)
  },
  cos: (x) => {
    return math.cos(x)
  },
  abs: (x) => {
    return math.abs(x)
  },
  min: (...params) => {
    return math.min(...params)
  },
  max: (...params) => {
    return math.max(...params)
  },
  floor: (x, n) => {
    return math.floor(x, n)
  },
  round: (x, n) => {
    return math.round(x, n)
  },
  isNan: (x) => {
    return math.isNaN(x)
  }
}

export default MathUtils
