const mongoose = require('mongoose');
//1.定义Schema
const UserSchema = new mongoose.Schema({
	//定义类型的方法有两种,第一种是直接用类型。 
	/*name:String,
	age:Number,
	major:String*/

	//第二种是用一个对象,类型是对象type属性的值,这种方法可设置默认值

	//每一个验证都可以写为: 规则:[值,错误消息]的格式,也可以写为:规则:值
	name:{
		type:String,
		required:[true,"bixushuru"],
		//所有的类型都有required(必须存在)验证 
		maxlength:[5,"5zifu"],//在这里一个汉字也代表一个字符
		minlength:[2,"2zifu"],
		//String有enum(枚举),maxlength(最大长度)和minlength(最小长度)验证.
	},
	age:{
		type:Number,
		default:10,//默认值也必须符合min和max之间
		min:[10,"min10"],
		max:[100,'max100']
		//Number类型有min(最小)和max(最大)值验证
	},
	phone:{
		type:Number,
		validate:{
			//验证规则
			validator:function(val){
				return /1[358]\d{9}/.test(val);
			},
			//验证消息
			message:'{VALUE}illegal'
			//{VALUE}代表当前输入的信息
		}
	},
	major:{
		type:String,
		enum:["art","sport","computer","physical"],//枚举类型
		default:"art"
	},
	locked:{
		type:Boolean,
		default:false
	},
	createdAt:{
		type:Date,
		default:Date.now
		//MongoDB存储的是格林尼治标准时间(GMT时间),和们的时区错8个小时,存储时会减去8小时
	},
	friends:{
		type:Array
	}
});

//自定义实例方法举例
 UserSchema.methods.findBlogs = function(cb){
 	//函数要写成普通函数
 	// console.log(this);//this是UserModel的一个实例

 	// 在Model的原型上有Model.prototype.model()方法,该方法返回一个指定的Model
 	// console.log(this.model('blog'));

 	this.model('blog').find({author:this._id},cb);
 }

 //自定义模型静态方法举例
 UserSchema.statics.findByPhone = function(val,callback){
 	//console.log(this);//this 是 UserModel

 	console.log(this.model('user') === this);
 	//如果需要用BlogModel,把'blog'传进去就可以了

 	this.find({phone:val},callback);
 }



//2.生成模型model
//2.1 mongoose.model第一个参数是指定集合的名称,mongoose会自动变成负数
//2.2mongoose.model第二个参数是指定Schema
const UserModel = mongoose.model('user',UserSchema);

//3.导出模型Model
module.exports = UserModel;

