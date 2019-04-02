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

		type:mongoose.Schema.Types.ObjectId,
		ref:'user'
	}
});

BlogSchema.statics.findBlog = function(query){
 	return this.findOne(query)
 	.populate('author','name age -_id');
 }


//2.生成模型model
//2.1 mongoose.model第一个参数是指定集合的名称,mongoose会自动变成负数
//2.2mongoose.model第二个参数是指定Schema
const BlogModel = mongoose.model('blog',BlogSchema);

//3.导出模型Model
module.exports = BlogModel;

