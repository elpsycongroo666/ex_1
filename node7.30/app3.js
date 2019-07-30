const express = require('express');
const app = express();
const fs = require('fs');
app.listen(8888,()=>{
    console.log('http://127.0.0.1:8888');
})

// 处理静态资源
app.use('/assets',express.static('assets'));

// 因为首页要用到模版引擎
app.set('view engine','ejs');

//约定好访问的地址
app.get('/index',(req,res)=>{
    // 要读取数据
    fs.readFile('./data/heros.json','utf-8',(err,data)=>{
        if(err)console.log(err);
        let arr = JSON.parse(data);
        // 直接使用模板引擎
        res.render('index',{ arr });
    })
})