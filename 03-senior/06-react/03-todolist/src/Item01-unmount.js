import React,{ Component } from 'react';

//PropTypes定义父组件传入子组件数据的校验规则
//安装react时会默认安装prop-types,所以无需安装
//使用前需要先引入
import PropTypes from 'prop-types';

class Item extends Component{
	constructor(props){
		super(props)
	}

	//卸载,当组件从 DOM 中移除时会调用
	componentWillUnmount(){
		console.log('Item componentWillUnmount')
	}
	render(){
		const {handleDel,content} = this.props;//解构赋值
		return (
			/*用解构赋值可以将this.props.handleDel简写为handleDel，this.props.content简写为content*/
			<li onClick={handleDel}>
				{/*这里的this仍然是指的App*/}
				{/*子组件给父组件传递参数*/}
				{/*子组件调用父组件传递过来的方法,将要传递的参数传给该方法*/}
				{content}
				{/*子组件通过 this.props.属性名来接收*/}
				{/*this.props存放组件的外部数据*/}
				{/*注意点：子组件不能改变父组件中的数据*/}
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




//props/state/render的关系

//1.this.state 存放组件内部数据,this.props存放组件的外部数据,render负责渲染页面

//2.当组件的state或者props发生改变时render函数会重新执行

//3.当父组件的render函数执行时,子组件的render函数也会被执行