const express = require('express');
const app = express();
const router = require('./router');
const bodyParser = require('body-parser');
app.listen(8888, () => {
    console.log('http://127.0.0.1:8888');
})

// 处理静态资源
app.use('/assets', express.static('assets'));

// 因为首页要用到ejs渲染页面 所以先下载 设置服务器的渲染方式为ejs的
app.set('view engine', 'ejs');
/*
    bodyParser 是一个对象
    该对象有一个方法 : urlencoded - 表示要解析url编码 -- key=value&key=value 的格式就叫url编码格式
    extend - 依赖于插件
        以前body-parser是需要依赖于之前使用过的 queryString 来实现
        以前queryString还不是核心模块，后来随着nodejs的发展，queryString 被吸收了 ，变成了核心模块，就不需要依赖于以前的插件了
*/
app.use(bodyParser.urlencoded({ extended: false }));

// 处理首页的请求 约定好 如何访问首页
// 引用router中间件
// 这个中间件写在最后
app.use(router);
