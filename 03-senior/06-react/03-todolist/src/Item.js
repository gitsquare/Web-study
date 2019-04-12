import React,{ Component } from 'react';

import PropTypes from 'prop-types';

class Item extends Component{
	constructor(props){
		super(props)
	}
	render(){
		const {handleDel,content} = this.props;
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
	content:'上天'
}
export default Item;


