import axios from 'axios';
//是异步程序，是ajax请求的发送，会返回一个promise
//所以封装的函数应该返回一个promise
export const request = (options)=>{
	return new Promise((resolve,reject)=>{
		const params = {
        	method:options.method || 'get',	
			url:options.url || '',
			
			//在跨域发送ajax请求时，默认不会把cookie携带过去，可以设置withCredentials:true修改
			withCredentials:true
		}
	
		//如果是GET或者是DELETE方法，用params属性传参
		//如果是其他方法，用data属性传参
		//toUpperCase()方法是变为大写
		switch(params.method.toUpperCase()){
			case 'GET':
			case 'DELETE':
				params.params = options.data
				break
			default:
			params.data = options.data
		}
		axios(params)
		.then(result=>{
			const data = result.data;
			//保证前后台用户登录信息相同
			if(data.code == 10){//没有权限
				//如果后台没有登录信息
				//移除前端的登录信息
				removeUserName();
				//跳转到登录页面
				window.location.href = '/login'
				reject('没有权限')
			}else{
				resolve(result.data);
			}
		})
		.catch(err=>{
			console.log('lal')
			reject(err)
		})
	})
}

export const setUserName = (username)=>{
	window.localStorage.setItem('username',username)
}
export const getUserName = ()=>{
	return window.localStorage.getItem('username')
}
export const removeUserName = ()=>{
	window.localStorage.removeItem('username')
}