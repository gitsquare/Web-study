const EventEmitter = require('events');
class MyEmitter extends EventEmitter {};
const emitter = new MyEmitter();

//在node环境里面没有event对象
/*emitter.on('test',(event,arg1,arg2) => {
  console.log(event,arg1,arg2);
});
emitter.emit('test','hi','nihao');*///hi nihao undefined


emitter.on('test',(arg1,arg2) => {
  console.log(arg1,arg2);
});
//和浏览器端的事件不同,传入参数不用数组而是参数列表
//emitter.emit('test','hi','nihao');//hi nihao
//emitter.emit('test',['hi','nihao']);//[ 'hi', 'nihao' ] undefined

const args = ['hi','nihao'];
emitter.emit('test',...args);





