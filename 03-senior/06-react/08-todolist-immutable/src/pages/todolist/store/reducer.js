import { fromJS } from 'immutable'

import * as types from './actionTypes.js'

//把defaultState中的数据变成immutable的数据，其实类型是Map
//把初始数据变成immutable的数据以后，就相当于state变成了immutable的数据
const defaultState = fromJS({
	list:["吃饭","睡觉"],
	val:'打豆豆'
})
//1. reducer是一个函数
//2. reducer是一个纯函数(固定的输入就有固定的输出)
//3. reducer的主要作用是负责业务逻辑处理,生成新的state,由store来最终改变

export default (state=defaultState,action)=>{

	if(action.type == types.CHANGE_ITEM){
		/*
		不推荐使用
		state.val = action.payload
		return state
		*/
		
		//1.copy上一次的state
		//const newState = JSON.parse(JSON.stringify(state))
		//2.修改新的state再返回
		/*
			 不是纯函数的例子
			 newState.val = action.payload + Date.now
			 newState.val = action.payload + Math.random()
		 */
		//newState.val = action.payload
		//return newState;

		//通过immutable上面的方法处理数据
		return state.set('val',action.payload)
	}	

	if(action.type == types.ADD_ITEM){
		/*
		const newState = JSON.parse(JSON.stringify(state))
		newState.list.push(state.val)
		newState.val = ''
		return newState
		*/
		const list = [...state.get('list')]
		list.push(state.get('val'))
		return state.merge({
			list,
			val:''
		})
	}
	if(action.type == types.DEL_ITEM){
		/*
		const newState = JSON.parse(JSON.stringify(state))
		newState.list.splice(action.payload,1)
		return newState
		*/

		//必须得用扩展运算符，如果直接从immutable数据中拿数组修改以后不能再赋
		const list = [...state.get('list')]//相当于复制数组，然后再操作
		list.splice(action.payload,1)
		return state.set('list',list)
	}
	if(action.type == types.LOAD_DATA){
		/*
		const newState = JSON.parse(JSON.stringify(state))
		newState.list = action.payload
		return newState
		*/
		return state.set('list',action.payload)
		//state.set方法接收key和value
	}

	return state;
}