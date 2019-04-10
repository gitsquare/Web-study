
import React from 'react';//const React = require('react')

//引入react-dom就是用来把组件挂载到DOM节点上
import ReactDOM from 'react-dom';

import app from './App';

//引入react就是是用react语法来解析文件。如下面这样的代码写法
// ReactDOM.render(<h1>nihao</h1>,document.getElementById('root'));
ReactDOM.render(<App/>,document.getElementById('root'));

