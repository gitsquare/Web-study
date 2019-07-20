const EventEmitter = require('events');
// console.log(EventEmitter);//返回的是一个类,可以new一个实例

const emitter = new EventEmitter();
//new一个实例对象，对这个对象进行绑定事件和触发事件
/*emitter.on('test',()=>{
	console.log('hello world');
})
emitter.on('test',()=>{
	console.log('hello world!!!');
})
emitter.emit('test');*/
//这种方法虽然也可以,不过通常我们需要继承EventEmitter类来实现事件


// 当 EventEmitter 对象触发一个事件时，所有绑定在该事件上的函数都会被同步地调用。
//通常我们需要继承EventEmitter类来实现事件
class MyEmitter extends EventEmitter {};

const myEmitter = new MyEmitter();
//绑定事件
myEmitter.on('event', () => {
  console.log('hello');
});
myEmitter.on('event', () => {
  console.log('hello!!');
});
myEmitter.emit('event');//触发事件
// Node中的event没有默认行为和事件冒泡,因为在服务器中没有DOM节点


