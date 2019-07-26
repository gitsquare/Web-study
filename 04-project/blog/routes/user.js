const express = require('express')
const UserModel = require('../models/user.js')
const hmac = require('../util/hmac.js')

const router = express.Router()

//处理注册
router.post("/register",(req,res)=>{
	const {username,password} = req.body
	const result = {
		status:0,//成功
		message:''
	}
	//1.检查是否已经注册过
	UserModel.findOne({username})
	.then(user=>{
		if(user){//用户已存在
			result.status = 10
			result.message = '用户已存在'
			res.json(result)
		}else{
			//插入新用户
			UserModel.insertMany({
				username,
				password:hmac(password),//对密码进行加密处理
				// isAdmin:true
			})
			.then(user=>{
				// result.data = user//如果注册后直接跳转到已登录的面板，就把user返回
				res.json(result)
			})
			.catch(err=>{
				// 这里的err是插入失败发生的错误
				throw err
			})
		}
	})
	.catch(err=>{//这里的err是查询过程中发生的错误，比较少见
		result.status = 10
		result.message = '服务器端错误,请稍后再试一试'
		res.json(result)		
	})
})
//处理登录
router.post("/login",(req,res)=>{
	const {username,password} = req.body
	const result = {
		status:0,//成功
		message:''
	}
	// 因为密码存入数据库时是密文，所以查询也需要用密文，密码不能显示：-password
	UserModel.findOne({username,password:hmac(password)},'-password -__v')
	.then(user=>{
		if(user){//登录成功
			result.data = user
			// 第一次登录成功会创建cookie，把用户信息保存在cookie中
			
			//创建cookie，req.cookies.set(name,[value])第二个参数是字符串。键名：userInfo，值：JSON.stringify(user)
			//req.cookies.set('userInfo',JSON.stringify(user))

			// 用户登录成功后，添加session
			req.session.userInfo = user
			res.json(result) 
		}else{
			result.status = 10
			result.message = '用户名和密码不正确'
			res.json(result)
		}
	})
	.catch(err=>{//不是查询不到时的err
		result.status = 10
		result.message = '服务器端错误,请稍后再试一试'
		res.json(result)		
	})
})

//退出处理
router.get('/logout',(req,res)=>{
	const result = {
		status:0,//成功
		message:''
	}	
	//req.cookies.set('userInfo',null);//清除cookie

	req.session.destroy()//销毁session
	res.json(result)
})

module.exports = router