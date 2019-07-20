const http = require('http');
const server = http.createServer((req,res)=>{
	//req=request 可读流,实现了可读流接口
	//res=response 可写流,实现了可写流接口

	//设置字符集，前面必须加上数据格式
	// res.setHeader('Content-Type',"text/plain;charset=utf-8");
	res.setHeader('Content-Type',"text/html;charset=utf-8");
	res.write('<h1>hello 你好</h1>');
	res.end('kuazhu');
});

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at http://127.0.0.1:3000')
})