import React,{ Component,Fragment } from 'react'
import { 
	BrowserRouter as Router, 
	Route, 
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
		return <h1>this is users page,user id is {this.props.match.params.id}</h1>
	}
}
class App extends Component{
	render(){
		return( 
			<Router>
				<div className="App">
					<ul className="nav">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">/about</Link>
						</li>
						<li>
							<Link to="/users/123">/users/123</Link>
						</li>						
					</ul>
					<Route exact path="/" component={Home} />				
					<Route path="/about" render={()=>(<h1>this about page</h1>)} />				
					<Route path="/users/:id" component={User}  />
					{/*传参数通过 ：id 接收，：后面代表是是参数*/}				
				</div>
			</Router>
		)
	}
}


export default App;