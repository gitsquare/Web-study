
function (exports, require, module, __filename, __dirname) { 
	console.log(arguments.callee+'');
}
//在NodeJs中,一个文件就是一个模块,这个模块的本质其实就是一个函数,每个模块都有自己的属性