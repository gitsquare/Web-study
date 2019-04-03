const express = require('express');

const app = express();

const port = 3000

app.use(express.static('public'))

app.all('/',(req,res,next)=>{
	console.log('all...');
	next()
	//一般在all中需要调用next,让程序继续执行
})

app.get('/', (req, res,next) => {
	console.log('do something....')
	next()//指的是继续执行下一个函数
},(req,res)=>{
	res.send('get response data...')
})
//如果想把逻辑拆分开，获取到请求后，把函数不同的内容拆分开


app.post('/', (req, res) => res.send('post response data...'))
app.put('/', (req, res) => res.send('put response data...'))
app.delete('/', (req, res) => res.send('delete response data...'))

app.listen(port, () => console.log(`app listening on port ${port}!`))