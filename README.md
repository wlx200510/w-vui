# [w-vui](https://brickies.github.io/vui/)

[![Version](https://img.shields.io/npm/v/w-vui.svg)](https://www.npmjs.com/package/w-vui) [![Downloads](http://img.shields.io/npm/dm/w-vui.svg)](https://www.npmjs.com/package/w-vui) [![License](https://img.shields.io/npm/l/w-vui.svg?style=flat)](https://opensource.org/licenses/MIT) [![TravisCI](https://travis-ci.org/wlx200510/varl_components.svg)](https://travis-ci.org/wlx200510/varl_components)

> It's a A personal Vue UI component library .

## 安装

### npm 安装

```shell
npm i w-vui -S // 这个库目前不是注册的npm
```

### CDN
```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/w-vui/lib/vui-css/index.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/w-vui/lib/vui.js"></script>
```

## 快速开始

### 完整引入

```javascript
import Vue from 'vue'
import vui from 'w-vui'
import 'w-vui/lib/vui-css/index.css';

Vue.use(vui)
```

### 部分引入

```javascript
import Vue from 'vue'
import {
  Scroller,
  Select
  // ...
} from 'w-vui'
import 'w-vui/lib/vui-css/scroller.css';
import 'w-vui/lib/vui-css/select.css';

Vue.component(Scroller.name, Scroller)
Vue.component(Select.name, Select)
```

### 引入插件

**注：完整引入了vui，则无需再注册插件**

```javascript
import Vue from 'vue';
import { 
  $Toast, 
  $Dialog 
  // ...
} from 'w-vui';

Vue.prototype.$toast = $Toast
Vue.prototype.$dialog = $Dialog
```
 
## 贡献代码

修改代码请阅读 [开发指南](https://github.com/wlx200510/varl_components/blob/dev/.github/CONTRIBUTING.md)， 使用过程中发现任何问题都可以提 [Issue](https://github.com/wlx200510/varl_components/issues) 给我。当然，我也非常欢迎你给我发 [PR](https://github.com/wlx200510/varl_components/pulls)。

## 开源协议

本项目基于 [MIT](https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89) 协议，请自由地享受和参与开源。

## 特别感谢

该组件库部分灵感来自于 [`element`](https://github.com/ElemeFE/element) 和 [`vant`](https://github.com/youzan/vant)，这里感谢 [`饿了么前端团队`](https://github.com/ElemeFE) 和 [`有赞前端团队`](https://github.com/youzan) 对开源项目的贡献，手动点波赞 👍 
