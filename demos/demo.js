import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './demoApp';
import routes from './demoRoutes';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  base: '/varlUI/components',
  routes: routes()
});

router.afterEach(() => {
  if (router.currentRoute.name) {
    window.scrollTo(0, 0);
  }
  if (!router.currentRoute.redirectedFrom) {
    Vue.nextTick(() => window.syncPath());
  }
});

window.vueRouter = router;

new Vue({ // eslint-disable-line
  render: h => h(App),
  router,
  el: '#app'
});
