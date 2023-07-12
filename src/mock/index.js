import Mock from 'mockjs'
import templateMock from 'src/mock/template'

/* eslint-disable prefer-regex-literals */
Mock.mock('/api/templateMock/post', 'post', templateMock.template_post())
Mock.mock(RegExp('/api/templateMock/get.*'), 'get', templateMock.template_get())
/* eslint-disable prefer-regex-literals */
