const express = require('express');

const app = express();

const port = 3000

app.use(express.static('public'))//已经请求到根目录下面的index.html文件，所以不会往下走了

// res.end()结束返回处理
// res.json()返回json
// res.send()返回多种类型数据,是一个万能方法
app.get('/',(req,res)=>{
	//在send里面不用管是什么类型，它会自动识别数据类型
	// res.send({name:"Tom"})
	// res.send('<h1>get response data...</h1>')
	// res.send('get response data...')
	
	//end一般发送文本
	//res.end({name:"Tom"})//会报错
	// res.end('<h1>get response data...</h1>')//在end方法中虽然参数是html代码，但是返回的还是纯文本
	// res.end('get response data...')
	
	//发送json，用send也可以，但是用json语义更强
	res.json({"name":"Tom"})
});
app.post('/', (req, res) => res.send('post response data...'))
app.put('/', (req, res) => res.send('put response data...'))
app.delete('/', (req, res) => res.send('delete response data...'))

app.listen(port, () => console.log(`app listening on port ${port}!`))
