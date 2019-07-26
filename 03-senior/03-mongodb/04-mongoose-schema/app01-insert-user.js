const mongoose = require('mongoose');
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
	UserModel.insertMany({
		name:"Tom",
		age:'13',

		// age:'1b2',
		/*ValidationError: user validation 
		failed: age: Cast to Number failed for value "1b2" at path "age"*/

		/*在存储和更新数据时,如果数据的类型和定义字段的类型不一致,
		mongoose内部会尝试将数据转换为定义的字段类型,如果转换失败则操作失败*/
		major:"sport"

	},(err,doc)=>{
		if(err){
			console.log('insertMany error',err);
		}else{
			console.log(doc);
		}
	})
});





