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
	//需求:找博文的标题是"title1"的第一篇文章的所有信息(包括博文的信息和作者的信息)
	
	/*BlogModel.findOne({title:"title1"},(err,blog)=>{
		if(err){
			console.log('find blog err::',err);
		}else{
			// console.log(blog);
			//定义一个对象
			const result = {
				//添加blog信息
				blog:blog
			};
			UserModel.findById(blog.author,(err,user)=>{
				if(err){
					console.log('find user err::',err)
				}else{
					result.user = user;//添加user信息
					console.log(result);
				}
			})
		}
	})*/
	
	
	/*BlogModel.findOne({title:"title1"})//返回的是一个Query对象
	//如果用populate关联查询，必须添加ref属性，值为表的名称。
	//第一个参数是关联的字段，第二个参数是需要显示的字段，
	//但是_id会默认存在，如果不要_id,则前面加-号
	.populate('author','name age -_id')//返回一个相当于promise
	.then(result=>{
		console.log(result);
	})*/
	
	// 参数是查询条件
	BlogModel.findBlog({title:"title1"})//返回的是一个promise
	.then(result=>{
		console.log(result);
	})
	.catch((err)=>{
		console.log(err);
	})
});