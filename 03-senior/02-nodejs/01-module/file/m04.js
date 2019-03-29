require('./m03.js');
console.log('m04.js');
console.log(str);
//用全局对象global虽然可以传值,但是在大型复杂的项目中会使得global对象变得非常庞大,所以模块间值的传递不用这种方法
//global的作用是全局的命名空间对象