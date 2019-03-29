//系统核心模块在Node源代码编译过程中被编译成了二进制文件,在node启动时(输入node这个命令)被直接加载到了内存中
//http 就是核心模块
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});