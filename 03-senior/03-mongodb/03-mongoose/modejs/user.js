const mongoose = require('mongoose');

//1.定义Schema
const UserSchema = new mongoose.Schema({
	name:String,
	age:Number,
	major:String
})
//2.生成模型model
//2.1 mongoose.model第一个参数是指定集合的名称,mongoose会自动变成负数
//2.2mongoose.model第二个参数是指定Schema
const UserModel = mongoose.model('user',UserSchema);

//3.导出模型Model
module.exports = UserModel;

