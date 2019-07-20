//用node命令启动一个js文件，就开了一个进程
//process 对象是一个全局变量，它提供有关当前 Node.js 进程的信息并对其进行控制。 
//作为一个全局变量，它始终可供 Node.js 应用程序使用，无需使用 require()。

//process 对象是 EventEmitter 的实例。
//console.log(global.process);
//console.log(global.process === process);//process 和 global.process是同一个对象

// console.log(process.argv);//返回一个数组，其中包含当启动 Node.js 进程时传入的命令行参数

// console.log(process.env);//返回包含用户环境的对象

// console.log(process.pid);//返回进程的PID


// process.nextTick(callback) 
//将 callback 添加到下一个时间点的队列。 
//一旦当轮的事件循环全部完成，则调用下一个时间点的队列中的所有回调。
for(let i = 0;i<=3;++i){
		process.nextTick(()=>{
		console.log(i);
	})
}
//使用let定义的变量的作用域是块级作用域
/*console.log(1);

console.log(3);*/
//功能：在事件循环的下一次循环中调用 callback 回调函数。
//效果是将一个函数推迟到代码书写的下一个同步方法执行完毕时或异步方法的事件回调函数开始执行时；与setTimeout(fn, 0) 函数的功能类似，但它的效率高多了。

/*基于node.js的事件循环分析，每一次循环就是一次tick，每一次tick时，
v8引擎从事件队列中取出所有事件依次进行处理，如果遇到nextTick事件，
则将其加入到事件队尾，等待下一次tick到来时执行；造成的结果是，nextTick事件被延迟执行；*/



