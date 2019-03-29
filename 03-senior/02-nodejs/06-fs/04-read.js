//异步读文件
const fs = require('fs');

//1.打开文件
/*fs.open('./01.txt','r',(err,fd)=>{
	if(err){
		console.log('open err',err);
	}else{
		//2.读文件
		let buf = Buffer.alloc(100);
		fs.read(fd,buf,0,100,0,(err)=>{
			if(err){
				console.log('read err',err);
			}else{
				console.log('read success');
				console.log(buf);
			}
			//无论读成功还是失败，都要关闭
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


fs.readFile('./01.txt',{flag:'r'},(err,data)=>{
	if(err){
		console.log('readFile err',err);
	}else{
		console.log(data);
	}
})

console.log('do more...');


