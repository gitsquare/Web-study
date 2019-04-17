import React,{ Component,Fragment } from 'react';
import { DatePicker,Button } from 'antd';//使用按需加载
import Item from './Item.js';
import './App.css';
// import 'antd/dist/antd.css';//引入样式

class App extends Component{

	constructor(props){
		super(props);
		this.state={
			list:[
				"运动",
			],
			val:'',
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleAdd = this.handleAdd.bind(this)
		
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
	getItems(){
		return this.state.list.map((item,index)=>{
			return <Item key={index}  content={item} handleDel={this.handleDel.bind(this,index)} />
		})			
	}
	render(){
		return(
			<Fragment>
				<div className="App">
					<input 
						onChange={this.handleChange} 
						value={this.state.val}
					/>
					<button onClick={this.handleAdd}>添加</button>
					<ul>
						{ 
							this.getItems() 
						}
					</ul>
					 <Button type="primary">按钮</Button>
					<DatePicker />
				</div>
			</Fragment>
		)
	}
}
export default App;





