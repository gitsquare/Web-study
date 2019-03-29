//异步写文件
const fs = require('fs');

/*//1.打开文件
fs.open('./01.txt','w',(err,fd)=>{
	if(err){
		console.log('open err',err);
	}else{
		//2.写入数据
		fs.write(fd,'hello',(err)=>{
			if(err){
				console.log('write err',err);
			}else{
				console.log('write success');
			}
			//无论写入成功还是失败，都要关闭
			//3.关闭文件
			fs.close(fd,(err)=>{
				if(err){
					console.log('close err',err);
				}else{
					console.log('close success');
				}
			})
		})
	}
})*/


fs.writeFile('./01.txt','hello',{flag:'a'},(err)=>{
	if(err){
		console.log('write err',err);
	}else{
		console.log('write sucess');
	}
})

console.log('do more...');
