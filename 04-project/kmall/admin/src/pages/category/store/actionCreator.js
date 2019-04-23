import * as types from './actionTypes.js'
import { request } from 'util'
import { GET_USERS } from 'api'

const getPageRequestAction = ()=>{
	return {
		type:types.PAGE_REQUEST
	}
}
const getPageDoneAction = ()=>{
	return {
		type:types.PAGE_DONE
	}
}
const setPageAction = (payload)=>{
	return {
		type:types.SET_PAGE,
		payload
	}
}
export const getPageAction = (page)=>{
	return (dispatch)=>{
		dispatch(getPageRequestAction())
		//发送ajax之前，先发送一个action，让isFetching:true
		request({
			url:GET_USERS,
			data:{
				page:page
			}
		})
		.then(result=>{
			if(result.code == 0){
				dispatch(setPageAction(result.data))
			}
		})
		.catch(err=>{
			console.log(err)
		})
		.finally(()=>{
			//发送ajax之后，再发送一个action，让isFetching:false
			dispatch(getPageDoneAction())
		})
	}
}