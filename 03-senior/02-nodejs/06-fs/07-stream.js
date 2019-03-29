const fs = require('fs');

const ws = fs.createWriteStream('./ws.txt');
const rs = fs.createReadStream('./rs.txt');

/*ws.on('open',()=>{
	console.log('ws open');
})
ws.on('finish',()=>{
	console.log('ws finish...');
})
ws.on('close',()=>{
	console.log('ws close');
})
ws.write('hello world');
ws.write('hello again');
ws.end();//需要监听finish事件

rs.on('open',()=>{
	console.log('rs open');
})
rs.on('data',(chunk)=>{
	console.log(chunk);
})
rs.on('end',()=>{
	console.log('rs end...');
})
rs.on('close',()=>{
	console.log('rs close');
})*/

rs.pipe(ws);//把可读流rs里的数据传到可写流ws里面。
