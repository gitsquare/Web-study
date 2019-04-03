const express = require('express')

const router = express.Router()

router.get('/',(req,res)=>{
	res.end('get blog response data...')
});

router.post('/', (req, res) => {
	res.send('post blog response data...')
})

router.put('/', (req, res) => {
	res.send('put blog response data...')
})
router.delete('/', (req, res) => {
	res.send('delete blog response data...')
})


module.exports = router;