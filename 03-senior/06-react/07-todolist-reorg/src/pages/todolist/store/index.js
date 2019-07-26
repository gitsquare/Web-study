import reducer from './reducer.js'

//*代表所有
import * as actionCreator from './actionCreator.js'

export { reducer,actionCreator }

//把需要导出的组件通过这个文件导出，在最顶层的store中用reducer.js文件接收