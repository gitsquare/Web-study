import React,{ Component } from 'react'
import {
  Layout
} from 'antd';

const { Content } = Layout;

import Header from 'common/header'
import Sider from 'common/sider'

class AdminLayout extends Component{
    render(){
        return (
        	//用div包裹一下，作用是如果要更改样式，用AdminLayout这个class来更改就行了
        	<div className="AdminLayout">
				<Layout>
					<Header />
					<Layout>
					  <Sider />
					  <Layout style={{ padding: '0 24px 24px' }}>
					    <Content style={{
					      background: '#fff', padding: 24, margin: 0, minHeight: 280,
					    }}
					    >
					      {this.props.children}
					  		{/*意思是内容由子组件填充。什么意思？*/}
					    </Content>
					  </Layout>
					</Layout>
				</Layout>      	
        	</div>
        )
    }
}
export default AdminLayout
//因为上面引入了一个名为Layout的组件，所以导出时起名AdminLayout，防止冲突