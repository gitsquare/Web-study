//生命周期函数：在某个时刻组件会自动执行的函数

//1.挂载,当组件实例被创建并插入 DOM 中时,其生命周期调用顺序
//constructor(props) 
//static getDerivedStateFromProps(nextProps, prevState)多用于如果props有变化,需要更新state的场景,该方法返回state的更新
//render()
//componentDidMount()组件挂载完毕执行,多用于发送ajax获取数据

import React,{ Component,Fragment } from 'react';
import Item from './Item.js';
import './App.css';
class App extends Component{
	constructor(props){
		super(props);
		this.state={
			list:[
				"运动",
				"学习",
				"读书"
			],
			val:'',
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleAdd = this.handleAdd.bind(this)
	}
	//多用于如果props有变化,需要更新state的场景,该方法返回state的更新
	static getDerivedStateFromProps(nextProps, prevState){
		//App相当于根组件，这里的nextProps为空
		console.log('AppgetDerived',nextProps, prevState)
		return {
			list:[
				'吃饭'
			]
		}
		//return出去的数据和prevState进行合并
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
			list:[...preState.list,preState.val],
			val:''
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





