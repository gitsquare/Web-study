const fs = require('fs');

/*//1.打开文件
// const fd = fs.openSync('./01.txt','w');
const fd = fs.openSync('./01.txt','a');//'a' - 打开文件用于追加。如果文件不存在，则创建该文件。
//返回表示文件描述符的整数。
//'w' - 打开文件用于写入。如果文件不存在则创建文件，如果文件已存在则截断文件。
console.log(fd);
//2.写入数据
fs.writeSync(fd,'hello');
//3.保存退出(关闭)
fs.closeSync(fd);*/



fs.writeFileSync('./01.txt','hello',{flag:'a'});


