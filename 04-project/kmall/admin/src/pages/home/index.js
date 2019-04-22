//引入组件，首先引用第三方的，再引入自己定义的

import React,{ Component } from 'react'
import { Card, Col, Row } from 'antd';
import { connect } from 'react-redux'

import { actionCreator } from './store'

import Layout from 'common/layout'


import './index.css'

class Home extends Component{
	componentDidMount(){
		//当组件挂载完毕之后，向后台发送一个ajax请求
		this.props.handleCount()
	}
    render(){
    	const { usernum,productnum,ordernum } = this.props//用解构赋值
        return (
        	<div className="Home">
        		<Layout>
        			<Row gutter={16}>
				      <Col span={8}>
				        <Card title="用户数量" bordered={false}>{usernum}</Card>
				      </Col>
				      <Col span={8}>
				        <Card title="商品数量" bordered={false}>{productnum}</Card>
				      </Col>
				      <Col span={8}>
				        <Card title="订单数量" bordered={false}>{ordernum}</Card>
				      </Col>
				    </Row>
        		</Layout>
        	</div>
        )
    }
}
const mapStateToProps = (state)=>{
	return {
		usernum:state.get('home').get('usernum'),
		productnum:state.get('home').get('productnum'),
		ordernum:state.get('home').get('ordernum')
	}
}
const mapDispatchToProps = (dispatch)=>{
	return {
		handleCount:()=>{
			const action = actionCreator.getCountAction()
			dispatch(action)
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)

