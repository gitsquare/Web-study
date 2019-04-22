import React,{ Component,Fragment } from 'react'
import { 
	//路由方式 <BrowserRouter>,<HashRouter> 
	//<Route> 路由规则; <Switch> 路由选项; <Link>,<NavLink> 跳转,导航; <Redirect> 自动跳转

	//使用BrowserRouter时,页面刷新会向服务器发送请求,而HashRouter不会
	//使用BrowserRouter时devServer的historyApiFallback:true

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
			isLogin:false
		}
		//确定用户是否处于登录状态
	}
	render(){
		//自定义路由
		const ProtectRoute = ({component:Component,...rest})=>(
			<Route
				{...rest}
				render={(props)=>(this.state.isLogin ? <Component {...props} /> : <Login />)}
			 />
		)
		return( 
			//对顶层组件用Router进行包裹，它的作用是
			//Router组件是最外层组件
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
					{/*Route是用来定义规则的，意思就是根据点击的path来确定跳转到哪个页面*/}

					{/*加exact意思是精确的匹配，比如说path="/"的时候，就只能匹配到路径为/的组件*/}
					<Route exact path="/" component={Home} />				
					<Route path="/about" render={()=>(<h1>this about page</h1>)} />							
					<ProtectRoute path="/info" component={Info}  />	
					<ProtectRoute path="/users" component={User}  />

				</div>
			</Router>
		)
	}
}


export default App;