const EventEmitter = require('events');
class MyEmitter extends EventEmitter {};
const emitter = new MyEmitter();

const fn1 = ()=>{
	console.log('hello world');
}
const fn2 = ()=>{
	console.log('hello world2');
}
emitter.on('test',fn1);
emitter.on('test',fn2);

//必须得是有名的函数才能移除
// emitter.removeListener('test',fn1);
emitter.off('test',fn1);
// emitter.off('test',fn1,fn2);//不能同时删除2个
// console.log(emitter.removeListener === emitter.off);
//emitter.removeListener 和 emitter.off是同一种方法，但是emitter.off 新增于: v10.0.0
emitter.emit('test');





