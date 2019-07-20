/*console.log(1);
let timer = setTimeout(()=>{
	console.log(2);
},100)
clearTimeout(timer);
console.log(3);*/

/*console.log(1);
let timer = setInterval(()=>{
	console.log(2);
},100)
clearInterval(timer);
console.log(3);*/

console.log(1);
let timer = setImmediate(()=>{
	console.log(2);
})//立即执行的定时器，提供了一种机制，把程序变成了异步程序。
// clearImmediate(timer);
console.log(3);//console 模块提供了一个简单的调试控制台，类似于 Web 浏览器提供的 JavaScript 控制台。

