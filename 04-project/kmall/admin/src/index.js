//1.整个应用的入口
//2.webpack-config.js中的入口指定该文件
import React from 'react'
import ReactDOM from 'react-dom'

//Provider的作用是将整个应用的唯一store传递到所有的子组件
import { Provider } from 'react-redux'
//引入Provider的作用是在Provider包裹的所有组件能够拿到store中的数据，
//没有引用Proveder时，通过订阅store.subscribe方法拿到state里面的数据

//整个应用的唯一stor
import store from './store'

import App from './App.js'

//注意:Provider组件的store属性用来指定整个应用的唯一store
ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById('root'))
//->App.js文件