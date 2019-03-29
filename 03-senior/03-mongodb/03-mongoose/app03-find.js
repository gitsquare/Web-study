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

	//4.1插入数据
	/*const arr = [];
	for(let i = 0;i<10;i++){
		arr.push({
			name:getName(),
			age:getRandom(10,100),
			major:getMajor()
		})
	}
	let promise = UserModel.insertMany(arr);//返回的是一个promise，所以不需要回调函数
	promise.then(docs=>{
		console.log('successful',docs);
	})
	.catch(err=>{
		console.log('insertMany err:',err);
	})*/

	//4.2查询数据
	/*UserModel.find({},(err,doc)=>{
		if(err){
			console.log('find user error',err);
		}else{
			console.log(doc);
		}
	})*/

	/*UserModel.find({age:{$in:[41,45]}},(err,doc)=>{
		if(err){
			console.log('find user error',err);
		}else{
			console.log(doc);
		}
	})*/

	/*UserModel.find({age:{$gte:70}},"age name -_id",(err,doc)=>{
		//id默认会显示，如果不让id显示，就设置 -_id;
		if(err){
			console.log('find user error',err);
		}else{
			console.log(doc);
		}
	})*/

	/*UserModel.find({age:{$gte:40}},null,{skip:1,limit:3},(err,doc)=>{//skip,limit等方法可以同时使用
		//因为参数时按顺序的，所以如果没有projection，就用null代替。
		//id默认会显示，如果不让id显示，就设置 -_id;
		if(err){
			console.log('find user error',err);
		}else{
			console.log(doc);
		}
	})*/

	/*let result = UserModel.find({age:{$gte:40}},null,{sort:{age:-1}},(err,doc)=>{
		if(err){
			console.log('find user error',err);
		}else{
			console.log(doc);
		}
	})
	console.log(result);//返回的是Query对象*/

	/*UserModel.findById('5c9c7fe3b3261e2248a4e6e2',"-_id",(err,doc)=>{
		if(err){
			console.log('find user error',err);
		}else{
			console.log(doc);
		}
	})*/

	UserModel.findOne({age:{$gte:41}},"-_id",{skip:1},(err,doc)=>{
		if(err){
			console.log('find user error',err);
		}else{
			console.log(doc);
		}
	})
});





