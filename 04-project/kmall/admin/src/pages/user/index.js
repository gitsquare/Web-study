import React,{ Component } from 'react'
import { Table, Divider, Tag } from 'antd';
import { connect } from 'react-redux'
import Layout from 'common/layout'


const columns = [{
  title: '用户名',
  dataIndex: 'username',
  key: 'username',
}, {
  title: '是否管理员',
  dataIndex: 'isAdmin',
  key: 'isAdmin',
  render:isAdmin=>isAdmin?'是':'否'
}, {
  title: 'email',
  dataIndex: 'email',
  key: 'email',
}, {
  title: '手机',
  dataIndex: 'phone',
  key: 'phone',
}, {
  title: '注册时间',
  dataIndex: 'createdAt',
  key: 'createdAt',
}];


class User extends Component{
    render(){
    	const { list } = this.props
    	const dataSource = list.map(user=>{
    		return {
    			key: user.get('_id'),
				username: user.get('username'),
				isAdmin: user.get('isAdmin'),
				email:user.get('email'),
				phone:user.get('phone'),
				createdAt:user.get('createdAt')
    		}
    	}).toJS()
    	console.log(dataSource)
        return (
        	<div className="User">
        		<Layout>
        			<Table dataSource={dataSource} columns={columns} />
        		</Layout>
        	</div>
        )
    }
}

const mapStateToProps = (state)=>{
	return {
		list:state.get('user').get('list'),
	}
}
const mapDispatchToProps = (dispatch)=>{
	return {
		
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(User)