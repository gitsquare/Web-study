import React,{ Component,Fragment } from 'react'
import TodoList from './pages/todolist'

class App extends Component{

	render(){
		return( 
			<div className="App">
				<TodoList />			
			</div>
		)
	}
}


export default App;