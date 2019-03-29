const fs = require('fs');

/*//1.打开文件
const fd = fs.openSync('./01.txt','r');//打开文件用于读取。如果文件不存在，则出现异常。
//2.读文件
const buf = Buffer.alloc(100);
console.log(buf);
fs.readSync(fd,buf,0,100,0);
console.log(buf);
//3.保存退出(关闭)
fs.closeSync(fd);*/


const data = fs.readFileSync('./01.txt',{flag:'r'});//默认是'r'
console.log(data);

//fs.readSync(fd, buffer, offset, length, position)
//从 fd 指定的文件中读取数据。
//buffer 是数据将写入的缓冲区。
//offset 是 buffer 中开始写入的偏移量。
//length 是一个整数，指定要读取的字节数。
//position 参数指定从文件中开始读取的位置。

//如果文件比较小，用同步比较方便；如果文件比较大，用异步。
