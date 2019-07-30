const express = require('express');
const app = express();
const router = require('./router');
app.listen(8888,()=>{
    console.log('http://127.0.0.1:8888');
})

// 处理静态元素
app.use('/assets',express.static('assets'));

// 首页要用到模版引擎 设置模版引擎为ejs
app.set('view engine','ejs');

app.use(router);