const express = require('express');
const app = express();
const port = 3000;

//如果要使用多个静态资源目录,多次调用 express.static 中间件函数

//所有的静态资源的请求路径都会相对于静态资源目录
app.use(express.static('blog-static'));
//如果请求路径的是/css/index.css,设置的静态资源目录是static,则服务器端获取文件的路径是静态资源目录/css/index.css

//要为该express.static函数提供的文件创建虚拟路径前缀（文件系统中实际不存在该路径），请为静态目录指定安装路径
//设置了虚拟路径后,静态资源请求时需要加上虚拟路径.虚拟路径是根本不存在的目录
// app.use('/static',express.static('blog-static'));
//两种都能用，但是第一种比较好用

app.get('/', (req, res) => res.send('<h1>Hello World!</h1>'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));



