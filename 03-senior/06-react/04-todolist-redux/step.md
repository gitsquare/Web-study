创建一个store文件夹并进入

1.新建index.js用来初始化store
	1.1 import { createStore } from 'redux'
	1.2 import reducer from './reducer.js' 引入的reducer是一个函数
	1.3 const store = createStore(reducer)，返回的store负责整个数据管理，它包含的方法用来操作数据
		dispatch 派发action
		getState 获取store中的state数据
		subscribe传递的参数为一个函数，当store中的数据发生变化，会触发subscribe方法中传递的函数
		replaceReducer
	1.4 export default store
	1.5 index.js文件就代表了整个store，直接在APP.js中引用import store from './store/index.js'，

2.新建reducer.js文件用来创建reducer，需要引入actionTypes.js文件，根据判断不同的actionType对store数据进行不同的处理
	2.1 实际上数据是在reducer中操作的，reducer负责业务逻辑处理,生成新的state,由store来最终改变。
		reducer是一个纯函数(固定的输入就有固定的输出)
	2.2 在reducer.js中，需要进行state的初始化，即const defaultState = {}。而reducer的第一个参数就是state=defaultState，代表数据的初始值，可以在APP.js中的constructor中通过store.getState()方法初始化state的数据this.state=store.getState(),当state中的数据发生变化，在constructor中通过store.subscribe()方法获取最新的state来更新当前组件的state数据，store.getState(()=>{this.setState(()=>store.getState())})
	2.3 第二个参数是action,它是一个对象，是由actionCreator.js文件创造。

3.新建actionCreator.js文件，
	3.1 用来创建action对象。action对象的第一个键值对为type:ACTIONTYPES,指的是action的类型，第二个
		键值对为payload：payload，可以简写为es6语法payload，指的是告诉store改成什么值。
	3.2 新建actionTypes.js文件，根据action的不同，设置不同的actionType,它的写法：变量名均为大写，
		值为对应的小写字符串，并分别导出。
	3.3 在reducer.js中引入actionTypes.js文件，根据if判断actionType来编写处理store数据
		的逻辑，处理store数据时，需要先复制上一次的state再进行处理，如果直接操作上一次的state可能会造成数据被覆盖的风险，通过const newState = JSON.parse(JSON.stringify(state))这种方法来新建一个和上一次相同的state，通过对新建的state处理，处理完后把更新后的即newState给return出去
	3.4 在actionCreator.js中引入actionTypes.js文件，根据不同的actionType创建不同的函数来构建不同
		的action，函数的参数为payload,返回值即为action对象，并且把函数分别导出，在App.js文件中引用，创建和派发action

4.在App.js文件中派发action
	4.1 引入store文件夹中的index.js文件，import store from './store/index.js' 
		通过store上的方法去派发action、获取state数据等
	4.2 引入actionCreator.js文件，根据对数据不同的处理，调用不同的函数创造不同的action，并且把对应
		的payload作为参数传递到函数中，再把生成的action派发给reducer，store.dispatch(action)