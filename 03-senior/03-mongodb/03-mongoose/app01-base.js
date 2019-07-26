const mongoose = require('mongoose');

//1.连接数据库
mongoose.connect('mongodb://localhost/kuazhu', {useNewUrlParser: true});//默认端口是27017
const db = mongoose.connection;//这个db指连接mongodb的数据库kuazhu

//监听事件来确定到底是连接成功还是失败
//连接失败
db.on('error',(err)=>{
	console.log('connection err');
	// 如果连接失败，就把错误throw出去，终止程序
	throw err;
})
//连接成功
//用once添加的事件只执行一次，然后就销毁掉了
db.once('open',()=>{
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
	//返回一个类
	const UserModel = mongoose.model('user',UserSchema);

	//4.用模型操作数据(CRUD)
	//4.1插入数据(其中一种方法)
	// 创造一个实例，插入到集合当中
	// const user1 = new UserModel({name:"Leo",age:24,major:"computer"});
	/*const user2 = new UserModel({name:"Tom",age:29,major:"art"});
	user2.save((err,doc)=>{
		if(err){
			console.log('save user error',err);
		}else{
			console.log(doc);
		}
	})*/

	//4.2查询数据
	/*UserModel.find({age:{$lt:25}},(err,doc)=>{
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

	/*UserModel.updateOne({name:"Leo"},{$set:{age:66}},(err,doc)=>{
		if(err){
			console.log('update user error',err);
		}else{
			console.log(doc);
		}
	})*/
	/*UserModel.updateMany({name:"Leo"},{$set:{age:15}},(err,doc)=>{
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





