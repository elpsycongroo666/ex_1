const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');
const session = require('express-session');
// 创建服务器
const app = express();
// 监听端口
app.listen(8888, () => {
    console.log('http://127.0.0.1:8888');
})
// 处理静态资源
app.use('/assets', express.static('assets'));
app.use('/uploads', express.static('uploads'));

// 配置body-parser
// 处理post方式的请求
// extended : false :将参数字符串转换成对象
app.use(bodyParser.urlencoded({ extended: false }));
// 后期可能会接受到json格式字符串
app.use(bodyParser.json());
// 注册session中间件
app.use(session(
    {
        // 加盐
        secret: 'my_albx_35',//相当于一个加密密钥，值可以是任意字符串
        resave: false,//强制session保存到session store中,不管Session有没有更新，都强制保存
        saveUninitialiazed: false //强制没有‘初始化’的session保存到storage中
    }
))

app.use(function(req,res,next){
    // 三种场合不用登录
    // 1.登录页面
    // 2.前面三个页面不用等登录
    // 3.有登录状态
    if(req.session.isLogin && req.session.isLogin == 'true' || req.url == '/admin/login' || req.url.indexOf('/admin') == -1){
        next();
    }else{
        // res.redirect() 实现重定向
        res.redirect('/admin/login');
    }
})
// 设值渲染引擎
app.set('view engine', 'ejs');
// app.set('views', __dirname + '/views')

// 注册router中间件
app.use(router);