import React,{ Component,Fragment } from 'react'
import { 
	//路由方式 <BrowserRouter>,<HashRouter> 
	//<Route> 路由规则; <Switch> 路由选项; <Link>,<NavLink> 跳转,导航; <Redirect> 自动跳转

	//使用BrowserRouter时,页面刷新会向服务器发送请求,而HashRouter不会
	/*如果想使用BrowserRouter，又得页面刷新时不会向服务器发送请求，
	可以在webpack.config.js文件中配置devServer的historyApiFallback:true*/

	BrowserRouter as Router, //BrowserRouter其实就是h5路由
	// HashRouter as Router, 
	Route, 
	Switch,
	Link 
} from "react-router-dom";

import './App.css'

class Home extends Component{
	render(){
		return <h1>this is home page</h1>
	}
}
class User extends Component{
	render(){
		return <Switch>
			<Route exact path="/users" render={()=><h1>this is users page,no id</h1>}  />
			<Route path="/users/profile" render={()=><h1>this is user profile page</h1>} />
			<Route path="/users/:id" render={(route)=><h1>this is users page,user id is {route.match.params.id}</h1>} />
			{/*path="/users/profile"必须得在path="/users/:id"前面，否则会先匹配到：id*/}
		</Switch>
	}
}
class Info extends Component{
	render(){
		return <h1>this is info page</h1>
	}
}
class Login extends Component{
	render(){
		return <h1>this is login page</h1>
	}
}

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			isLogin:true
		}
		//确定用户是否处于登录状态
	}
	render(){
		//自定义路由可以实现：只有登录的用户才能访问到home页面，如果没有登录，就直接跳转到登录页面
		//ProtectRoute是一个方法，该方法返回一个路由，这个路由就是自定义的路由
		//component:Component, Component指的是component={User}中的User组件
		//如果还有其他参数，就用...rest表示。例如path="/about"就是其他参数
		const ProtectRoute = ({component:Component,...rest})=>(
			<Route
				{...rest}
				render={(props)=>(this.state.isLogin ? <Component {...props} /> : <Login />)}
			 />
		)	
		/*
			1.props代表传入的Component组件上的属性。
			2.如果没有登录，就跳转到登录页面，如果登录就跳转到指定的页面。
		*/
		return( 
			//对最顶层组件用Router进行包裹，它的作用是对路由进行统一管理，并且整个组件都是使用前端路由
			<Router>
				<div className="App">
					<ul className="nav">
						<li>
							{/*通过引入的Link,来实现要跳转到哪里，地址用to来指定，用Link实际生成了a标签*/}
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">/about</Link>
						</li>
						<li>
							<Link to="/info">/info</Link>
						</li>						
						<li>
							<Link to="/users">/users</Link>
						</li>							
						<li>
							<Link to="/users/123">/users/123</Link>
						</li>
						<li>
							<Link to="/users/profile">/users/profile</Link>
						</li>												
					</ul>
					{/*Route是用来定义规则的，通过设置path属性的值，和Link中to属性的值进行匹配，来确定跳转到哪个页面*/}
					{/*加exact意思是精确的匹配，比如说Link中to="/"时，就只能匹配到path="/"的Route*/}
					<Route exact path="/" component={Home} />				
					<Route path="/about" render={()=>(<h1>this about page</h1>)} />{/*此方法不常用*/}					
					<ProtectRoute path="/info" component={Info}  />	
					{/* 
						1. to="/users" to="/users/123" to="/users/profile" 都可以匹配到path="/users"的Route
						2. 匹配到之后，在User组件中用Switch再进行路由的选择
					*/}
					<ProtectRoute path="/users" component={User}  />
					{/*用<ProtectRoute path="/users" component={User}  />相当于把<Route path="/info" component={Info}原封不动返回回来  />	*/}
					{/*
						相当于执行ProtectRoute方法，参数是一个对象，对象中的第一个键值对是component：Component,
						值就是传递进去的{User}组件，如果还有其他参数，就用...rest表示。例如path="/about"就是其他参数
						返回值是一个Route，所以<Route {...rest} componnet={Component}>写法和<Route  path="/about" component={Home} />是等价的。

					*/}
				</div>
			</Router>
		)
	}
}
export default App;