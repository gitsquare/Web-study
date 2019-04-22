// import { combineReducers } from 'redux'

//因为combineReducers是从redux-immutable引入的，所以用这个方法合并的reducer中的数据也是immutable类型的
import { combineReducers } from 'redux-immutable'

//1.引入login组件自己的reducer,相当于引用 '../pages/login/store/index.js'
//2.为了避免命名冲突,对引入的reducer重命名
import { reducer as loginReducer  } from 'pages/login/store'

import { reducer as homeReducer  } from 'pages/home/store'
import { reducer as userReducer  } from 'pages/user/store'

export default combineReducers({
	//3.属性login就是合并和整个顶层数据(state)的一个属性,loginReducer就是该属性的值
	//4.所以在获取值的时候需要从顶层的state中先获取'login',
	//再获取里面的值(参考 /src/pages/login/index.js中的mapStateToProps方法) 
	login:loginReducer,
	home:homeReducer,
	user:userReducer,
})
//顶层只有一个state，这个state就是combineReducers方法返回的state，
//例如获取login中的数据时，state.get('login').get('xxx')
