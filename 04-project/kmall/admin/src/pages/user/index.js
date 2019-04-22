import React,{ Component } from 'react'
import { Table, Divider, Tag } from 'antd';
import { connect } from 'react-redux'
import { actionCreator } from './store'
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
  componentDidMount(){
    this.props.handlePage(1)
  }
  render(){
  	const { list } = this.props
    //在这个地方定义dataSource，因为每次都能从const { list } = this.props中拿到最新数据
  	const dataSource = list.map(user=>{
    //参数user就相当于数组list中的每一项数据，这时数组list只有一项数据，
    //这项数据是一个对象,并且这个对象也是immutable数据，所以需要用get方法
    //这里的list是immutable数据
  		return {
  			key: user.get('_id'),
				username: user.get('username'),
				isAdmin: user.get('isAdmin'),
				email:user.get('email'),
				phone:user.get('phone'),
				createdAt:user.get('createdAt')
  		}
  	}).toJS()//用toJS方法把List转换成数组
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
		list:state.get('user').get('list'),//从reducer.js中拿数据
	}
}
const mapDispatchToProps = (dispatch)=>{
	return {
		handlePage:(page)=>{
      const action = actionCreator.getPageAction(page)
      dispatch(action)
    }
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(User)