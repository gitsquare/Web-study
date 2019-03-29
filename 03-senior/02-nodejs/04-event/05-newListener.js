const EventEmitter = require('events');
class MyEmitter extends EventEmitter {};
const emitter = new MyEmitter();

emitter.on('newListener',(eventName,cb)=>{
	console.log('newListener...');
	console.log(eventName);
	cb();
})
//'newListener'事件,当有新的监听被添加时触发,回调函数接受两个参数分别是添加的事件名称和函数
emitter.on('test1',()=>{
	console.log('hello');
})
emitter.on('test2',()=>{
	console.log('hello2');
})