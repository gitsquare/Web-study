const express = require('express')
const swig = require('swig')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Cookies = require('cookies');
const session = require('express-session');
const MongoStore = require("connect-mongo")(session);//把session存到数据库中

const app = express();
const port = 3000

//1.连接数据库服务
mongoose.connect('mongodb://localhost/blog', {useNewUrlParser: true});
const db = mongoose.connection;

db.on('error', (err)=>{
	console.log('connection error');
	throw err;
});

db.once('open', ()=>{
	console.log('connection successful');	
});

app.use(express.static('public'))

//开发阶段设置不走缓存
swig.setDefaults({
  cache: false
})

//配置应用模板
app.engine('html', swig.renderFile);
//配置模板的存放目录
app.set('views', './views')
//注册模板引擎
app.set('view engine', 'html')

//post/put请求处理中间件
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


/*
//设置cookie中间件
app.use((req,res,next)=>{
	//req.cookies对象用来操作cookie
	req.cookies = new Cookies(req,res)
	req.userInfo = {}
	let userInfo = req.cookies.get('userInfo');//获取保存在cookie上的用户信息
	if(userInfo){
		//如果cookie上有userInfo，那么req上就有userInfo对象，否则req.userInfo = {}
		//因为保存时是字符串，需要转为对象
		req.userInfo = JSON.parse(userInfo);
	}
	next()
})
*/

//设置session中间件
// 当用户登录成功后，添加session
app.use(session({
	//设置cookie名称
    name:'kzid',
    //用它来对session cookie签名，防止篡改
    secret:'abc',//加密
    //强制保存session，即使没有发生变化也会保存
    resave: true, 
    //强制将未初始化的session存储
    saveUninitialized: true,
    //如果为true,则每次请求都更新cookie的过期时间
    rolling:true,
    //cookie过期时间 1天
    cookie:{maxAge:1000*60*60*24}, 
    //设置session存储在数据库中，下次请求时，数据库中的数据还在，不会把用户的状态丢失掉
    store:new MongoStore({ mongooseConnection: mongoose.connection })                
}))

app.use((req,res,next)=>{
	//从session上拿到userInfo，第一次是拿不到的所以返回{}
	req.userInfo = req.session.userInfo || {};
	next()
})
app.use('/',require('./routes/index.js'))
app.use('/user',require('./routes/user.js'))
app.use('/admin',require('./routes/admin.js'))
app.use('/home',require('./routes/home.js'))
app.use('/category',require('./routes/category.js'))
app.use('/article',require('./routes/article.js'))
app.use('/comment',require('./routes/comment.js'))

app.listen(port, () => console.log(`app listening on port ${port}!`))