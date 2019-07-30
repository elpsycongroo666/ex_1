const express = require('express');
const app = express();
const fs = require('fs');

app.listen(8888,()=>{
    console.log('http://127.0.0.1:8888');
})

// 因为首页有静态资源 先处理静态资源
app.use('/assets',express.static('assets'));

// 主页需要引擎渲染，
app.set('view engine','ejs');

// 约定好请求地址
app.get('/index',(req,res)=>{
    // 还要先处理静态资源
    fs.readFile('./data/heros.json','utf-8',(err,data)=>{
        if(err) console.log(err);
        // 将这个json格式的 转成 数组
        let arr = JSON.parse(data);
        // 直接使用 express 里面提供的渲染模板的方法渲染数据
        res.render('index',{ arr });
    })
})