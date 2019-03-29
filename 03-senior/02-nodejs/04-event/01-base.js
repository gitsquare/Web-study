const EventEmitter = require('events');
console.log(EventEmitter);//返回的是一个类

/*const emitter = new EventEmitter();
emitter.on('test',()=>{
	console.log('hello world');
})
emitter.emit('test');*///这种方法虽然也可以
//当 EventEmitter 对象触发一个事件时，所有绑定在该事件上的函数都会被同步地调用。

//通常我们需要继承EventEmitter类来实现事件
/*class MyEmitter extends EventEmitter {};

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('chufashijian');
});//绑定事件
myEmitter.emit('event');//触发事件*/


