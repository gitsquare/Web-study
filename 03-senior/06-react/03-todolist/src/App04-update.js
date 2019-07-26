//生命周期函数：在某个时刻组件会自动执行的函数

//2.更新,当组件的 props 或 state 发生变化时会触发更新,组件更新的生命周期调用顺序
//static getDerivedStateFromProps(props, state)
//shouldComponentUpdate(nextProps, nextState)该方法返回布尔值,根据返回的布尔值决定是否执行后续的周期函数,一般用来阻止不必要的页面渲染
//render()
//getSnapshotBeforeUpdate(prevProps, prevState)该方法返回一个值,这个值会随后被传入到 componentDidUpdate 中使用
//componentDidUpdate(prevProps, prevState,snapshot)组件更新完成后执行

import React,{ Component,Fragment } from 'react';
import Item from './Item.js';
import './App.css';

class App extends Component{
	//必须有一个render方法
	//在render方法里面的this指的是App
	constructor(props){
		//this.state 存放组件内部数据
		//初始化
		super(props);
		this.state={
			list:[
				"运动"
			],
			val:'',//初始化定义state的属性val
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleAdd = this.handleAdd.bind(this)
		
	}

	//多用于如果props有变化,需要更新state的场景,该方法返回state的更新
	static getDerivedStateFromProps(nextProps, prevState){
		console.log('App getDerivedStateFromProps(nextProps, prevState)',nextProps, prevState)
		return {
			/*list:[
				'吃饭'
			]*/
		}
	}

	// 该方法返回布尔值,根据返回的布尔值决定是否执行后续的周期函数,一般用来阻止不必要的页面渲染
	//如果没有此方法，则继续执行后续的周期函数
	shouldComponentUpdate(nextProps, nextState){
		console.log('App shouldComponentUpdate(nextProps, nextState)',nextProps, nextState)
		// return false;
		return true;
	}

	//该方法返回一个值,这个值会随后被传入到 componentDidUpdate 中使用
	//意思是在update之前获取一些数据片段，获取后在componentDidUpdate方法中拿到,此方法必须配合componentDidUpdate方法使用，否则会报错
	getSnapshotBeforeUpdate(prevProps, prevState){
		console.log('App getSnapshotBeforeUpdate(prevProps, prevState)',prevProps, prevState)
		return 'lalala'
	}

	//组件更新完成后执行
	componentDidUpdate(prevProps, prevState,snapshot){
		console.log('App getSnapshotBeforeUpdate(prevProps, prevState)',prevProps, prevState,snapshot)
	}
	//上面这些方法执行顺序和写的顺序无关


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
	getItems(){
		return this.state.list.map((item,index)=>{
			return <Item key={index}  content={item} handleDel={this.handleDel.bind(this,index)} />
		})			
	}
	render(){
		console.log('App render..')
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





