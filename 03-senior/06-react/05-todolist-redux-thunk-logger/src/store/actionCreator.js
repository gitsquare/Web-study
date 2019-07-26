import { ADD_ITEM,CHANGE_ITEM,DEL_ITEM,LOAD_DATA } from './actionTypes.js'
import axios from 'axios'
export const getAddItemAction = ()=>{
	return {
		type:ADD_ITEM
	}
}
export const getChangeItemAction = (payload)=>{
	return {
		type:CHANGE_ITEM,
		payload
	}
}
export const getDelItemAction = (payload)=>{
	return  {
		type:DEL_ITEM,
		payload
	}
}
export const loadInitDataAction = (payload)=>{
	return{
		type:LOAD_DATA,
		payload
	}
}
export const getInitDataAction = (payload)=>{
	return (dispatch)=>{
		axios
		.get('http://127.0.0.1:3000')//返回一个promise
		.then(result=>{
			// ajax请求完之后，还需要通过loadInitDataAction(result.data)派发action，这个action是从服务端获取到数据后，走一遍redux流程
			const action = loadInitDataAction(result.data);
			dispatch(action)//这里的dispatch方法和store.dispatch是同一个方法
		})
	}
}


