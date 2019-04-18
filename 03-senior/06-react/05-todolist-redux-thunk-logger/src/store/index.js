/*redux-thunk 是redux的一个中间件,是对action和store的中间的dispatch方法的升级,
让dispatch方法可以处理一个函数,
所以用了redux-thunk后action不仅可以是一个对象,也可以是一个函数*/


import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './reducer.js'

//1.store是负责整个数据的管理(获取最新的state,派发action,监听state的改变)
//2.整个应用只有一个store
//3.创建store时第一个参数需要传入一个函数(reducer)
// const store = createStore(reducer)

// console.log(process.env.NODE_ENV)
//因为是nodejs环境，process.env.NODE_ENV代表当前环境有production和development


const middleware = [thunk]
if(process.env.NODE_ENV != 'production'){
	//开发环境需要引入logger
	const logger = createLogger({});
	middleware.push(logger)
}
const store = createStore(reducer,applyMiddleware(...middleware))
//等价于const store = createStore(reducer,applyMiddleware(thunk,logger))

export default store
