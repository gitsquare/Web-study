//把combineReducers方法引入，合并所有的reducer
import { combineReducers } from 'redux'

import { reducer as todolistReducer  } from '../pages/todolist/store'
//'../pages/todolist/store'相当于找到index.js文件，在这个文件中{ reducer,actionCreator }这两个都被导出来

export default combineReducers({
	todolist:todolistReducer
})