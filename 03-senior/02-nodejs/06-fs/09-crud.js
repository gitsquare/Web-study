//crud
//create read update delete
const fs = require('fs');
const util = require('util');
const filePath = './data.json';

const readFile = util.promisify(fs.readFile);//返回一个promise
const writeFile = util.promisify(fs.writeFile);//返回一个promise


/*const add = (name,callback)=>{
	//1.获取原有数据
	fs.readFile(filePath,(err,data)=>{
		if(err){
			callback(err);
		}else{
			let arr = JSON.parse(data);//解析。把buffer转换成数组
			//2.添加数据到原有数据中
			arr.push({
				id:Date.now().toString() + parseInt(Math.random()*10000).toString().padStart(4,'0'),
				//因为随机数可能会出现0.0几的情况，为了规范，统一以四位为准。
				name:name
			});
			//3.保存
			let strArr = JSON.stringify(arr);
			fs.writeFile(filePath,strArr,(err)=>{
				if(err){
					callback(err);
				}else{
					callback(null,arr);
				}
			})
		}
	})
}
//添加数据后把所有json数据返回，所以用回调函数
add('Tom',(err,data)=>{
	if(err){
		console.log(err);
	}else{
		console.log(data);
	}
});*/

//create
async function add(name){
	//1.获取原有的数据
	let data = await readFile(filePath);
	let arr = JSON.parse(data);
	//2.添加数据到原有的数据中
	arr.push({
		id:Date.now().toString()+parseInt(Math.random()*10000).toString().padStart(4,'0'),
		name:name
	});
	//转换成JSON
	let strArr = JSON.stringify(arr);
	//3.保存
	await writeFile(filePath,strArr);
	return arr;
}
//read
async function get(id){
	//1.获取原有的数据
	let data = await readFile(filePath);//拿到的是一个buffer
	let arr = JSON.parse(data);//解析
	//2.查找对应id的对象
	return arr.find(value=>{
		return value['id'] == id;
	})
}

//update
async function update(id,name){
	//1.获取原有的数据
	let data = await readFile(filePath);
	let arr = JSON.parse(data);	
	//2.查找对应id的对象
	let obj = arr.find(val=>{
		return val['id'] == id;
	})//返回第一个符合条件的数组成员
	if(obj){
		obj.name = name;
		let strArr = JSON.stringify(arr);
		//3.保存
		await writeFile(filePath,strArr);
		return arr;
	}else{
		return obj;//其实就是undefined
	}	
}

//delete
async function remove(id){
	//1.获取原有的数据
	let data = await readFile(filePath);
	let arr = JSON.parse(data);
	//2.过滤
	let newArr = arr.filter(val=>{
		return val['id'] != id;
	})//对数组元素进行过滤。filter方法不会改变原数组，而是返回一个新的数组
	let strArr = JSON.stringify(newArr);
	//3.保存
	await writeFile(filePath,strArr);
	return newArr;	
}



/*add("mike")
.then(data=>{
	console.log(data);
})
.catch(err=>{
	console.log(err);
})*/

/*get('15535815473973682')
.then(data=>{
	console.log(data);
})
.catch(err=>{
	console.log(err);
})*/

/*update('15535815473973682','perter')
.then(data=>{
	console.log(data);
})
.catch(err=>{
	console.log(err);
})*/

/*remove('15535815473973682')
.then(data=>{
	console.log(data);
})
.catch(err=>{
	console.log(err);
})*/





