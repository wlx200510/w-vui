/* eslint-disable */

const registerRoute = (navConfig, isMobile) => {
  let route = []
  let navs = navConfig['zh-CN']
  navs.forEach(nav => {
    if (isMobile && !nav.showInMobile) {
      return
    }

    if (nav.groups) {
      nav.groups.forEach(group => {
        group.list.forEach(item => {
          addRoute(item)
        })
      })
    } else if (nav.children) {
      nav.children.forEach(nav => {
        addRoute(nav)
      })
    } else {
      addRoute(nav)
    }
  })

  function addRoute(page) {
    const component = () => import(`./zh-CN${page.path}.md`)
    route.push({
      path: '/components' + page.path,
      component: component.default || component
    })
  }

  return route
}

export default registerRoute