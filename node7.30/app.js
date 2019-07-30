const express = require('express');
const fs = require('fs');
const app = express();
app.listen(8888,()=>{
    console.log('http://127.0.0.1:8888');
})
// 主页里面有静态资源 需要先处理静态资源
app.use('/assets',express.static('assets'));

// 主页需要模版引擎渲染结构，
// 设置ejs为默认的模本引擎
app.set('view engine','ejs');


// 约定好请求地址
app.get('/index.html',(req,res)=>{
    // 还要先处理静态资源
    // 使用模板引擎
    // 读取数据，把数据使用ejs渲染
    fs.readFile( __dirname + '/data/heros.json','utf-8',(err,data)=>{
        if(err) console.log(err);
        let arr = JSON.parse(data);
        // 直接使用express 里面提供的渲染模板的方法渲染数据 render(对应的ejs 文件的名字, 对象数组)
        res.render('index',{ arr });
    })
})