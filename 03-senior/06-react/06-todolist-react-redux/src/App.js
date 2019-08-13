import React,{ Component,Fragment } from 'react'
import { Input,Button,Row, Col,List  } from 'antd';

import { connect } from 'react-redux'//connect是一个函数
import {getAddItemAction,getChangeItemAction,getDelItemAction,loadInitDataAction,getInitDataAction} from './store/actionCreator.js'
import './App.css'

//这一部分是UI部分
class App extends Component{
	//初始化数据从服务器端获取
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

//业务逻辑部分都在App组件外面，App组件就只用来展示页面
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
// connect 是一个函数，它的返回值为另外一个函数
// 执行返回的函数，返回值为 HOC，它会返回已经连接 Redux store 的组件
//换句话说，connect 是一个返回值为高阶组件的高阶函数！