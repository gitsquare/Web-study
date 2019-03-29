//console.log()实际上是调用了stdout上面的write方法。
//向已有的可写流中写入数据
//stdout是一个可写流的实例，意思是标准流输出，流上面有一个方法write
process.stdout.write('hello world');
console.log(process.stdout.write);