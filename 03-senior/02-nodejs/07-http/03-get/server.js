const http = require('http');
const url = require('url');
const querystring = require('querystring');//解析字符串

const server = http.createServer((req,res)=>{
	// /?username=xx&age=34 获取到字符串一般要转为对象再做处理，需要引入核心模块url
	// console.log('url=>',req.url,'method=>',req.method);
	
	/*//解析URL字符串，并返回URL对象
	const myUrl1 = url.parse(req.url);
	//url对象有个query属性，这个属性的值就是?后面的参数
	console.log(myUrl1.query);//'username=xx&age=34'
	//把?后面的参数(字符串)即url.query解析成对象，需要引入核心模块querystring
	const obj1 = querystring.parse(myUrl1.query);//{ username: 'xx', age: '34' }
	// 根据拿到的对象进行下一步操作
	console.log(obj1);*/
	
	//如果第二个参数为true，默认是false，它相当于自动执行querystring.parse(myUrl1.query)
	const myUrl2 = url.parse(req.url,true);
	const obj2 = myUrl2.query;
	console.log(obj2);

	res.setHeader('Content-Type',"text/html;charset=utf-8");
	res.end('kuazhu');
});

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at http://127.0.0.1:3000')
})