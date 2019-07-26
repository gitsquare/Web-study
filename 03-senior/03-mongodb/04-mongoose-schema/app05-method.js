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
		// user就是{name:"Tom"}对应的用户
		if(err){
			console.log('find user err::',err);
		}else{
			console.log(user);
			// 根据用户的_id,即{author:user._id}找到对应的blog
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
			// 调用实例方法
			//调用user实例上面的自定义的findBlogs方法，参数是一个函数
			user.findBlogs((err,blogs)=>{
				if(err){
					console.log('find blog err::',err)
				}else{
					console.log(blogs);
				}				
			})
		}
	})*/
	
	// 调用静态方法
	UserModel.findByPhone('13811111112',(err,user)=>{
		if(err){
			console.log('find user err::',err)
		}else{
			console.log(user);
		}		
	})
});