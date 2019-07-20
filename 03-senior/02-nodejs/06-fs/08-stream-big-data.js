const fs = require('fs');

const ws = fs.createWriteStream('./ws01.mp4');
const rs = fs.createReadStream('./01.mp4');

/*rs.on('open',()=>{
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
