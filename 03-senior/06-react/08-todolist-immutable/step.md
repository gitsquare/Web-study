在有多个组件的情况下，在src文件夹中进行以下操作
1. 建立pages文件夹，把不同的组件放到里面，比如todolist,在pages文件夹中新建一个todolist文件夹，组件的名称也是Todolist，注意：组件名字首字母大写。组件所有内容都放在里面包括：index.js文件，store文件夹。store文件夹中又包括actionCreator.js文件、actionTypes.js文件、index.js文件、reducer.js文件。
2. 首先是actionTypes.js文件，对action的类型进行命名。例export const ADD_ITEM = 'todolist@add_item'。名称的前缀是组件的名字加上@，这种命名写法是为了防止出现重名现象。
3. 对于actionCreator.js文件，引入actionType.js文件使用此写法 import * as types from './actionTypes.js' 所有的action类型可以通过types这个对象拿到
4. 对于store中的index.js文件
	import reducer from './reducer.js'
	import * as actionCreator from './actionCreator.js'
	export { reducer,actionCreator }
把需要导出的组件通过这个文件导出
在store文件夹外的index.js文件接收 import { actionCreator } from './store'
在最顶层的store中用reducer.js文件接收 import { reducer as todolistReducer  } from '../pages/todolist/store'
5. 对于reducer.js文件，引入actionType.js文件使用此写法 import * as types from './actionTypes.js' 所有的action类型可以通过types这个对象拿到
6. 对于store文件夹外的index.js文件，内容为当前的组件
	import React,{ Component,Fragment } from 'react'
	import { Input,Button,Row, Col,List  } from 'antd';
	import { connect } from 'react-redux'
	import { actionCreator } from './store'
	import './index.css'
	export default connect(mapStateToProps,mapDispatchToProps)(TodoList)
在最顶层的组件App.js文件中引入此文件


7. 在src目录下新建store文件夹，里面包括index.js文件和reducer.js文件，这个store文件夹是用来管理所有组件的reduer的，并且store是在此文件夹中的index.js文件中创建的
	7.1对于reducer.js文件
		把combineReducers方法引入，合并所有的reducer
		把原始的state变成immutable数据，需要使用redux-immutable，而不是redux
		import { combineReducers } from 'redux-immutable'
		import { reducer as todolistReducer  } from '../pages/todolist/store'
		export default combineReducers({
			todolist:todolistReducer
		})
    7.2对于index.js文件，此文件是真正创建store的
   	    import { createStore,applyMiddleware } from 'redux'
		import thunk from 'redux-thunk';
		import { createLogger } from 'redux-logger';
		import reducer from './reducer.js' 
		const middleware = [thunk]
		if(process.env.NODE_ENV != 'production'){
			const logger = createLogger({});
			middleware.push(logger)
		}
		const store = createStore(reducer,applyMiddleware(...middleware))
		export default store
	需要在最外层的index.js文件中引入此文件 import store from './store'
8. 在最顶层的组件App.js文件中引入各个pages文件夹下的组件
	import React,{ Component } from 'react'
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
9. 在最外层的index.js文件中，是真正渲染组件的
	import React from 'react'
	import ReactDOM from 'react-dom'
	import { Provider } from 'react-redux'
	import store from './store'
	import App from './App.js'
	ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById('root'))


———————————————————————————————————————————————————————————————————————————————————————


一、在store文件夹外的index.js文件中引入react-redux，拿到里面的Provider组件
1. import React from 'react'
2. import ReactDOM from 'react-dom'
3. import { Provider } from 'react-redux' 拿到Provider组件
4. import store from './store' 会默认自动找store目录下面的index.js文件
5. import App from './App.js'
6. ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById('root'))
App是整个应用的顶层组件
用Provider组件包裹App组件，设置一个store属性，值是从store目录下index.js文件中导出来的store，
这样App组件以及子组件就都能够使用这个store

二、在App.js文件中引入react-redux，拿到里面的connect方法：import { connect } from 'react-redux'
1. export default connect(mapStateToProps,mapDispatchToProps)(App);
2. connect方法会返回一个函数，然后把组件App作为参数传到返回的函数中，App组件会从UI组件变为容器组件，再导出去，在store文件夹外的index.js文件中引入 import App from './App.js' 
3. 由第一条可知connect方法接收两个参数，参数均为函数并且它们的返回值均是一个对象。
4. 第一个参数函数mapStateToProps，顾名思义把state映射到props上，它接受的参数是state，返回值是一个对象，在这个对象中把state进行改造，然后映射到props上，可以在App组件上通过this.props拿到对应的state中的数据，例：this.props.val就是指state.val
例如 const mapStateToProps = (state)=>{
	return {
		val:state.val,
		list:state.list
	}
}
5. 第二个参数函数mapDispatchToProps，顾名思义把dispatch映射到props上，它接受的参数是dispatch，返回值是一个对象，这个对象中包含很多方法用来派发action，这些方法可以在App组件上通过this.props拿到对应的方法。例：this.props.handleChange就是指handleChange这个方法
例如 const mapDispatchToProps = (dispatch)=>{
	return {
		handleChange:(ev)=>{
			const val = ev.target.value
			const action = getChangeItemAction(val)
			dispatch(action)			
		},
		handleAdd:()=>{
			const action = getAddItemAction();
			dispatch(action)			
		}
	}
}
6.使用react-redux的优点是把业务逻辑代码放在了App组件外面，App组件就只用来展示页面


三 、创建一个store文件夹并进入
1.新建index.js用来初始化store
	1.1 import { createStore } from 'redux'
	1.2 import reducer from './reducer.js' 引入的reducer是一个函数
	1.3 const store = createStore(reducer)，返回的store负责整个数据管理，它包含的方法用来操作数据
		dispatch 派发action
		getState 获取store中的state数据
		subscribe传递的参数为一个函数，当store中的数据发生变化，会触发subscribe方法中传递的函数
		replaceReducer
	1.4 export default store
	1.5 index.js文件就代表了整个store，直接在APP.js中引用import store from './store/index.js'，

2.新建reducer.js文件用来创建reducer，需要引入actionTypes.js文件，根据判断不同的actionType对store数据进行不同的处理
	2.1 实际上数据是在reducer中操作的，reducer负责业务逻辑处理,生成新的state,由store来最终改变。
		reducer是一个纯函数(固定的输入就有固定的输出)
	2.2 在reducer.js中，需要进行state的初始化，即const defaultState = {}。而reducer的第一个参数就是state=defaultState，代表数据的初始值，可以在APP.js中的constructor中通过store.getState()方法初始化state的数据this.state=store.getState(),当state中的数据发生变化，在constructor中通过store.subscribe()方法获取最新的state来更新当前组件的state数据，store.getState(()=>{this.setState(()=>store.getState())})
	2.3 第二个参数是action,它是一个对象，是由actionCreator.js文件创造。
	2.4 上面这种复制方法比较浪费资源，为了解决这个问题，在此文件中引入immutable，import { fromJS } from 'immutable'，
	2.5 首先是对初始数据进行包装
	const defaultState = fromJS({
		list:["吃饭","睡觉"],
		val:'打豆豆'
	})
	其次通过immutable上面的方法处理数据：set方法是设置，get方法是获取
	export default (state=defaultState,action)=>{
		if(action.type == types.CHANGE_ITEM){
			return state.set('val',action.payload)
		}
	}
	使用immutable的优点是：immutable数据不会改变指的是只修改需要修改的部分，不会改变之前的数据

3.新建actionCreator.js文件，
	3.1 用来创建action对象。action对象的第一个键值对为type:ACTIONTYPES,指的是action的类型，第二个
		键值对为payload：payload，可以简写为es6语法payload，指的是告诉store改成什么值。
	3.2 action也可以是一个函数，在函数中做一些逻辑处理，在index.js文件引入redux-thunk,对dispatch
		方法升级使其可以接受一个函数作为参数，需要在index.js文件中进行配置
			1. import { createStore,applyMiddleware } from 'redux' 
			   拿到applyMiddleware方法用来加载中间件
			2. import thunk from 'redux-thunk' 中间件，对store.dispatch方法进行升级
			3. import { createLogger } from 'redux-logger'
			   redux-logger中间件主要用来提供派发数据的信息分析，供开发时使用
			4. import reducer from './reducer.js'
			5. const middleware = [thunk]
			6. if(process.env.NODE_ENV != 'production'){
					const logger = createLogger({});
					middleware.push(logger)
				}
				因为是nodejs环境，process.env.NODE_ENV代表当前环境：production或development。
				开发环境需要引入中间件logger，生产环境不需要，需要根据当前环境判断是否添加logger
		  	7. const store = createStore(reducer,applyMiddleware(...middleware))
		  	   这里的middleware是一个数组，因为可以使用多个中间件，再通过扩展运算符转换为参数列表
	3.3 当action是一个函数时，可以用来发送ajax，但是需要引入axios库。在App.js文件中在生命周期函数co
		mponentDidMount()中发送ajax，具体做法举例：
			1.在App.js文件中
			componentDidMount(){
				const action = getInitDataAction()
				store.dispatch(action)
			}
			2.在actionCreator.js文件中，需要先引入axios用来发送ajax
			export const loadInitDataAction = (payload)=>{
				return{
					type:LOAD_DATA,
					payload
				}
			}
			export const getInitDataAction = (payload)=>{
				return (dispatch)=>{
					axios
					.get('http://127.0.0.1:3000')
					.then(result=>{
						const action = loadInitDataAction(result.data);
						dispatch(action)
					})
				}
			}
			注意点：在App.js文件中调用getInitDataAction方法
					const action = getInitDataAction() 创建action  
					store.dispatch(action) 派发action，这个action就是getInitDataAction方法的返回值，也是一个函数，当派发这个action时，会把store.dispatch方法作为参数传递给action自身，所以在then()中拿到dispatch方法
			解释：1. 因为在actionCreator.js文件中发送ajax，所以需要在此文件中引入axios。
				 2. 因为action可以是一个函数，所以在actionCreator.js文件中创建一个方法，返回一
					  个函数，在这个函数中通过axios.get()发送ajax请求，此方法会返回一个promise。例如上面的getInitDataAction方法。
				 3. 在服务器端拿到数据后还需要再派发action。即在getInitDataAction方法的axios.get().then()中创建并派发action，此action就是一个对象了。根据数据更新state，再走一遍redux流程。通过在actionCreator.js文件中创建一个方法，如上面的loadInitDataAction方法，返回一个对象(action)，把返回的数据结果result.data当做参数，即作为payload，然后在reducer.js文件中再写一个if判断处理返回的数据。
	3.4 新建actionTypes.js文件，根据action的不同，设置不同的actionType,它的写法：变量名均为大写，
		值为对应的小写字符串，并分别导出。
	3.5 在reducer.js中引入actionTypes.js文件，根据if判断actionType来编写处理store数据
		的逻辑，处理store数据时，需要先复制上一次的state再进行处理，如果直接操作上一次的state可能会造成数据被覆盖的风险，通过const newState = JSON.parse(JSON.stringify(state))这种方法来新建一个和上一次相同的state，通过对新建的state处理，处理完后把更新后的即newState给return出去。
	3.6 在actionCreator.js中引入actionTypes.js文件，根据不同的actionType创建不同的函数来构建不同
		的action，函数的参数为payload,返回值即为action对象，并且把函数分别导出，在App.js文件中引用，创建和派发action。

4.在App.js文件中派发action
	4.1 引入store文件夹中的index.js文件，import store from './store/index.js' 
		通过store上的方法去派发action、获取state数据等。
	4.2 引入actionCreator.js文件，根据对数据不同的处理，调用不同的函数创造不同的action，并且把对应
		的payload作为参数传递到函数中，再把生成的action派发给reducer，store.dispatch(action)。