const mongoose = require('mongoose');
const moment = require('moment');
const UserModel = require('./models/user.js');

//1.连接数据库
mongoose.connect('mongodb://localhost/kuazhu', {useNewUrlParser: true});//默认端口是27017
const db = mongoose.connection;

db.on('error',(err)=>{
	console.log('connection err');
	throw err;
})

db.once('open',()=>{
	console.log('connection successful');
	UserModel.findById('5ca1c619b81a3c00a44b46f6',(err,doc)=>{
		if(err){
			console.log('find user error',err);
		}else{
			//通常从数据库中取出的时间需要做格式化,可以借助 moment 包来格式化时间

			// console.log(doc.createdAt);
			//方法1.用Date类
			//const date = new Date(doc.createdAt);
			//console.log(date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());

			//方法2.用moment
			console.log(moment(doc.createdAt).format('YYYY-MM-DD HH:mm:ss'))
		}
	})
});





