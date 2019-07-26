const express = require('express');
// const userRouter = require('./routers/user.js')
// const blogRouter = require('./routers/blog.js')

const app = express();

const port = 3000

app.use(express.static('public'))

// 用app.use(PATH,router对象)来使用导出的router对象
// app.use('/user',userRouter)
// app.use('/blog',blogRouter)
app.use('/user',require('./routers/user.js'))
app.use('/blog',require('./routers/blog.js'))

app.listen(port, () => console.log(`app listening on port ${port}!`))



