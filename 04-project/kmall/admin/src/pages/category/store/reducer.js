import { fromJS } from 'immutable'

import * as types from './actionTypes.js'

const defaultState = fromJS({
	//用fromJS方法把数组list转换成了immutable数据
	list:[],
	current:1,
    pageSize:0,
    total:0,
    isFetching:false
})

export default (state=defaultState,action)=>{
	if(action.type == types.SET_PAGE){
		return state.merge({
			list:fromJS(action.payload.list),
			current:action.payload.current,
			pageSize:action.payload.pageSize,
			total:action.payload.total
		})
	}
	if(action.type == types.PAGE_REQUEST){
		 return state.set('isFetching',true)
	}
	if(action.type == types.PAGE_DONE){
		 return state.set('isFetching',false)
	}
	return state;
}