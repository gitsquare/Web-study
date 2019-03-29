/*
* @Author: TomChen
* @Date:   2019-03-22 19:15:42
* @Last Modified by:   TomChen
* @Last Modified time: 2019-03-22 20:17:04
*/
const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req,res)=>{
	
	console.log('url=>',req.url,'method=>',req.method);// /?username=xx&age=34

	//解析url
	/*
	const myUrl1 = url.parse(req.url);//解析URL字符串，并返回URL对象
	console.log(myUrl1.query);//'username=xx&age=34'//需要解析成为对象
	const obj1 = querystring.parse(myUrl1.query);//{ username: 'xx', age: '34' }
	console.log(obj1);
	*/
	const myUrl2 = url.parse(req.url,true);//如果第二个参数为true，默认是false，它相当于
	//自动执行querystring.parse(myUrl1.query)
	console.log(myUrl2);
	const obj2 = myUrl2.query;
	console.log(obj2);

	res.setHeader('Content-Type',"text/html;charset=utf-8");
	res.end('kuazhu');
});

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at http://127.0.0.1:3000')
})