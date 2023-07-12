import { isEmpty } from 'lodash-es'
import store from 'src/store'

const genRouteTree = (menu) => {
  let result = []
  if (!isEmpty(menu)) {
    menu.forEach(item => {
      result.push({
        name: item.name,
        path: item.path,
        component: resolve => require([`src/pages/${item.component}`], resolve)
      })
      result = [...result, ...genRouteTree(item.children)]
    })
  }
  return result
}

const getRoutes = async () => {
  // TODO: getMenu here
  const menu = await store.dispatch('globalConfig/getMenu')
  return new Promise(resolve => {
    resolve([
      {
        path: '/',
        component: resolve => require(['src/layouts/MainLayout'], resolve),
        children: genRouteTree(menu)
      },
      {
        path: '*',
        component: resolve => require(['src/pages/Error404'], resolve)
      }
    ])
  })
}

export const isRoute = route => {
  return !isEmpty(route.path)
}

export default getRoutes
