import {ADD_ITEM,CHANGE_ITEM,DEL_ITEM} from './actionTypes.js'
export const getAddItemAction = ()=>{
	return {
		type:ADD_ITEM
	}
}
export const getChangeItemAction = (payload)=>{
	return {
		type:CHANGE_ITEM,
		payload
		//相当于payload:payload,前者是属性名，后者是传递进来的参数payload
	}
}
export const getDelItemAction = (payload)=>{
	return  {
		type:DEL_ITEM,
		payload
	}
}