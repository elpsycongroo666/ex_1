const express = require("express");
const app = express();
const router = require('./router2.js');
const bodyParser = require('body-parser');
app.listen(8888,()=>{
    console.log('http://127.0.0.1:8888');
})

// 处理静态资源
app.use('/assets',express.static('assets'));

// 设置渲染引擎模式
app.set('view engine','ejs');

// 注册body-parser中间件 - 这个中间件的作用，就是解析post请求的数据
// app.use(bodyParser.urlencoded({ extended : false}));
/*
    bodyParser 是一个对象
    该对象有一个方法 : urlencoded - 表示要解析url编码 -- key=value&key=value 的格式就叫url编码格式
    extend - 依赖于插件
        以前body-parser是需要依赖于之前使用过的 queryString 来实现
        以前queryString还不是核心模块，后来随着nodejs的发展，queryString 被吸收了 ，变成了核心模块，就不需要依赖于以前的插件了
*/
app.use(bodyParser.urlencoded({ extended : false}));

// 这个一般都是在最后面
app.use(router);


