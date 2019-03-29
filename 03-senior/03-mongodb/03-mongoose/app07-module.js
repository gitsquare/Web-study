const mongoose = require('mongoose');
const UserModel = require('./modejs/user.js');
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

	//用模型操作数据(CRUD)
	UserModel.distinct('name',{age:{$gt:50}},(err,doc)=>{
		if(err){
			console.log('updateOne user error',err);
		}else{
			console.log(doc);
		}
	})
});





