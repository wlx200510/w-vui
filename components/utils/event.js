/**
 * 事件绑定和解绑的辅助函数 on | off
 */

import { isServer } from './';
// dom在服务端是不能用的

// 以下这一段代码用于判断是否支持passive:true来优化触摸
export let supportsPassive = false;
if (!isServer) {
  try {
    const opts = {};
    Object.defineProperty(opts, 'passive', {
      get() {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    });
    window.addEventListener('test-passive', null, opts);
  } catch (e) { }
}

export function on(target, event, handler, passive = false) {
  !isServer && 
    target.addEventListener(
      event,
      handler,
      supportsPassive ? {capture: false, passive } : false
    );
}

export function off(target, event, handler) {
  !isServer && target.removeEventListener(event, handler)
}