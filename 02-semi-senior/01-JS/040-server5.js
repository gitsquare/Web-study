/*
	可以响应并返回文件
	处理GET请求+POST请求
 */

var http = require('http');
var fs   = require('fs');
var url = require('url');

var server = http.createServer(function(req,res){
	// 简单请求
	res.setHeader("Access-Control-Allow-Origin",'http://127.0.0.1:3000');
	//允许访问的源(必须设置)可以是一个具体的协议+域名+端口,也可以是"*","*"代表所有的源
	// res.setHeader("Access-Control-Allow-Origin",'*');//存在一定的安全隐患

	//res.setHeader("Access-Control-Allow-Credentials",布尔值),可选设置,表示是否允许发送Cookie。

	// res.setHeader("Content-Type",'text/html');

	// 表示是否允许客户端通过getResponseHeader方法获取的字段
	// res.setHeader("Access-Control-Expose-Headers",布尔值),可选设置,

	//CORS方式下默认只能获取6个基础字段:Cache-Control Content-Language Content-Type Expires Last-Modified Pragma
	//如果想拿到其他字段，包括自定义字段就必须在Access-Control-Expose-Headers里面指定。
	// res.setHeader("Access-Control-Expose-Headers",'Date,Access-Control-Allow-Origin,Kuazhu-Test');
	//自定义字段
	// res.setHeader('Kuazhu-Test','Kuazhu-Test-Content');


	// 复杂请求：服务器根据OPTIONS请求来决定是否同意发送请求,具体做法是设置响应头
	/*1.res.setHeader("Access-Control-Allow-Origin",允许访问的源),必须设置
	2.res.setHeader("Access-Control-Allow-Methods",允许的请求方法),必须设置
	3.res.setHeader("Access-Control-Allow-Headers",允许客户端发送的头信息字段),可选设置
	4.res.setHeader("Access-Control-Allow-Credentials",布尔值),可选设置,表示是否允许发送Cookie。*/
	// res.setHeader('Access-Control-Allow-Methods','PUT,DELETE');
	// res.setHeader('Access-Control-Allow-Headers','Kuazhu-Test-Header');

	var urlStr = req.url;
	console.log(req.method);
	console.log('req.url:::',urlStr);
	if(urlStr == '/favicon.ico'){
		res.end('favicon.ico');
	}
	if(req.method == 'POST'){
		// res.end('post data...');
		var body = '';
		req.on('data',function(chunk){
			body += chunk;
		});
		req.on('end',function(){
			console.log('get post data::',body);
			//根据数据做处理....
			res.end(body);
		})
	}else if(req.method == 'GET'){
		if(urlStr.search(/\?/) != -1){
			var parm = url.parse(urlStr,true).query;
			//根据数据做处理....
			var json = JSON.stringify(parm);
			res.end(json);
		}
		var filePath = './'+urlStr;
		fs.readFile(filePath,function(err,data){
			if(!err){
				res.end(data);
			}else{
				res.statusCode = 404;
				res.end('not found');
			}
		});
	}else{
		res.end('ok');
	}

});

server.listen(3001,'127.0.0.1',function(){
	console.log("Sever is running at http://127.0.0.1:3001");
})