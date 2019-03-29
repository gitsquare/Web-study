const mongoose = require('mongoose');

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

	//用模型操作数据(CRUD)
	//4.3更新数据
	/*UserModel.updateOne({age:{$gte:70}},{$set:{age:90}},(err,doc)=>{
		//在终端操作的时候得加上$set，否则会把此文档其它数据删掉
		if(err){
			console.log('updateOne user error',err);
		}else{
			console.log(doc);
		}
	})*/

	/*UserModel.updateOne({age:{$gte:70}},{age:100},(err,doc)=>{
		//在mongoose操作的时候得不需要加上$set
		if(err){
			console.log('updateOne user error',err);
		}else{
			console.log(doc);
		}
	})*/

	UserModel.updateMany({age:{$gte:90}},{age:100},(err,doc)=>{
		if(err){
			console.log('updateOne user error',err);
		}else{
			console.log(doc);
		}
	})

	
});





