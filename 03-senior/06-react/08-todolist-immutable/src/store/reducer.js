// import { combineReducers } from 'redux'
//把原始的state变成immutable数据
import { combineReducers } from 'redux-immutable'

import { reducer as todolistReducer  } from '../pages/todolist/store'

export default combineReducers({
	todolist:todolistReducer
})