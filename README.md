_代码库由 webpack,react,antd 构建_

* react 采用最新的`react@16`
* 组件库采用 `antd@3.0`
* 组件库采用 `antd@3.0`, 使用 babel-plugin-import 按需加载 antd 组件, 在.babelrc 中配置
* CSS 采用`less`, 使用 less3.0 引入 antd 样式, webpack 打包会报错, 建议使用 less@2.7.1
* .babelrc 是 Babel 的配置文件，存放在项目的根目录下。
* mode 是 webpack 4 中新增加的参数选项，其有两个可选值：production 和 development。mode 不可缺省，需要二选一。
* production 模式：1,默认提供所有可能的优化，如代码压缩/作用域提升等;2,不支持 watching;3,process.env.NODE_ENV 的值不需要再定义，默认是 \* \* production
* development 模式：1,主要优化了增量构建速度和开发体验;2,开发模式下支持注释和提示，并且支持 eval 下的 source maps;3,process.env.NODE_ENV 的值不需要再定义，默认是 development
