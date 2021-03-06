var http = require('http');
var fs   = require('fs');
var url = require('url');

var server = http.createServer(function(req,res){
	var urlStr = req.url;
	console.log(req.method);
	console.log('req.url:::',urlStr);
	
	console.log("cookie::",req.headers.cookie);
	
	/*Cookie 的属性
	1.Expires
		Expires属性指定一个具体的到期时间(可以用Date对象的toUTCString()方法),到了指定时间以后,浏览器就不再保留这个 Cookie
		如果不设置该属性,或者设为null,Cookie 只在当前会话有效,浏览器窗口一旦关闭,该 Cookie 就会被删除
	2.Max-Age
		Max-Age属性指定从现在开始 Cookie 存在的秒数,过了这个时间以后,浏览器就不再保留这个 Cookie*/
	//var oDate = new Date('2019-03-07 18:53:00').toUTCString();
	//res.setHeader('Set-Cookie',["username=tom;expires="+oDate]);
	
	//res.setHeader('Set-Cookie',["username=tom;max-age=10"]);

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

server.listen(3000,'127.0.0.1',function(){
	console.log("Sever is running at http://127.0.0.1:3000");
})