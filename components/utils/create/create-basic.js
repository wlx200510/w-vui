/**
 * Create a basic component with common options
 */

import '../../locale'; // 添加语言记录逻辑
import bem from '../../mixins/bem';  // 样式命名函数
import i18n from '../../mixins/i18n'; // 国际化的插件

const install = function(Vue) {
  Vue.component(this.name, this);
};

export default function(sfc) {
  sfc.name = 'varl-' + sfc.name; // 生成的组件命名为 varl-button
  sfc.install = sfc.install || install;
  sfc.mixins = sfc.mixins || [];
  sfc.mixins.push(i18n, bem); // 语言获取函数和bem命名函数被全部注入

  return sfc;
}