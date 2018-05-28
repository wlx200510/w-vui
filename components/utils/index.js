import Vue from 'vue';

const isServer = Vue.prototype.$isServer;

function isDef(value) { // 如果value不存在，返回false
  return value !== undefined && value !== null;
}

function isObj(x) {
  const type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function get(object, path) { // 用法没看懂
  const keys = path.split('.');
  let result = object;

  keys.forEach(key => {
    result = isDef(result[key]) ? result[key] : '';
  });

  return result;
}

const camelizeRE = /-(\w)/g;
function camelize(str) { // 用于把中划线变成小驼峰
  return str.replace(camelizeRE, (_, c) => c.toUpperCase());
}

function isAndroid() {
  /* istanbul ignore next */
  return isServer ? false : /android/.test(navigator.userAgent.toLowerCase());
}

export {
  get,
  isObj,
  isDef,
  isServer,
  camelize,
  isAndroid
};
