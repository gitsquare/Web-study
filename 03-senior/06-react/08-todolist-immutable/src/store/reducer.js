// import { combineReducers } from 'redux'
//把原始的state变成immutable数据
/*redux-immutable提供一个combineReducers()函数，将stroe中最外层的reducer中的state转化为immutable对象
（这里涉及到reducer的拆分，拆分用到了与redux中同名的combineReducers()方法）*/
import { combineReducers } from 'redux-immutable'

import { reducer as todolistReducer  } from '../pages/todolist/store'

export default combineReducers({
	todolist:todolistReducer
})