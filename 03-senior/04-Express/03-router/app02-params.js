const express = require('express');

const app = express();

const port = 3000

app.use(express.static('public'))

// get/delete的参数接收是一样的
//方法1:Route parameters，PATH： /users/:userId/books/:bookId
/*app.get('/users/:userId/books/:bookId', (req, res) => {
	// req.params是一个对象，会接收到参数
	console.log(req.params);//{ userId: '123', bookId: '888' }
	res.send('get response data...')
})*/

// 方法2:req.query，PATH： /
app.get('/',(req,res)=>{
	console.log(req.query);//{ userId: '123', bookId: '888' }
	res.send('get response data...')
});


app.post('/', (req, res) => res.send('post response data...'))
app.put('/', (req, res) => res.send('put response data...'))
app.delete('/', (req, res) => res.send('delete response data...'))

app.listen(port, () => console.log(`app listening on port ${port}!`))