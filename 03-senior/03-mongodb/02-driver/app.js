//返回的MongoClient是一个类
const MongoClient = require('mongodb').MongoClient;

// const assert = require('assert');//做测试用的，暂时不用管

// Connection URL
const url = 'mongodb://localhost:27017';//localhost代表本机，即127.0.0.1

// Database Name
const dbName = 'kuazhu';

// Create a new MongoClient，创建一个MongoClient实例client
const client = new MongoClient(url,{ useNewUrlParser: true });

// Use connect method to connect to the Server
client.connect(function(err) {
  // assert.equal(null, err);
  console.log("Connected successfully to server");

  //调用client的db方法，把数据库的名字作为参数传递进去，此方法返回一个数据库。后面所有操作都是基于db这个数据库。
  //如果之前存在'kuazhu'这个数据库，就用之前的。如果没有，就会自动生成
  const db = client.db(dbName);

  //Get the documents collection,在数据库kuazhu中创建集合
  // 如果之前存在'user'这个数据库，就用之前的。如果没有，就会自动生成
  const collection = db.collection('user');

  //Insert a Document
  
  /*collection.insertMany([{name:"Tom",age:9,major:"computer"},{name:"Jack",age:29,major:"computer"}],(err,result)=>{
  	if(err){
  		console.log('insertMany err:',err);
  	}else{
  		console.log(result);
  	}
    // 对数据库操作完成之后需要关闭
  	client.close();
  }) */

  //Find all
  /*collection.find({}).toArray((err,result)=>{
  	if(err){
  		console.log('find err:',err);
  	}else{
  		console.log(result);
  	}
  	client.close();
  })*/

  /*collection.find({age:{$gte:19}}).toArray((err,result)=>{
  	if(err){
  		console.log('find err:',err);
  	}else{
  		console.log(result);
  	}
  	client.close();
  })*/

  //Update a document
  collection.updateOne({name:"Tom"},{$set:{age:111}},(err,result)=>{
  	if(err){
  		console.log('updateOne err:',err);
  	}else{
  		console.log(result);
  	}
  	client.close();
  })

  //Remove a document
 /* collection.deleteOne({name:"Tom"},(err,result)=>{
	if(err){
	console.log('Remove err:',err);
  	}else{
  		console.log(result);
  	}
  	client.close();
  })*/
});