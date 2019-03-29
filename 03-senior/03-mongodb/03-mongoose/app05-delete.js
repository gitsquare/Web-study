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
	//4.4删除数据
	/*UserModel.deleteOne({age:{$gte:100}},(err,doc)=>{
		if(err){
			console.log('updateOne user error',err);
		}else{
			console.log(doc);
		}
	})*/
	UserModel.deleteMany({age:{$gte:100}},(err,doc)=>{
		if(err){
			console.log('updateOne user error',err);
		}else{
			console.log(doc);
		}
	})

});





