//执行和引用模块
//多次引用模块只执行一次，引用了App.js文件就相当于执行了这个js文件
// import './App.js';
// import './App.js';


//写法一
// import {a,b} from './App.js';//用结构解析的方法

//写法三
//import命令可以使用as关键字将输入的变量重命名。
/*import {a1,b as b1} from './App.js';
console.log(a1,b1);*/


//写法五
/*import def from './App.js';
console.log(def);*/


import React from 'react';
import ReactDOM from 'react-DOM';

import App from './App05-antd.js';//App是默认输出default，而{ Person }是其它的输出值
// import App from './App01-base.js';
ReactDOM.render(<App />,document.getElementById('root'));
//<App />，相当于把组件里的render方法调用








