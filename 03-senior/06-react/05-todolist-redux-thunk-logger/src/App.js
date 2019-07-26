import React,{ Component,Fragment } from 'react';
import { Input,Button,Row,Col,List } from 'antd';
// import axios from 'axios'
import store from './store/index.js'
import {getAddItemAction,getChangeItemAction,getDelItemAction,loadInitDataAction,getInitDataAction} from './store/actionCreator.js' 
import AppUI from './AppUI.js'


class App extends Component{
	constructor(props){
		super(props);
		this.state = store.getState()
		store.subscribe(()=>{
			this.setState(()=>store.getState())
		})
		this.handleChange = this.handleChange.bind(this)
		this.handleAdd = this.handleAdd.bind(this)	
		this.handleDel = this.handleDel.bind(this)
	}
	componentDidMount(){
		/*使用axios发送ajax请求，拿到数据后走一遍redux流程：把从服务器端获取到的数据传给store，再从store通过派发action
		传给reducer，reducer对数据进行处理，再把更新后的传给store，在App.js文件中通过
		store.subscribe(()=>{this.setState(()=>store.getState())})获取到更新后的store*/
		/*axios
		.get('http://127.0.0.1:3000')//返回一个promise
		.then(result=>{
			const action = loadInitDataAction(result.data);
			store.dispatch(action)
		})*/
		const action = getInitDataAction()
		store.dispatch(action)
		//这里的action是一个函数，然后在此函数里做ajax的请求
		//store.dispatch调用action函数，然后会把dispatch方法作为参数传递给action函数
	}
	handleAdd(){
		const action = getAddItemAction()
		store.dispatch(action)
	}
	handleChange(ev){
		const val = ev.target.value
		const action = getChangeItemAction(val)
		store.dispatch(action)
	}
	handleDel(index){
		const action = getDelItemAction(index)
		store.dispatch(action)
	}
	render(){
		return( 
			<AppUI
				handleChange={this.handleChange}
				val={this.state.val}
				handleAdd={this.handleAdd}
				list={this.state.list}
				handleDel={this.handleDel}
			/>
		)
	}
}
export default App;





