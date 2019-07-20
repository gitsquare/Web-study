//路由处理
const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
	console.log(req.url);
	const filePath = req.url;
	//需要加斜杠 /
	if(filePath == '/index.html'){
		fs.readFile('./index.html',(err,data)=>{
			if(err){
				//读文件出错，一般是服务器端错误
				res.setHeader('Content-Type',"text/html;charset=utf-8");
				res.statusCode = 500;
				res.end("<h1>出错了</h1>");
			}else{
				res.setHeader('Content-Type',"text/html;charset=utf-8");
				res.end(data);
			}	
		})
	}
	else if(filePath == '/list.html'){
		fs.readFile('./list.html',(err,data)=>{
			if(err){
				res.setHeader('Content-Type',"text/html;charset=utf-8");
				res.statusCode = 500;
				res.end("<h1>出错了</h1>");
			}else{
				res.setHeader('Content-Type',"text/html;charset=utf-8");
				res.end(data);
			}	
		})
	}
	else if(filePath == '/css/index.css'){
		fs.readFile('./css/index.css',(err,data)=>{
			if(err){
				res.setHeader('Content-Type',"text/html;charset=utf-8");
				res.statusCode = 500;
				res.end("<h1>出错了</h1>");
			}else{
				res.setHeader('Content-Type',"text/css;charset=utf-8");
				res.end(data);
			}	
		})
	}
	else if(filePath == '/img/ad1.jpg'){
		fs.readFile('./img/ad1.jpg',(err,data)=>{
			if(err){
				res.setHeader('Content-Type',"text/html;charset=utf-8");
				res.statusCode = 500;
				res.end("<h1>出错了</h1>");
			}else{
				res.setHeader('Content-Type',"image/jpeg;charset=utf-8");
				res.end(data);
			}	
		})
	}
	else if(filePath == '/js/index.js'){
		fs.readFile('./js/index.js',(err,data)=>{
			if(err){
				res.setHeader('Content-Type',"text/html;charset=utf-8");
				res.statusCode = 500;
				res.end("<h1>出错了</h1>");
			}else{
				res.setHeader('Content-Type',"application/x-javascript;charset=utf-8");
				res.end(data);
			}	
		})
	}
	else{
		//404
		res.setHeader('Content-Type',"text/html;charset=utf-8");
		res.statusCode = 404;
		res.end("<h1>页面找不到。。。</h1>");				
	}
});

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at http://127.0.0.1:3000')
})