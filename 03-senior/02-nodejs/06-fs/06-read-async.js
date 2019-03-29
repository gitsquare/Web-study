const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
async function callReadFile(){
	let data = await readFile('./01.txt',{flag:'r'});
	// console.log(data);
	return data;
}

// callReadFile();//返回一个promise
callReadFile()
.then(data=>{
	console.log(data);
})


