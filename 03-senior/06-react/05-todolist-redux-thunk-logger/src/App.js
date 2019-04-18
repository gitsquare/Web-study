import React,{ Component,Fragment } from 'react';
import { Input,Button,Row,Col,List } from 'antd';

import store from './store/index.js'
import {getAddItemAction,getChangeItemAction,getDelItemAction,loadInitDataAction,getInitDataAction} from './store/actionCreator.js' 
import AppUI from './AppUI.js'


class App extends Component{
	constructor(props){
		super(props);
		this.state = store.getState()
		store.subscribe(()=>{
			this.setState(()=>store.getState())
			console.log(this.state)
		})
		this.handleChange = this.handleChange.bind(this)
		this.handleAdd = this.handleAdd.bind(this)	
		this.handleDel = this.handleDel.bind(this)
	}
	componentDidMount(){
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





