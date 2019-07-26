//初始化store
import { createStore } from 'redux'
import reducer from './reducer.js'
//1.store是负责整个数据的管理(获取最新的state,派发action,监听state的改变)
//2.整个应用只有一个store
//3.创建store时第一个参数需要传入一个函数(reducer)
const store = createStore(reducer)
//用createStore方法，传入的参数是一个函数，会返回一个store，store中有几种方法
//dispatch 派发action
//getState 获取store中的state数据
//subscribe 传递的参数为一个函数，当store中的数据发生变化，会触发subscribe方法中传递的函数
//replaceReducer

export default store
