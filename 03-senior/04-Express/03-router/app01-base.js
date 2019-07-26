const express = require('express');
const app = express();
const port = 3000
app.use(express.static('public'))

// 路由结构:app.METHOD(PATH, HANDLER)
app.all('/',(req,res,next)=>{
	console.log('all...');
	//一般在all中需要调用next方法,让程序继续执行，如果不调用，程序就会在此处停止
	next()
})

// 使用多个回调函数处理路由需要指定next
app.get('/', (req,res,next) => {
	console.log('do something1....');
	//因为此路由有多个回调函数，所以调用next(),作用是继续执行下一个函数
	next()
},(req,res,next)=>{
	console.log('do something2....');
	next()
},(req,res)=>{
	res.send('get response data...')
})
//如果想把逻辑拆分开，获取到请求后，把函数不同的内容拆分开

app.post('/', (req, res) => res.send('post response data...'))
app.put('/', (req, res) => res.send('put response data...'))
app.delete('/', (req, res) => res.send('delete response data...'))

app.listen(port, () => console.log(`app listening on port ${port}!`))
