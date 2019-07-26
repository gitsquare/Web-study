const querystring = require('querystring')

const express = require('express');
const bodyParser = require('body-parser') //处理post请求中间件

const app = express();

const port = 3000

app.use(express.static('public'))

/*
//第一种方法：不用中间件，使用原始的监听事件的方法
app.post('/', (req, res) => {
	let body = ''
	req.on('data',(chunk)=>{
		body += chunk
	})
	req.on('end',()=>{
		// console.log(body)
		console.log(querystring.parse(body))
		res.json({status:0})
	})
})
*/


// 第二种方法：使用bodyParser中间件，优点是使用此中间件以后，所有的post请求的参数都可以用req.body获取到
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.post('/', (req, res) => {
	console.log(req.body);
	res.json({status:0})
})
app.listen(port, () => console.log(`app listening on port ${port}!`))