import React,{ Component,Fragment } from 'react'
import { Input,Button,Row, Col,List  } from 'antd';

import { connect } from 'react-redux'
import {getAddItemAction,getChangeItemAction,getDelItemAction,loadInitDataAction,getInitDataAction} from './store/actionCreator.js'
import './App.css'

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

const mapStateToProps = (state)=>{
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

export default connect(mapStateToProps,mapDispatchToProps)(App);