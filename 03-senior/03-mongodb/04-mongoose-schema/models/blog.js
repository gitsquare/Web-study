const mongoose = require('mongoose');

//1.定义Schema
const BlogSchema = new mongoose.Schema({
	title:{
		type:String,
		default:''
	},
	content:{
		type:String,
		default:''
	},
	author:{
		//ObjectId(mongoose.Schema.Types.ObjectId)
		// type:String

		type:mongoose.Schema.Types.ObjectId,//在mongoose当中ObjectId是一种数据类型
		ref:'user'//如果用populate关联查询，必须添加ref属性，值为表的名称。
	}
});

BlogSchema.statics.findBlog = function(query={}){//设置参数的默认值，默认查询所有
 	return this.find(query)
 	.populate('author','name age -_id');
 }


//2.生成模型model
//2.1 mongoose.model第一个参数是指定集合的名称,mongoose会自动变成负数
//2.2mongoose.model第二个参数是指定Schema
const BlogModel = mongoose.model('blog',BlogSchema);

//3.导出模型Model
module.exports = BlogModel;

