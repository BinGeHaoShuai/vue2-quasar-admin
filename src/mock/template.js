import { resp } from './utils'

// DTD Document
// https://github.com/nuysoft/Mock/wiki/Syntax-Specification#%E6%95%B0%E6%8D%AE%E6%A8%A1%E6%9D%BF%E5%AE%9A%E4%B9%89%E8%A7%84%E8%8C%83-dtd

const templateMock = {
  template_post: () => {
    return resp({
      'data|1-10': [{
        str: '@word(3, 7)',
        'numRate|1-15': 1,
        date: '@date("M月")',
        'bool|1': true,
        'range|1': [1, 2, 3]
      }]
    })
  },
  template_get: () => {
    return resp({
      data: {
        str: '@word(3, 7)',
        'numRate|1-15': 1,
        date: '@date("M月")',
        'bool|1': true,
        'range|1': [1, 2, 3]
      }
    })
  }
}

export default templateMock
