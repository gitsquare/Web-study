const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req,res)=>{
	
	// console.log('url=>',req.url,'method=>',req.method);
	//因为req是可读流，需要一块一块的读取再拼接
	let body = '';
	//读取数据
	req.on('data',(chunk)=>{
		body += chunk;
	})
	//读取数据结束
	req.on('end',()=>{
		console.log(body);
		let obj = querystring.parse(body);
		console.log(obj);
	})

	res.setHeader('Content-Type',"text/html;charset=utf-8");
	res.end('kuazhu');
});

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at http://127.0.0.1:3000')
})