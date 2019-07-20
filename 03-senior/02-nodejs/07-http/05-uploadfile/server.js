const http = require('http');
const path = require('path');
// 引入自定义文件模块formidable
const formidable = require('formidable');
const fs = require('fs');
const server = http.createServer((req,res)=>{
	// console.log('url=>',req.url,'method=>',req.method);
	// 因为req.method返回的都是大写字符串，所以调用方法使其变为小写
	if(req.method.toLowerCase() == 'post'){
		// 拿到form
		let form = new formidable.IncomingForm();
		// 指定上传的位置
		form.uploadDir = "./upload";
		// form.keepExtensions保存扩展名默认是false，改成ture
		form.keepExtensions = true;
	    form.parse(req, function(err, fields, files) {
	    	console.log({fields:fields,files:files});
	    	// 找到原有的文件路径
			let oldPath = __dirname +"/"+ files.avatar.path;
			//获取扩展名,使用path模块中的extname方法
			let extname = path.extname(oldPath);
			//拼接新文件路径
			let newPath = __dirname + "/upload/"+Date.now().toString()+parseInt(Math.random()*10000).toString().padStart(4,'0')+extname;
			//更改上传的文件名称，使用fs模块中的rename方法
			fs.rename(oldPath, newPath, (err)=>{
				if(err){
					res.setHeader('Content-Type',"text/html;charset=utf-8");
					res.end('err');		
				}else{
					res.setHeader('Content-Type',"text/html;charset=utf-8");
					res.end('ok');					
				}
			});

	    });		
	}
});
server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at http://127.0.0.1:3000')
})