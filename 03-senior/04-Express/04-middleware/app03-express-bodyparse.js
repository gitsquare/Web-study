const querystring = require('querystring')

const express = require('express');
const bodyParser = require('body-parser')

const app = express();

const port = 3000

app.use(express.static('public'))

/*
app.post('/', (req, res) => {
	let body = ''
	req.on('data',(chunk)=>{
		body += chunk
	})
	req.on('end',()=>{
		// console.log(body)
		console.log(querystring.parse(body))

		res.json({status:0})
	})
})
*/
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/', (req, res) => {
	console.log(req.body);
	res.json({status:0})
})





app.listen(port, () => console.log(`app listening on port ${port}!`))