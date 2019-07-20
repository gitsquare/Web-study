const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');

const mime = require('./mime.json');
const server = http.createServer((req,res)=>{
	console.log('url=>',req.url);
	let reqUrl = url.parse(req.url,true);
	let pathname = reqUrl.pathname;
	//约定:如果请求的是根目录,则返回目录下面的index.html页面
	//如果pathname的值没有. 说明是目录名
	if(pathname.lastIndexOf('.') == -1){
		pathname = pathname + "/index.html";
	}
	//如果请求的是文件，就直接使用文件的路径
	/*path.normalize() 方法规范化给定的 path，解析 '..' 和 '.' 片段。
	当找到多个连续的路径段分隔字符时（例如 POSIX 上的 /、Windows 上的 \ 或 /），
	则它们将被替换为单个平台特定的路径段分隔符（POSIX 上的 /、Windows 上的 \）。 尾部的分隔符会保留。*/
	let filePath =path.normalize(__dirname + '/static/'+pathname);
	//保存文件的扩展名，需要根据文件的扩展名来判断返回给客户端数据需要用什么文件类型解析
	let extname = path.extname(filePath);

	//读文件
	fs.readFile(filePath,(err,data)=>{
		if(err){
			res.setHeader('Content-Type',"text/html;charset=utf-8");
			res.end('<h1>出错啦!</h1>');
		}else{
			//根据mime.json文件，对应的扩展名都有对应的解析文件类型
			res.setHeader('Content-Type',mime[extname]+";charset=utf-8");
			res.end(data);
		}
	});
});

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at http://127.0.0.1:3000')
})