const express = require('express')//返回一个方法
const app = express()//调用这个方法，返回一个对象。
const port = 3000//定义一个端口号

app.get('/', (req, res) => res.send('<h1>Hello World!</h1>'))

app.listen(port, () => console.log(`app listening on port ${port}!`))