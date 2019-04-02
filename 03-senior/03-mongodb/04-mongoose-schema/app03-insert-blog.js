const mongoose = require('mongoose');
const BlogModel = require('./models/blog.js');

//1.连接数据库
mongoose.connect('mongodb://localhost/kuazhu', {useNewUrlParser: true});//默认端口是27017
const db = mongoose.connection;

db.on('error',(err)=>{
	console.log('connection err');
	throw err;
})

db.once('open',()=>{
	console.log('connection successful');
	BlogModel.insertMany({
		title:"title2",
		content:"content2",
		author:"5ca301021bb3f214403c3cd0"
	},(err,doc)=>{
		if(err){
			console.log('insertMany error',err);
		}else{
			console.log(doc);
		}
	})
});





