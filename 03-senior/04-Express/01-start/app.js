const express = require('express');//引入一个函数
const app = express();//调用这个函数，返回一个对象。
const port = 3000;//定义一个端口号

//调用对象app上的方法
app.get('/', (req, res) => res.send('<h1>Hello World!</h1>'))//可以有多个回调函数

app.listen(port, () => console.log(`app listening on port ${port}!`))