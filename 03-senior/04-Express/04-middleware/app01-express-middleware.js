const express = require('express');

const app = express();

const port = 3000

app.use((req,res,next)=>{
	console.log("A1")
	next()//用中间件的时候，一定要调用next方法，除非程序到此结束
	console.log('A2')
})
app.use((req,res,next)=>{
	console.log("B1")
	next()
	console.log('B2')
})
app.use((req,res,next)=>{
	console.log("C1")
	next()
	console.log('C2')
})


app.get('/', (req, res) => {
	res.send('<h1>Hello World! 你好 跨猪</h1>')
})

app.listen(port, () => console.log(`app listening on port ${port}!`))