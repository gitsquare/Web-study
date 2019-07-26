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
		//在mongoose当中ObjectId是一种数据类型
		// MongoDB会自动添加ObjectId的id,如果字段类型是ObjectId,插入时会把字符串转化为ObjectId
		type:mongoose.Schema.Types.ObjectId,
		//如果用populate关联查询，必须添加ref属性，值为表的名称。
		// 代表是user中的数据，和user进行关联
		ref:'user'
	}
});

BlogSchema.statics.findBlog = function(query={}){//设置参数的默认值，默认查询所有
	// 因为是BlogModel调用，所以this指的是BlogModel
	//把返回的promise给return出去
 	return this.find(query)
 	.populate('author','name age -_id');
 }


//2.生成模型model
//2.1 mongoose.model第一个参数是指定集合的名称,mongoose会自动变成负数
//2.2mongoose.model第二个参数是指定Schema
const BlogModel = mongoose.model('blog',BlogSchema);

//3.导出模型Model
module.exports = BlogModel;

