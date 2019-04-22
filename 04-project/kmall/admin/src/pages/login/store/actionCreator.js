import * as types from './actionTypes.js'
import { message } from 'antd';

import { request,setUserName } from 'util'
import { ADMIN_LOGIN } from 'api'


//因为这两个action是在内部使用，所以不用导出去

//发送ajax请求之前派发action，设置isFetching:true
const getLoginRequestAction = ()=>{
	return {
		type:types.LOGIN_REQUEST
	}
}
//发送ajax请求之后派发action，设置isFetching:false
const getLoginDoneAction = ()=>{
	return {
		type:types.LOGIN_DONE
	}
}

export const getLoginAction = (values)=>{
	return (dispatch)=>{
		//1.让登录按钮处于加载状态
		//1.1 其实就是需要改变state.login.isFetching 为 true
		//1.2 方法就是派发action
		//1.3 dispatch把action派发到store
		//1.4 store再把action转交个reducer
		//1.5 相当于程序流程走到./reducer.js
		dispatch(getLoginRequestAction());
        //把发送ajax封装成一个函数
        request({
                method:'post',

                //这里的url其实就是一个接口，一个API。什么是api?
                //把所有的接口放到一个文件中，便于维护
                url:ADMIN_LOGIN,
                data:values
        })
        .then(result=>{
            if(result.code == 0){//登录成功
                //把用户名保存到本地
                setUserName(result.data.username)
                //跳转到后台首页
                 window.location.href = "/"
            }else if(result.code == 1){
                //登录失败
                message.error(result.message)
            }                       
        })
        .catch(err=>{
            //发送ajax失败
            console.log(err);
            message.error('网络请求失败,请稍后再试')
        })
        .finally(()=>{
            //2.让登录按钮处于活动状态
            dispatch(getLoginDoneAction())
        })                		
	}
}


