import demoConfig from './demo.config';
import DemoList from './components/DemoList';
import Vue from 'vue';

const registerRoute = () => {
  const route = [{
    path: '*',
    redirect: to => `/zh-CN/`
  }];

  Object.keys(docConfig).forEach((lang, index) => {
    route.push({
      path: `/${lang}`,
      conponent: DemoList,
      meta: { lang }
    });

    const navs = docConfig[lang].list || [];
    navs.forEach(nav => {
      if (nav.list) {
        nav.list.forEach(page => addRoute(page, lang));
      } else {
        addRoute(nav, lang);
      }
    });
    
    function addRoute(page, lang) {
      if (page.noExample) { return; }
      const { path } = page;
      if (path) {
        const name = lang + '/' + path.replace('/', '');
        let component;

        component = () => import(`./view${page.title}.md`)
        route.push({
          name,
          component,
          path: `/${lang}${path}`,
          meta: {
            lang,
            name: page.title
          }
        });
      }
    }
  });

  return route;
}

export default registerRoute;
