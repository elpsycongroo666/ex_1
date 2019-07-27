// 引入服务器模块
const http = require('http');
// 引入读取文件模块
const fs = require('fs');
// 创建服务器
const server = http.createServer();
// 绑定ip和端口
server.listen(8888, () => {
    console.log('启动成功 ,http://127.0.0.1:8888');
})
// 给服务器注册请求事件
server.on('request', (req, res) => {
    // 当请的时候 我们要先把静态资源加载 约定好要放在某个文件夹下面
    if (req.url.startsWith('/assets') || req.url.startsWith('/views')) {
        // 因为有黄色警告 所以我们需要将这个黄色警告的css
        if (req.url.endsWith('.css')) {
            // 设置一个响应头
            res.setHeader('Content-Type', 'text/css');
        }
        // 读取
        fs.readFile('.' + req.url, (err, data) => {
            if (err) console.log(err);
            res.end(data);
        })
    } else {
        // 处理ajax请求 给定一个url 如果是getAllHero 的话 那么就把所有的英雄数据 返回
        if (req.url === '/getAllHero') {
            // 先读取
            fs.readFile('./data/herodata.json', (err, data) => {
                //现在是json数据 以后有数据库之后就用数据库传回来的
                // 那就把数据响应回去
                res.end(data);
            })
        }
    }
})