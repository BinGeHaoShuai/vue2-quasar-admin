import request from './request'

const dashboardApi = {
  getSummaryData: () => {
    return request.service({
      url: '/dashboard/getSummaryData',
      method: 'get'
    })
  }
}

export default dashboardApi
