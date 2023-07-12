import router from 'src/router'

export const openNewTab = (routeName = '', query = {}) => {
  const routeResolve = router().resolve({
    name: routeName,
    query
  })
  window.open(routeResolve.href, '_blank')
}
