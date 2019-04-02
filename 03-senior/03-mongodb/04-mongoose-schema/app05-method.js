const mongoose = require('mongoose');
const UserModel = require('./models/user.js')
const BlogModel = require('./models/blog.js')
mongoose.connect('mongodb://localhost/kuazhu', {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', (err)=>{
	console.log('connection error');
	throw err;
});

db.once('open', ()=>{
	console.log('connection successful');
	//找到第一个用户名是Tom的所有博文
	
	/*UserModel.findOne({name:"Tom"},(err,user)=>{
		if(err){
			console.log('find user err::',err);
		}else{
			console.log(user);
			BlogModel.find({author:user._id},(err,blogs)=>{
				if(err){
					console.log('find blog err::',err)
				}else{
					console.log(blogs);
				}
			})
		}
	})*/
	
	
	/*UserModel.findOne({name:"Tom"},(err,user)=>{
		if(err){
			console.log('find user err::',err);
		}else{
			user.findBlogs((err,blogs)=>{//调用user实例上面的findBlogs方法
				if(err){
					console.log('find blog err::',err)
				}else{
					console.log(blogs);
				}				
			})
		}
	})*/
	
	UserModel.findByPhone('13811111112',(err,user)=>{
		if(err){
			console.log('find user err::',err)
		}else{
			console.log(user);
		}		
	})
});