// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable'
import { reducer as todolistReducer  } from '../pages/todolist/store'
import { reducer as loginReducer  } from '../pages/login/store'

export default combineReducers({
	todolist:todolistReducer,
	login:loginReducer
})