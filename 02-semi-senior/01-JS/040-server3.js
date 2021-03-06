/*
	可以响应并返回文件
	处理GET请求+POST请求
 */

var http = require('http');
var fs   = require('fs');
var url = require('url');

var server = http.createServer(function(req,res){
	var urlStr = req.url;
	console.log(req.method);//请求方法
	console.log('req.url:::',urlStr);
	if(urlStr == '/favicon.ico'){
		res.end('favicon.ico');
	}

	if(req.method == 'POST'){
		// res.end('post data...');

		//接收数据，通过data事件一块一块的读取数据，不能直接全部读取数据
		var body = '';
		req.on('data',function(chunk){
			body += chunk;
		});
		//整个数据读取完以后会触发end事件，根据读取的数据做处理
		req.on('end',function(){
			console.log('get post data::',body);
			//根据数据做处理....
			res.end(body);
		})
	}else if(req.method == 'GET'){
		//在浏览器中输入地址，相当于用的'GET'方法


		if(urlStr.search(/\?/) != -1){//字符串的方法search，如果找不到就返回-1
			var parm = url.parse(urlStr,true).query;
			//根据数据做处理....
			//只能返回字符串，所以把对象转换成json
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
/*
局域网测试
server.listen(3000,'10.214.59.98',function(){
	console.log("Sever is running at http://10.214.59.98:3000");
})
*/
server.listen(3000,'127.0.0.1',function(){
	console.log("Sever is running at http://127.0.0.1:3000");
})