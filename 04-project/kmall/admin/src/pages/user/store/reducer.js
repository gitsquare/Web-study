
import { fromJS } from 'immutable'

import * as types from './actionTypes.js'

const defaultState = fromJS({
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

	return state;
}