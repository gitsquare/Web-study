/*
* @Author: TomChen
* @Date:   2019-04-09 19:28:12
* @Last Modified by:   TomChen
* @Last Modified time: 2019-04-12 19:05:31
*/
import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from './store'//会默认自动找store目录下面的index.js文件

import App from './App.js'

//App是整个应用的顶层组件
ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById('root'))