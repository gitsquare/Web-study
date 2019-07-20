//自定义可写流

const stream = require('stream');
//返回的stream是一个对象，里面有类Writable和类Readable等
// console.log(stream);
// console.log(stream.Writable);

const {Writable} = stream;

// const ws = new Writable();
// console.log(ws);
//ws.write('hello world');// The _write() method is not implemented
// _write()这个方法没有生效，需要继承
// 自定义的可写流必须调用 new stream.Writable([options]) 构造函数并实现 writable._write() 方法

// writable._write()该函数不能被应用程序代码直接调用。 
//它应该由子类实现，且只能被内部的 Writable 类的方法调用。
//因为要使用write方法之前必须得实现_write方法，
// writable._write() 方法有下划线前缀，因为它是在定义在类的内部，
class MyWriter extends Writable{
	_write(chunk,encoding,callback){
		console.log(chunk);//<Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>
		// console.log(encoding);//字符集一般不用。如果 chunk 是字符串，则指定字符编码
		callback && callback();
	}
}

//创建可写流的一个实例
const writer = new MyWriter();

//为什么能够监听finish方法，因为大多数API都继承了events，
//相当于调用writer.end()后，这个方法内部会调用finish事件
writer.on('finish',()=>{
	console.log('finish...');
})
//第一次写入数据
writer.write('hello world','utf-8',()=>{
	console.log('hi');
});
//第二次写入数据
writer.write('hello');
//告诉这个流，数据写入完毕。
writer.end();

