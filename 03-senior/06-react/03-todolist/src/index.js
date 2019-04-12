//执行和引用模块
//多次引用模块只执行一次
// import './App.js';
// import './App.js';


//写法一
// import {a,b} from './App.js';

//写法三
//import命令可以使用as关键字将输入的变量重命名。
/*import {a1,b as b1} from './App.js';
console.log(a1,b1);*/


//写法五
/*import def from './App.js';
console.log(def);*/


import React from 'react';
import ReactDOM from 'react-dom';

import App from './App04.js';
ReactDOM.render(<App />,document.getElementById('root'));







