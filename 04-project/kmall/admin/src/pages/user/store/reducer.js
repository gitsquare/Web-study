import { fromJS } from 'immutable'

import * as types from './actionTypes.js'

const defaultState = fromJS({
	//用fromJS方法把数组list转换成了immutable数据
	list:[{
	  _id: 'ID1',
	  username: 'admin',
	  isAdmin: true,
	  email:'lalala@qq.com',
	  phone:'13456144564',
	  createdAt:'2019-4-18 00:00:00'
	}],
})

export default (state=defaultState,action)=>{
	if(action.type == types.SET_PAGE){
		return state.merge({
			list:fromJS(action.payload.list)
		})
	}
	return state;
}