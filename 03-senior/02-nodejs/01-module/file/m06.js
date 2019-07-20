// 引用模块:require('文件名'),执行对应的文件并且返回该文件对应的modeule.exports对象
const m05 = require('./m05.js');//文件模块写路径
console.log(m05);

const { fn } = m05;
fn(); 

