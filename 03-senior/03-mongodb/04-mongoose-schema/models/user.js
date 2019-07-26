const mongoose = require('mongoose');
//1.定义Schema
const UserSchema = new mongoose.Schema({
	//定义类型的方法有两种,第一种是直接用类型。 
	/*name:String,
	age:Number,
	major:String*/
	//第二种是用一个对象,类型是对象type属性的值,这种方法可设置默认值
	/*一、内置验证
		1.所有的类型都有required(必须)验证 
		2.Number类型有min(最小)和max(最大)值验证
		3.String有enum(枚举),maxlength(最大长度)和minlength(最小长度)验证.
		4.每一个验证都可以写为: 规则:[值,错误消息]的格式,也可以写为:规则:值
	二、自定义验证
	*/
	name:{
		type:String,
		//所有的类型都有required验证，意思是必须存在 
		required:[true,"必须输入！"],
		//String有enum(枚举),maxlength(最大长度)和minlength(最小长度)验证.
		maxlength:[5,"最多5位字符"],//在这里一个汉字也代表一个字符
		minlength:[2,"最少2位字符"],
	},
	age:{
		type:Number,
		default:10,//默认值也必须符合min和max之间
		//Number类型有min(最小)和max(最大)值验证
		min:[10,"最小年龄是10岁"],
		max:[100,'最大年龄是100岁']
	},
	phone:{
		type:Number,
		// 自定义验证
		// validate就是一个属性，值是一个对象，
		// 在对象中有两个属性，一个是验证规则(方法)，一个是验证失败后的消息
		validate:{
			//验证规则(方法)，参数是用户输入的数据
			validator:function(val){
				return /1[358]\d{9}/.test(val);
			},
			//验证失败后的消息
			message:'{VALUE}不是合法的手机号'
			//{VALUE}代表当前输入的信息
		}
	},
	major:{
		type:String,
		//枚举类型
		enum:["art","sport","computer","physical"],
		default:"art"
	},
	//用户是否被锁住
	locked:{
		type:Boolean,
		default:false
	},
	//用户创建时间
	createdAt:{
		type:Date,
		default:Date.now
		//MongoDB存储的是格林尼治标准时间(GMT时间),和们的时区错8个小时,存储时会减去8小时
	},
	friends:{
		// 默认是一个空数组
		type:Array
	}
});
//自定义实例方法举例
// 在UserSchema上有一个methods属性，在这个属性上添加的函数都是实例方法
// 参数是回调函数
 UserSchema.methods.findBlogs = function(cb){
 	//函数要写成普通函数，注意不要用箭头函数
 	/*根据函数调用时属于谁，this就指向谁，因为是UserModel的一个实例调用的，
 	所以this指的是UserModel的一个实例*/
 	// console.log(this);
 	// 在Model的原型上有Model.prototype.model()方法,该方法返回一个指定的Model
 	// console.log(this.model('blog'));

 	/*调用实例的方法model，返回一个Model，这个Model就类似于UserModel，
 	而不是用UserModel插入的数据，在这里返回的是BlogModel*/
 	//这里blog可以直接引入，为什么？
 	this.model('blog').find({author:this._id},cb);
 }

 //自定义模型静态方法举例
 // 在UserSchema上有一个statics属性，在这个属性上添加的函数都是静态方法
 UserSchema.statics.findByPhone = function(val,callback){
 	//因为是静态方法，是UserModel在调用，所以this指的是UserModel
 	//console.log(this);

 	console.log(this.model('user') === this);//true
 	//如果需要用BlogModel,把'blog'传进去就可以了

 	this.find({phone:val},callback);
 }
//2.生成模型model
//2.1 mongoose.model第一个参数是指定集合的名称,mongoose会自动变成负数
//2.2mongoose.model第二个参数是指定Schema
const UserModel = mongoose.model('user',UserSchema);

//3.导出模型Model
module.exports = UserModel;

