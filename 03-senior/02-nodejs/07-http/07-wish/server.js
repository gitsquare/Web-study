const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const querystring = require('querystring');
const swig = require('swig');//可在客户端也可在服务端使用的模板引擎
const mime = require('./mime.json');
const { getAll,add,remove } = require('./WishModel.js')
const server = http.createServer((req,res)=>{
	console.log('url=>',req.url);
	let reqUrl = url.parse(req.url,true);
	let pathname = reqUrl.pathname;
	if(pathname == '/' || pathname == '/index.html'){//获取首页
		//获取所有数据
		getAll()
		.then(data=>{
			//在swig.compileFile方法中传入需要编译的文件的路径，用绝对路径，
			// 此方法返回一个函数，template是模板的意思，获取到的数据作为参数传递到模板中
			let template = swig.compileFile(__dirname+'/static/index.html');
			let html = template({
				// data:data,
				data,
			});
			res.setHeader('Content-Type',"text/html;charset=utf-8");
			res.end(html);			
		})
		.catch(err=>{
			console.log('get data err::',err);
			res.setHeader('Content-Type',"text/html;charset=utf-8");
			res.statusCode = 500;
			// 获取失败也一定要返回，否则不会停止，失败后返回一个提示
			res.end('<h1>好像哪里不对了!</h1>');				
		})
	}
	// 当客户端发送ajax请求，设置url:"/add"时，匹配到pathname == '/add'
	else if(pathname == '/add' && req.method.toLowerCase() == 'post'){//添加
		//获取参数
		let body = '';
		req.on('data',(chunk)=>{
			body += chunk;
		});
		req.on('end',()=>{
			//转换成对象
			let obj = querystring.parse(body);
			//此方法将收到的数据写入原有数据之中，返回从客户端接收的数据
			add(obj)
			// 把从客户端接收的数据返回到客户端
			.then(data=>{
				//result返回到前台，需要转换为JSON
				let result = JSON.stringify({
					status:0,//代表成功,
					data:data
				})
				res.end(result);
			})
			.catch(err=>{
				let result = JSON.stringify({
					status:10,//代表失败,
					message:'添加失败'
				})
				res.end(result);
			})
		})
	}
	else if(pathname == '/del'){
		let id = reqUrl.query.id;
		//此方法返回删除后的数据
		remove(id)
		//因为只是需要删除即可，不需要删除后的数据，删除后给客户端返回一个删除成功的信息
		.then(data=>{
			let result = JSON.stringify({
				status:0,//代表成功,
			})
			res.end(result);			
		})
		.catch(err=>{
			let result = JSON.stringify({
				status:10,//代表失败,
				message:'删除失败'
			})
			res.end(result);
		})
	}
	else{//请求静态资源
		let filePath =path.normalize(__dirname + '/static/'+pathname);
		let extname = path.extname(filePath);
		fs.readFile(filePath,(err,data)=>{
			if(err){
				res.setHeader('Content-Type',"text/html;charset=utf-8");
				res.end('<h1>出错啦!</h1>');
			}else{
				res.setHeader('Content-Type',mime[extname]+";charset=utf-8");
				res.end(data);
			}
		});
	}
});
server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at http://127.0.0.1:3000')
})