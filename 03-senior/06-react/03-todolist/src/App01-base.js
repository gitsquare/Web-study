//定义和导出模块
//写法一
/*export const a = 1;
export const b = 2;*/

//写法二
/*const a = 1;
const b = 2;
export{
	a,
	b
};*/

//写法三
//export时as关键字重命名变量a的名字为b,所以在引入时用b
/*const a = 1;
const b = 2;
export{
	a as a1,
	b
};*/

//写法五（比较常见）
// export default 1//第一种写法
//或者第二种写法
/*const a=1
export default a*/
/*一个模块只能有一个默认输出，因此export default命令只能使用一次。所以，
import命令后面才不能加大括号，因为只可能唯一对应export default命令。

正是因为export default命令其实只是输出一个叫做default的变量，
所以它后面不能跟变量声明语句。

export default导出的模块,import时变量名可以用随意合法的名称*/


import React,{ Component,Fragment } from 'react';
import Item from './Item.js';//Item组件是App组件的子组件
import './App.css';
//定义组件
//必须继承React.Component

//在jsx语法中使用组件分为html组件和自定义组件,自定义组件必须大写字母开头
//自定义组件就相当于一个构造函数
class App extends Component{
	//进行初始化
	constructor(props){
		super(props);
		// 初始化this.state，用来存放组件内部数据
		this.state={
			list:[
				"运动",
				"学习",
				"读书"
			],
			val:''//初始化定义state的属性val，用来存放输入框中的值
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleAdd = this.handleAdd.bind(this)
	}
	getItems(){
		return this.state.list.map((item,index)=>{
			return <Item key={index}  content={item} handleDel={this.handleDel.bind(this,index)} />
		})			
	}
	handleAdd(){
		// 在事件函数中this指的是被bind方法传进来的当前的组件对象
		//this.state.list.push(this.state.val);//这种方法行不通

		//数据驱动界面，this.setState方法会改变数据继而引起页面的变化
		//this.setState第一种使用方法：参数是一个对象，对象的值是什么，this.state的值就是什么
		/*this.setState({
			// 当点击button后，把输入框的值放在数组里面，
			list:[...this.state.list,this.state.val],
			// 并且把输入框中的内容清空
			val:''
		})*/
		/*this.setState第二种使用方法：参数是一个函数，函数的返回值是一个对象，
		返回的这个对象会和之前的this.state进行合并*/
		/*this.setState(()=>{
			return {
				list:[...this.state.list,this.state.val],
				val:''
			}
		})*/
		// 函数中还可以带一个参数preState代表之前未改变的this.state，即原始的this.state，和上面的写法是等价的
		/*this.setState((preState)=>{
			return {
				list:[...preState.list,preState.val],
				val:''
			}
		})*/
		// 箭头函数简写
		this.setState(preState => ({
			list:[...preState.list,preState.val],
			val:''
		}),()=>{
			console.log(this.ul.querySelectorAll('li'))	
		})
		/*由于setState是一个异步方法,如果需要获取最新的DOM,可以在setState方法的第二个参数(回调函数)中获取,
		当state改变完成，重新渲染以后，才会执行回调函数*/
	}

	//获取输入框的数据
	//1.给输入框添绑定onChange事件
	//2.在onChange的事件函数中通过event.target.value获取值,当input框里面的值改变时，将获取到的值赋值给this.state.val
	handleChange(ev){
		// console.log(ev.target.value)//这里的target其实就是input
		/*this.setState({
			//获取输入框的值，存放在this.state.val
			val:ev.target.value,
		})*/

		/*方法1.通过拿到的DOM节点获取value值,此方法是通过在当前的DOM节点添加ref属性拿到此节点,
		动态的在App组件上添加属性，属性名为此DOM节点的名字，值为此DOM节点*/
		// const val = this.input.value
		//方法2.通过事件对象ev获取value值
		const val = ev.target.value;
		this.setState(()=>({
			// val:val
			//简写
			val
		}))
	}
	handleDel(index){
		const list = [...this.state.list];//首先把数组复制一份
		list.splice(index,1);//通过索引，把当前的<li></li>给删除
		// const list = this.state.list.splice(index,1)//不能这么写，splice方法返回的是由删除项组成的数组
		//改变this.state里面的数据必须通过this.setState方法
		/*this.setState({
			// list:list
			list//es6语法
		})*/

		this.setState(()=>({
			list
		}))
	}

	//必须有一个render方法，方法里面必须有return，根据面向对象的思想，在render方法里面的this指的是当前组件对象
	render(){
		console.log('app01-base render...')
		//render方法的return语句后面不能是空白行,可以用()来格式化代码 
		return(
			/*jsx语法中只能返回一个标签。例如<div><input/><button></button></div>,标签必须得有闭合。如果不用div标签包裹，
			就会报错，加了以后，就只返回div这一个标签，但这个div里面包括其他标签。如果不想用div，
			就把React.Fragment引入进来,并且Fragment标签不会被渲染到页面当中*/
			<Fragment>
				{/*添加事件注意事项：1.on后面的字母大写。2. =号后面的{}中的是javascript代码。 
				3.事件函数中通常需要用当前的组件对象,因为在render方法里面的this就是指当前组件对象,
				所以可以在绑定事件时bind(this),或者在constructor初始化时就bind(this),
				例如this.handleChange = this.handleChange.bind(this)*/}
				
				{/*
				获取DOM节点：添加ref属性,值为一个函数，函数的参数是当前的DOM节点，
				给App对象上动态添加属性input,值就是当前的DOM节点，即this.input = input
				*/}
				<input 
					onChange={this.handleChange} 
					value={this.state.val} 
					ref={(input)=>{
						this.input = input
					}}
				/>
				<button onClick={this.handleAdd}>添加</button>
				{/*添加样式一最外面的花括号代表里面是js代码，里面的花括号代表是一个对象*/}
				{/*添加样式一：行内: style = {{color:'#333'}}。二：添加className*/}
				{/*在react当中class是关键字所以类名用className*/}
				<ul className="App" ref={(ul)=>{this.ul = ul}}>
					{/*<li style={{backgroundColor:'#333',color:'#999'}}>看书</li>
					<li>运动</li>
					<li>学习</li>*/}


					
					{/*
						this.state.list.map((item,index)=>{
							//在react中，一个重要的思想就是组件化，可以把return中的代码做成一个组件
							//return (
							//	<li 
							//		key={index} key必须有，用来校验
							//		onClick={this.handleDel.bind(this,index)}
							//	>
							//	{item}
							//	</li>
							//)
							

							//1.调用子组件时，传递的数据都会传到props对象上面
							//2.父组件给子组件传递参数,父组件定义属性并赋值,在这里定义的属性是content
							//3.子组件给父组件传递参数,子组件调用父组件传递过来的方法,将要传递的参数传给该方法。
							// 在这里定义的方法是handleDel。注意点：子组件不能改变父组件中的数据
							return <Item key={index}  content={item} handleDel={this.handleDel.bind(this,index)} />
						})
					*/}
					{/*可以把上面这部分组件化的js代码封装成一个函数来处理*/}
					{/*调用getItems函数*/}
					{ 
						this.getItems() 
						//有几条数据就执行几次
					}
				</ul>
				{
					//在html代码里添加注释的格式	必须加花括号
				}
				{
					/*在html代码里添加注释的格式	必须加花括号*/
				}
			</Fragment>
		)
	}
}
//导出组件 == module.exports = App;
function Person(name){
	this.name = name;
	console.log(name);
}
export {Person}
export default App


//props/state/render的关系

//1.this.state 存放组件内部数据,this.props存放组件的外部数据,render负责渲染页面
//2.当组件的state或者props发生改变时render函数会重新执行
//3.当父组件的render函数执行时,子组件的render函数也会被执行



