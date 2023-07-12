// Ver: 0.1
// Last Update: 2022/11/25
// 功能性修改请及时更新版本号并修改注释

export const tableTrans = {
  noData: '暂无数据',
  noResults: '找不到匹配的数据',
  loading: '正在加载中...',
  selectedRecords: rows => `已选择 ${rows} 行`,
  recordsPerPage: '每页：',
  allRows: '全部',
  rowsPerPageOptions: [10, 20, 50],
  rowsPerPageOptionsNone: [0],
  paginationLabel: (start, end, total) => `第 ${start} ~ ${end} 条 | 共：${total} 条`,
  columns: '列',
  columnStyle: {}
}

export const dateTrans = {
  days: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
  daysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
  months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
  monthsShort: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
  headerTitle: (date) => {
    return new Intl.DateTimeFormat('zh-hans', {
      weekday: 'short', month: 'short', day: 'numeric'
    }).format(date)
  },
  firstDayOfWeek: 0, // 0-6, 0 - Sunday, 1 Monday, ...
  format24h: false
}
