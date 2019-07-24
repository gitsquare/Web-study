import React,{ Component } from 'react';

//定义父组件传入子组件数据的校验规则
//安装react时会默认安装prop-types,所以无需安装
import PropTypes from 'prop-types';

class Item extends Component{
	constructor(props){
		super(props)
	}
	//render方法负责渲染
	render(){
		// this.props存放组件的外部数据
		const {handleDel,content} = this.props;//通过解构赋值，写起来更方便
		return (
			<li onClick={handleDel}>
				{content}
			</li>
		)
	}
}


Item.propTypes = {
	handleDel:PropTypes.func,
	content:PropTypes.string.isRequired//代表必须得传这个参数
}
//定义子组件中的默认值,如果此参数没有传，就用这个默认值
Item.defaultProps = {
	content:'休息'
}
export default Item;














