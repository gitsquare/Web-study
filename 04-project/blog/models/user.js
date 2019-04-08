const mongoose = require('mongoose');

//1.定义Schema
const UserSchema = new mongoose.Schema({
	username:{
		type:String
	},
	password:{
		type:String
	},
	isAdmin:{
		type:Boolean,
		default:false
	}
	//对于简单的系统来说，把管理员和普通用户放在一张表中
	//默认是普通用户，只有isAdmin的值为true的时候，为管理员
});


//2.生成模型Model
const UserModel = mongoose.model('User', UserSchema);
//3.导出模型Model
module.exports = UserModel;