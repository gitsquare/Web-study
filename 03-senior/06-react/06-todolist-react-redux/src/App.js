import React,{ Component,Fragment } from 'react'
import { Input,Button,Row, Col,List  } from 'antd';

import { connect } from 'react-redux'//connect是一个函数
import {getAddItemAction,getChangeItemAction,getDelItemAction,loadInitDataAction,getInitDataAction} from './store/actionCreator.js'
import './App.css'

//这一部分是UI部分
class App extends Component{
	componentDidMount(){
		this.props.handleInit()
	}
	render(){
		return( 
			<div className="App">
				<Row>
					<Col span={12}>
						<Input
							value={this.props.val} 
							onChange={this.props.handleChange}
						/>
					</Col>
					<Col span={12}>
						<Button type="primary" onClick={this.props.handleAdd}>新增</Button>
					</Col>
				</Row>
				<List
					style={{marginTop:10}}
				  	bordered
				  	dataSource={this.props.list}
				  	renderItem={(item,index) => (<List.Item onClick={()=>{this.props.handleDel(index)}}>{item}</List.Item>)}
				/>				
			</div>
		)
	}
}


//这一部分是业务逻辑
const mapStateToProps = (state)=>{
	//把state中的数据映射到props中
	return {
		val:state.val,
		list:state.list
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		handleChange:(ev)=>{
			const val = ev.target.value
			const action = getChangeItemAction(val)
			dispatch(action)			
		},
		handleAdd:()=>{
			const action = getAddItemAction();
			dispatch(action)			
		},
		handleDel:(index)=>{
			const action = getDelItemAction(index)
			dispatch(action)			
		},
		handleInit:()=>{
			const action = getInitDataAction();
			dispatch(action)			
		}
	}
}
//mapDispatchToProps,mapStateToProps都必须返回一个对象

export default connect(mapStateToProps,mapDispatchToProps)(App);
//connect方法会返回一个函数，然后把组件App传到返回的函数中，这样组件会从UI组件变为容器组件