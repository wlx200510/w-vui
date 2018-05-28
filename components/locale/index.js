import Vue from 'vue';
import deepAssign from '../utils/deep-assign';
import defaultMessages from './lang/zh-CN';

const proto = Vue.prototype;
const defaultLang = 'zh-CN';

const locale = {
  install() {
    if (proto.$varlLang) {
      return;
    }
    Vue.util.defineReactive(proto, '$varlLang', defaultLang);
    Vue.util.defineReactive(proto, '$varlMessage', { [defaultLang]: defaultMessages});
  },

  use(lang, message) {
    proto.$varlLang = lang;
    this.add({ [lang]: message });
  },

  add(messages = {}) {
    deepAssign(proto.$varlMessages, messages);
  }
};

locale.install();

export default locale;