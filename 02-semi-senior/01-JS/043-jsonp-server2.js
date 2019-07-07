/*
	可以响应并返回文件
	处理GET请求+POST请求
 */

var http = require('http');
var fs   = require('fs');
var url = require('url');

var server = http.createServer(function(req,res){
	var urlStr = req.url;

	//得到?后面的参数
	var parm = url.parse(urlStr,true).query;

	var obj = '{"name":"Tom","age":18}';

	//相当于返回的是调用函数的结果，参数是obj,
	// HandleCallback(obj)
	res.end(parm.callback+'('+obj+')');

});

server.listen(3001,'127.0.0.1',function(){
	console.log("Sever is running at http://127.0.0.1:3001");
})