/*const http = require('http');

const hostname = '127.0.0.1';//代表本机的IP地址，帮助开发者测试，自己电脑既是客户端又是服务器
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  //模版字符 `字符 ${javascript表达式}`             
});*/

var http = require('http');//引入http模块，返回一个http对象

var hostname = '127.0.0.1';
var port = 3000;

var server = http.createServer(function(req, res){
	console.log(req.url);
  	res.statusCode = 200;
  	res.setHeader('Content-Type', 'text/plain');//设置响应数据的类型
  	res.end('Hello World\n');
});

server.listen(port, hostname, function(){
  console.log("Server running at http://"+hostname+":"+port+"/");
});
//参数分别是端口号、IP地址、