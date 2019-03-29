//自定义可读流

const {Readable} = require('stream');
const rs = new Readable();

/*rs.on('data',(chunk)=>{
	console.log(chunk);
})*/
//The _read() method is not implemented

class MyReader extends Readable{
	constructor(){
		super();
		this.index = 0;
	}
	_read(){
		this.index++;//分段读取数据，所以每次读取的数据不一样
		if(this.index>5){
			this.push(null);
		}else{
			let str = this.index+'';
			this.push(str);//每push一次，就执行一次_read方法,直到this.push()返回false才结束。
		}
	}
}
const reader = new MyReader();

/*let body = '';

reader.on('data',(chunk)=>{
	// console.log(chunk);
	console.log(chunk.toString());
	body += chunk;//因为分段拿到的数据需要拼接在一起成为完整的一段数据。
})
reader.on('end',()=>{
	console.log(body);
	console.log('end...');
})
//表明这次读数据结束。但是直到this.push()返回false，才会触发这个事件。
//如果this.push()没有返回false，就不会触发end事件*/


//readable.pipe(writable) 将可读流的数据传递给可写流
reader.pipe(process.stdout);//把reader里面的数据通过管道写到可写流当中
//process.stdout代表控制台的可写流，也是标准的可写流。



/*process.stdin 属性返回连接到 stdin (fd 0) 的流。 它是一个 net.Socket 流
（也就是双工流），除非 fd 0 指向一个文件，在这种情况下它是一个可读流。*/

/*process.stdout 属性返回连接到 stdout (fd 1) 的流。 它是一个 net.Socket 流
（也就是双工流），除非 fd 1 指向一个文件，在这种情况下它是一个可写流。*/

//要将 process.stdin 拷贝到 process.stdout
process.stdin.pipe(process.stdout);

