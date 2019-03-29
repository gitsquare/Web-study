const mongoose = require('mongoose');

//1.连接数据库
mongoose.connect('mongodb://localhost/kuazhu', {useNewUrlParser: true});//默认端口是27017
const db = mongoose.connection;//这个db指的是什么

//监听事件来确定到底是连接成功还是失败
//连接失败
db.on('error',(err)=>{
	console.log('connection err');
	throw err;//throw的用法？
})

//连接成功
db.once('open',()=>{//once只执行一次，然后就销毁掉了
	console.log('connection successful');
	//2.定义Schema，其实就是定义数据的结构
	const UserSchema = new mongoose.Schema({
		name:String,
		age:Number,
		major:String
	})
	//3.生成模型model
	//3.1 mongoose.model第一个参数是指定集合的名称,mongoose会自动变成复数，比如user会变成users
	//3.2mongoose.model第二个参数是指定Schema
	const UserModel = mongoose.model('user',UserSchema);

	//4.用模型操作数据(CRUD)
	//4.1插入数据(其中一种方法)
	const user = new UserModel({name:"Leo",age:24,major:"computer"});
	//user是什么？
	user.save((err,doc)=>{
		if(err){
			console.log('save user error',err);
		}else{
			console.log(doc);
		}
	})

	//4.2查询数据
	/*UserModel.find({},(err,doc)=>{
		if(err){
			console.log('find user error',err);
		}else{
			console.log(doc);
		}
	})*/

	//4.3更新数据
	/*UserModel.update({name:"Tom"},{$set:{name:"Mike"}},(err,doc)=>{
		//update已经被废弃，不推荐使用。可以用updateOne或者updateMany
		if(err){
			console.log('update user error',err);
		}else{
			console.log(doc);
		}
	})*/

	/*UserModel.updateOne({name:"Tom"},{$set:{age:66}},(err,doc)=>{
		if(err){
			console.log('update user error',err);
		}else{
			console.log(doc);
		}
	})*/
	/*UserModel.updateMany({name:"Leo"},{$set:{age:66}},(err,doc)=>{
		if(err){
			console.log('update user error',err);
		}else{
			console.log(doc);
		}
	})*/

	//4.4删除数据
	/*UserModel.deleteOne({name:"Mike"},(err)=>{
		if(err){
			console.log('deleteOne user error',err);
		}else{
			console.log('successful');
		}
	})*/
	/*UserModel.deleteMany({name:"Leo"},(err,result)=>{
		if(err){
			console.log('deleteOne user error',err);
		}else{
			console.log(result);
		}
	})*/
});





