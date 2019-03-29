const mongoose = require('mongoose');
//构建数据用
const getRandom	= (min,max)=>{	
	return Math.round(min + (max-min)*Math.random());
}

const names = ["Amy","Tom","Leo","Peter","Ricky","Lucy","Andy","Mike"];
const majors = ["art","computer","sport","music"];

const getName = ()=> names[getRandom(0,names.length-1)]
const getMajor = ()=> majors[getRandom(0,majors.length-1)]



//1.连接数据库
mongoose.connect('mongodb://localhost/kuazhu', {useNewUrlParser: true});//默认端口是27017
const db = mongoose.connection;

//连接失败
db.on('error',(err)=>{
	console.log('connection err');
	throw err;//throw的用法？
})

//连接成功
db.once('open',()=>{
	console.log('connection successful');
	//2.定义Schema
	const UserSchema = new mongoose.Schema({
		name:String,
		age:Number,
		major:String
	})
	//3.生成模型model
	//3.1 mongoose.model第一个参数是指定集合的名称,mongoose会自动变成负数
	//3.2mongoose.model第二个参数是指定Schema
	const UserModel = mongoose.model('user',UserSchema);

	//4.用模型操作数据(CRUD)
	//4.1插入数据(其中一种方法)
	/*const user = new UserModel({name:"Leo",age:24,major:"computer"});
	user.save((err,doc)=>{
		if(err){
			console.log('save user error',err);
		}else{
			console.log(doc);
		}
	})*/
	//第二种方法
	//插入一条
	/*UserModel.insertMany({name:getName(),age:getRandom(10,100),major:getMajor()},(err,doc)=>{
		if(err){
			console.log('updateMany err',err);
		}else{
			console.log('successful',doc);
		}
	})*/
	//插入多条
	/*UserModel.insertMany(
		[
			{name:getName(),age:getRandom(10,100),major:getMajor()},
			{name:getName(),age:getRandom(10,100),major:getMajor()}
		],
		(err,doc)=>{
		if(err){
			console.log('updateMany err',err);
		}else{
			console.log('successful',doc);
		}
	})*/

	/*let promise = UserModel.insertMany(
		[
			{name:getName(),age:getRandom(10,100),major:getMajor()},
			{name:getName(),age:getRandom(10,100),major:getMajor()}
		]
	);//返回的是一个promise，所以不需要回调函数
	promise.then(docs=>{
		console.log('successful',docs);
	})
	.catch(err=>{
		console.log('insertMany err:',err);
	})*/

	//insertMany和create方法一样，并且insertMany方法更加高效
	UserModel.create({name:getName(),age:getRandom(10,100),major:getMajor()},(err,doc)=>{
		if(err){
			console.log('create err',err);
		}else{
			console.log('successful',doc);
		}
	})
});





