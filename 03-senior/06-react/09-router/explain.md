首先安装webpack并配置

1. 'react'
2. 'react-dom'
3. 'antd'  UI组件库
4. 'redux' 数据层框架，用来创建store管理数据
5. 'axios' 发送ajax
6. 'redux-thunk' 中间件，对dispatch方法的升级，派发的action不仅可以是一个对象,也可以是一个函数
7. 'redux-logger' 中间件，主要用来提供派发数据的信息分析，供开发时使用

8. 'react-redux' 
通过import { Provider } from'react-redux'， ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById('root'))用Provider包裹的组件都可以使用传入其中的store

9. 'immutable' 通过import { fromJS } from 'immutable'，用fromJS包装的数据会变成immutable数据
10. 'redux-immutable' 把原始的state变成immutable数据，需要引入redux-immutable，而不是redux
11. 'react-router-dom' 前端路由