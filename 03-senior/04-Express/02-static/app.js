const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('blog-static'));
// app.use('/static',express.static('blog-static'));
//两种都能用，但是第一种比较好用

app.get('/', (req, res) => res.send('<h1>Hello World!</h1>'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));



