const express = require('express')
const swig = require('swig')
const app = express();
const port = 3000

//开发阶段设置不走缓存,上线阶段把值变为true
swig.setDefaults({
  cache: false
})

//配置应用模板：第一个参数是模板名称,同时也是模板文件的扩展名。第二个参数是解析模板的方法
app.engine('html', swig.renderFile);
//配置模板的存放目录：第一个参数必须是views。第二个参数是模板存放的目录
app.set('views', './views')
//注册模板引擎：第一个参数必须是view engine。第二个参数是模板名称,也就是app.engine的第一个参数
app.set('view engine', 'html')

app.get("/test",(req,res)=>{
    //渲染模板：第一个参数是相对于模板目录的文件。第二个参数是传递给模板的数据
    res.render('test',{
        title:'跨猪网',
        content:'我是内容',
        obj:{
            name:"Tom",
            age:18
        },
        name:"Peter",
        arr:["Apple","Orange","Banana"]
    })  
})
app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/list',(req,res)=>{
    res.render('list')
})
app.listen(port, () => console.log(`app listening on port ${port}!`))


