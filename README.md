# 组件库架构思考

分为四个部分：
- 一个部分是要迁移来的组件的代码，学着写一遍
- 第二部分是 dev 调试用的框架，这个使用一个模板单独生成
- 第三部分是使用说明文档，无特殊情况直接 copy
- 第四部分是延伸考虑组件库的发布和打包，但这个不急，因为自己的仓库可以拷贝后随便用

主要是考虑组件库的样式和主题都比较单一，为了自己的业务需求，需要灵活地修改样式和交互式直接可以触及组件层面进行修改，发布和打包并非考虑的重点

## 目录架构的考虑

`components` 用于存放迁移来后的组件文件
`styles` 用于存放各个组件的样式文件，方便统一引入
`docs` 用于放置组件说明文档，主要就是属性和`API`
`demos` 用于调试和引入组件，方便这个库的开发和确认
`build` 用于放置自动生成代码的脚本和打包配置文件

尽管存在不少的架构难点，但这个仓库一定要做起来。

## 组件相关优化

对`Vue`进行公共注入，然后在每个组件里面使用

- 支持插件引入
- 支持直接引入
- 样式直接引入
- 公共函数方法的抽取

- 已添加基本布局组件`col`和`row`
- 研究弹窗组件的实现