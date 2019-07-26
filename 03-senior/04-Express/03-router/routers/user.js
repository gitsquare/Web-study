const express = require('express')
// 1.用express.Router实例化一个router对象
const router = express.Router()
// 2.使用router.METHOD(PATH, HANDLER)来处理路由
router.get('/',(req,res)=>{
	res.end('get user response data...')
});
router.post('/', (req, res) => {
	res.send('post user response data...')
})
router.put('/', (req, res) => {
	res.send('put user response data...')
})
router.delete('/', (req, res) => {
	res.send('delete user response data...')
})
// 3.导出router对象
module.exports = router












