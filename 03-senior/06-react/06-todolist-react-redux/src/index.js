import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from './store'//会默认自动找store目录下面的index.js文件

import App from './App.js'

//App是整个应用的顶层组件
//用Provider包裹，设置一个store属性，值是从store目录下index.js文件中导出来的
//用Provider包裹以后，所有的子组件都可以拿到传进的这个store
ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById('root'))