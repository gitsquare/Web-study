const str = 'hello world';
const fn = ()=>{
	console.log(str);
}
const obj = {
	name:'tom',
	age:18
}

//exports对象和module.exports对象是同一个对象
//导出的始终是module.exports指向的对象
//可以在module.exports对象或者exports对象上添加属性来导出值


/*console.log(exports);
console.log(module.exports);//导出的始终是module.exports指向的对象
console.log(exports === module.exports);*/

//如果要添加属性来导出值,可以使用module.exports对象或者exports对象
/*module.exports.str = str;
module.exports.fn = fn;
module.exports.obj = obj;
exports.obj2 = {major:'computer'};*/

/*exports.str = str;
exports.fn = fn;
exports.obj = obj;*/

/*module.exports = {
	str,
	fn,
	obj
}*///如果要导出一个对象,只能使用module.exports对象,此时exports对象的值就不会被导出;而且这样使用exports和module.exports就不再相同

/*console.log(exports);
console.log(module.exports);*/
console.log(exports === module.exports);
//module.exports对象可以赋值一个对象来导出值,如果module.exports被赋值一个对象,则exports对象的值就不会被导出






