import React,{ Component } from 'react'
import {
  Form, Input,Breadcrumb, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,
} from 'antd';
import { connect } from 'react-redux'
const { Option } = Select;
import Layout from 'common/layout'
import { actionCreator } from './store'

class CategoryAdd extends Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount(){
    this.props.getLevelOneCategories()
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.handleAdd(values);
      }
    });
  }
  render(){
    const { getFieldDecorator } = this.props.form;
    const { isAddFetching,levelOneCategories } = this.props
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    return (
    	<div className="CategoryAdd">
    		<Layout>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>分类管理</Breadcrumb.Item>
            <Breadcrumb.Item>添加分类</Breadcrumb.Item>
          </Breadcrumb>
          <Form {...formItemLayout}>
            <Form.Item  label="分类名称">
              {getFieldDecorator('name', {
                rules: [{ required: true, message: '请输入分类名称!' }],
              })(
                <Input placeholder="分类名称" style={{width:300}} />
              )}
            </Form.Item>
            <Form.Item  label="父级分类">
              {getFieldDecorator('pid', {
                rules: [{ required: true, message: '请选择父级分类!' }],
              })(
                <Select style={{ width: 300 }}>
                  <Option value="0">跟分类</Option>
                  {
                    levelOneCategories.map(category=>{
                      return <Option key={category.get('_id')} value={category.get('_id')}>跟分类/{category.get('name')}</Option>
                    })
                  }
                </Select>
              )}
            </Form.Item>
          </Form>
          <Form.Item {...tailFormItemLayout}>
            <Button 
            type="primary" 
            loading={isAddFetching}
            onClick={this.handleSubmit} 
            >
              提交
            </Button>
          </Form.Item>
    		</Layout>
    	</div>
    )
  }
}
const mapStateToProps = (state)=>{
  return {
     isAddFetching:state.get('category').get('isAddFetching'),
     levelOneCategories:state.get('category').get('levelOneCategories')
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    handleAdd:(values)=>{
      const action = actionCreator.getAddAction(values);
      dispatch(action)
    },
    getLevelOneCategories:()=>{
      const action = actionCreator.getLevelOneCategoriesAction();
      dispatch(action)
    }
  }
}

const WrappedCategoryAdd = Form.create()(CategoryAdd)
export default connect(mapStateToProps,mapDispatchToProps)(WrappedCategoryAdd)