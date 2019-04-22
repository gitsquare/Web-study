import React,{ Component,Fragment } from 'react'
import { BrowserRouter as Router, Route,Redirect,Switch } from "react-router-dom";

//引入Login组件
//等价于引入 './pages/login/index.js'
import Login from 'pages/login'//登录页面，在登录状态下，路由为login时，会跳转到Home
import Home from 'pages/home'//首页，如果没有登录就跳转到登录页面
import User from 'pages/user'
import Err from 'common/err'

import { getUserName } from 'util'

import './App.css'

// App是整个后台最顶层的组件
class App extends Component{
	render(){
		const ProtectRoute = ({component:Component,...rest})=>(
			<Route 
				{...rest}
				render={(props)=>{
					//根据getUserName()的结果，判断是否登录，如果未登录，就访问login页面
					return getUserName()
					? <Component {...props} />
					: <Redirect to="/login" />
				}}
			/>
		)

		//登录以后，就不能再访问login页面，需要跳转到登录后的页面
		//这种写法是上面的ProtectRoute的简单写法
		const LoginRoute = ({component:Component,...rest})=>{
			return getUserName()
			? <Redirect to="/" />//如果登录以后再访问login页面，就直接跳转到home页面
			: <Component {...rest} />
		}
		return( 
			<Router>
				<div className="App">
					<Switch>{/*为什么加Switch*/}
						<ProtectRoute exact path="/" component={Home} />
						{
							//当匹配到路由"/login"后,渲染Login组件
						}
						<LoginRoute path="/login" component={Login} />
						<ProtectRoute path="/user" component={User} />

						{/*这里不要加path属性，上面所有路由都匹配不到时，就只有访问错误页面*/}
						<Route component={Err} />
					</Switch>
				</div>
			</Router>
		)
	}
}
export default App;