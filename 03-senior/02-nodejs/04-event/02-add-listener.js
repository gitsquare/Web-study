const EventEmitter = require('events');
class MyEmitter extends EventEmitter {};
const emitter = new MyEmitter();


/*emitter.on('test', () => {
  console.log('load1...');
});
emitter.addListener('test', () => {
  console.log('load2...');
});
emitter.emit('test');
console.log(emitter.on === emitter.addListener);*/
//emitter.addListener和emitter.on(eventName, listener)是同一个方法,用on比较多些


/*emitter.once('test', () => {
  console.log('load1...');
});
emitter.once('test', () => {
  console.log('load2...');
});
emitter.emit('test');
emitter.emit('test');//once触发一次就移除掉了*/


/*一个EventEmitter对象默认最大可以有10个监听,
可以通过emitter.setMaxListeners(n)来设置最大监听数*/
//应该在添加事件之前改变最大监听数
emitter.setMaxListeners(11);
emitter.on('test', () => {
  console.log('load1...');
});
emitter.on('test', () => {
  console.log('load2...');
});
emitter.on('test', () => {
  console.log('load3...');
});
emitter.on('test', () => {
  console.log('load4...');
});
emitter.on('test', () => {
  console.log('load5...');
});
emitter.on('test', () => {
  console.log('load6...');
});
emitter.on('test', () => {
  console.log('load7...');
});
emitter.on('test', () => {
  console.log('load8...');
});
emitter.on('test', () => {
  console.log('load9...');
});
emitter.on('test', () => {
  console.log('load10...');
});
emitter.on('test', () => {
  console.log('load11...');
});

emitter.emit('test','a');

