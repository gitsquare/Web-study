//生命周期函数：在某个时刻组件会自动执行的函数

//1.挂载,当组件实例被创建并插入 DOM 中时,其生命周期调用顺序
//constructor(props) 
//static getDerivedStateFromProps(nextProps, prevState)多用于如果props有变化,需要更新state的场景,该方法返回state的更新
//render()
//componentDidMount()挂载完毕

import React,{ Component,Fragment } from 'react';
import Item from './Item.js';//Item组件是App组件的子组件
import './App.css';
//定义组件
//必须继承React.Component
class App extends Component{
	//必须有一个render方法
	//在render方法里面的this指的是App
	constructor(props){
		console.log('App constructor...')
		//this.state 存放组件内部数据
		//初始化
		super(props);
		this.state={
			list:[
				"运动",
				"学习",
				"读书"
			],
			val:'',//初始化定义state的属性val
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleAdd = this.handleAdd.bind(this)
		
	}

	//多用于如果props有变化,需要更新state的场景,该方法返回state的更新
	static getDerivedStateFromProps(nextProps, prevState){
		//nextProps指的是
		//prevState指的是
		return {
			list:[
				'吃饭'
			]
		}
	}

	//组件挂载完毕执行,多用于发送ajax获取数据
	componentDidMount(){
		console.log('componentDidMount')
	}
	getItems(){
		return this.state.list.map((item,index)=>{
			return <Item key={index}  content={item} handleDel={this.handleDel.bind(this,index)} />
		})			
	}
	handleAdd(){
		this.setState(preState=>({
			list:[...preState.list,preState.val],//点击后把输入框的值放在数组里面
			val:''//把val变为空，就是把输入框里的值给消除掉
		}))
	}
	handleChange(ev){
		const val = ev.target.value
		this.setState(()=>({
			val
		}))
	}
	handleDel(index){
		const list = [...this.state.list];
		list.splice(index,1);
		this.setState(()=>({
			list
		}))
	}
	render(){
		console.log('App render...');
		return(
			<Fragment>
				<input 
					onChange={this.handleChange} 
					value={this.state.val}
				/>
				<button onClick={this.handleAdd}>添加</button>
				<ul className="App">
					{ 
						this.getItems() 
					}
				</ul>
			</Fragment>
		)
	}
}
export default App;





