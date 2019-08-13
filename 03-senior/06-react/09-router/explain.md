1. 安装webpack并配置
2. 安装babel 用来解析es6语法或者是es7语法分解析器，让开发者能够使用新的es语法，同时支持jsx，vue等多种框架
3. 'react'
4. 'react-dom'
5. 'antd'  UI组件库。
6. 'redux' 数据层框架，用来创建store管理数据。
7. 'axios' 发送ajax。
8. 'redux-thunk' 中间件，对dispatch方法的升级，派发的action不仅可以是一个对象,也可以是一个函数。
9. 'redux-logger' 中间件，主要用来提供派发数据的信息分析，供开发时使用。
10. 'react-redux' 
通过import { Provider } from'react-redux'， ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById('root'))用Provider包裹的组件都可以使用传入其中的store。
11. 'immutable' 通过import { fromJS } from 'immutable'，用fromJS包装的数据会变成immutable数据。
12. 'redux-immutable' 把原始的state变成immutable数据，需要引入redux-immutable，而不是redux。
13. 'react-router-dom' 前端路由。