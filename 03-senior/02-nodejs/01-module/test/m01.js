const str = 'hello world';
const fn = ()=>{
	console.log(str);
}
const obj = {
	name:'tom',
	age:18
}
/*module.exports.fn = fn;
module.exports.obj = obj;*/

module.exports = {
	str,
	fn,
	obj
}

console.log(module.exports.fn);