const express = require('express');

const app = express();

const port = 3000

/*1.中间件其实就是一个函数,在收到请求和返回响应之间处理一些操作,这个函数可以访问请求对象(req), 响应对象(res)
2.如果当前中间件没有终结请求-响应循环，则必须调用 next() 方法将控制权交给下一个中间件，否则请求就会挂起。
3.next()代表中间件数组中的下一个函数,在express内部有一个专门存放发出响应之前要执行的所有函数的数组,
即中间件数组,每次执行app.use(fn)都会把函数添加到数组中*/
// 在这里app.use(()=>{})中的参数为一个函数，这个函数就是中间件
// 执行app.use(()=>{})方法时，相当于把函数添加到中间件数组中去，执行函数时，需要从数组中拿函数
// 执行顺序是console.log("A1") next() console.log("B1") next() console.log("C1") next() console.log('ha') res.send('<h1>Hello World! 你好</h1>')
// console.log('C2') console.log('B2') console.log('A2')注意：执行next()以后，程序执行下一个中间件函数
//所以打印结果是A1 B1 C1 ha C2 B2 A2
app.use((req,res,next)=>{
	console.log("A1")
	next()//用中间件的时候，一定要调用next方法，除非程序到此结束。调用next(),才会执行下一个函数
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
	console.log('ha')
	res.send('<h1>Hello World! 你好</h1>')
})

app.listen(port, () => console.log(`app listening on port ${port}!`))