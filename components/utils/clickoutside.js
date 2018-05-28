/**
 * v-clickoutside
 *
 * ```vue 自定义指令
 * <div v-clickoutside="onClose">
 * ```
 */

import { on, off } from './event';

const context = '@@clickoutsideContext';

export default {
  bind(el, binding) {
    const handler = event => {
      if (!el.contains(event.target)) {
        el[context].callback();
      }
    };

    el[context] = {
      handler,
      callback: binding.value,
      arg: binding.arg || 'click' // 默认动作为点击
    };

    on(document, el[context].arg, handler);
  },

  update(el, binding) {
    el[context].callback = binding.value;
  },

  unbind(el) {
    off(document, el[context].arg, el[context].handler);
  },

  install(Vue) {
    Vue.directive('clickoutside', {
      bind: this.bind,
      unbind: this.unbind
    });
  }
}