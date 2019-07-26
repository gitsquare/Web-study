//react必须引入，虽然下面没有使用，但是下面会按照react的语法
import React from 'react';

//引入react-dom就是用来把组件挂载到DOM节点上
import ReactDOM from 'react-dom';

import App from './App.js';

//引入react就是是用react语法来解析文件(js文件中有html代码)。如下面这样的代码写法
// ReactDOM.render(<h1>Hello,world</h1>,document.getElementById('root'));
ReactDOM.render(<App />,document.getElementById('root'));
//<App/>就是一个组件
