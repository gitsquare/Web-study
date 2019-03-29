const fs = require('fs');
const util = require('util');


/*fs.readFile('./01.txt',{flag:'r'},(err,data)=>{
	if(err){
		console.log('readFile err',err);
	}else{
		console.log(data);
	}
})*/

//让一个遵循异常优先的回调风格的函数,
//即 (err, value) => ... 回调函数是最后一个参数, 返回一个返回值是一个 promise 版本的函数。
const readFile = util.promisify(fs.readFile);//返回结果是：返回值是一个 promise 版本的函数。
console.log(readFile);
readFile('./01.txt',{flag:'r'})//返回一个promise
.then(data=>{
	console.log(data);
})