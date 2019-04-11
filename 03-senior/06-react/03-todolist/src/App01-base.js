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
import命令后面才不用加大括号，因为只可能唯一对应export default命令。

正是因为export default命令其实只是输出一个叫做default的变量，
所以它后面不能跟变量声明语句。

export default导出的模块,import时变量名可以用随意合法的名称*/


import React,{ Component,Fragment } from 'react';
import Item from './Item.js';//Item组件是App组件的子组件
import './App.css';
//定义组件
//必须继承React.Component
class App extends Component{
	//必须有一个render方法
	//在render方法里面的this指的是App
	constructor(props){
		//this.state 存放组件内部数据
		//初始化
		super(props),
		this.state={
			list:[
				"运动",
				"学习",
				"读书"
			],
			val:''//初始化定义state的属性val
		}
	}
	handleAdd(){
		//this.state.list.push(this.state.val);
		this.setState({
			list:[...this.state.list,this.state.val],//点击后把输入框的值放在数组里面
			val:''//把val变为空，就是把输入框里的值给消除掉
		})
		//this.setState方法改变数据会引起页面数据的变化
	}
	handleChange(ev){
		//this.state.val = ev.target.value;
		this.
		setState({
			val:ev.target.value,//获取输入框的值，存在state.val
		})
	}
	handleDel(index){
		const list = [...this.state.list];
		list.splice(index,1);
		this.setState({
			list:list
		})
	}
	render(){
		//render方法的return语句后面不能是空白行,可以用()来格式化代码 
		return(
			//只能返回一个标签例如<div><input/><button></button></div>,注意必须的有结束标签。如果不用div标签包裹，
			//就会报错，加了以后，就只返回div这一个标签，但这个div里面包括其他标签，如果不想用div，
			//就把React.Fragment引入进来,并且Fragment标签不会被渲染到页面当中
			<Fragment>
				<input onChange={this.handleChange.bind(this)} value={this.state.val}/>
				{/*添加事件注意事项：1.on后面的字母大写。2. =号后面的{}中的是javascript代码。 
				3.事件函数中通常需要用当前的组件对象,所以需要在绑定事件时bind(this)*/}
				<button onClick={this.handleAdd.bind(this)}>添加</button>
				{/*添加样式一：行内: style = {{color:'#333'}}。二：添加className*/}
				<ul className="App">
					{/*<li style={{backgroundColor:'#333',color:'#999'}}>看书</li>
					<li>运动</li>
					<li>学习</li>*/}
					{
						this.state.list.map((item,index)=>{
							/*return (
								<li 
									key={index}
									onClick={this.handleDel.bind(this)}
								>
								{item}
								</li>
							)*/
							return <Item key={index}  content={item} handleDel={this.handleDel.bind(this,index)} />
							//父组件给子组件传递参数,父组件定义属性并赋值
						})
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
export default App;





