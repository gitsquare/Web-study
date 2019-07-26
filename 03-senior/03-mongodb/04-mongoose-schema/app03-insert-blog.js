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
	BlogModel.insertMany([{
		title:"title1",
		content:"content1",
		author:"5d34fd04889a0812e8258767"
	},
	{
		title:"title2",
		content:"content2",
		author:"5d34fd04889a0812e8258767"
	}],(err,doc)=>{
		if(err){
			console.log('insertMany error',err);
		}else{
			console.log(doc);
		}
	})
});





