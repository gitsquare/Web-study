import reducer from './reducer.js'

//*代表所有
import * as actionCreator from './actionCreator.js'

export { reducer,actionCreator }

//在这个页面中，把需要导出的组件通过这个页面导出，在最顶层的store中用reducer.js文件接收