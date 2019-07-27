// 引入服务器模块
const http = require('http');
// 引入读取模块
const fs = require('fs');
// 引入模块
const template = require('art-template');
// 搭建服务器
const server = http.createServer();
// 绑定ip和端口
server.listen(8080, () => {
    console.log('http://127.0.0.1:8080')
})
// 注册请求事件
server.on('request', (req, res) => {
    // 先把所有的静态资源都读取 并且读取完成之后 响应回去
    if (req.url.startsWith('/assets') || req.url.startsWith('/views')) {
        // 又因为有黄色警告 所以我们要自己设定一个响应头给css
        if (req.url.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css');
        }
        // 那就是页面和js css 图片 
        fs.readFile('.' + req.url, (err, data) => {
            if (err) console.log(err); //不是很严谨的话 就没必要throw 了 因为会一但报错 那么服务器下面的代码就不会执行 导致服务器崩了
            res.end(data);
        })
    } else {
        // 处理ajax请求
        // 约定好，前端发过来的请求 如果是 /getAllHero 就返回所有的英雄数据
        if (req.url === '/getAllHero') {
            fs.readFile('./data/getAllHero.json', (err, data) => {
                // let str = template('tp',data);
                res.end(data);
            })
        }
    }
})
