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
    if (req.url.startsWith('/assets')) {
        // 又因为有黄色警告 所以我们要自己设定一个响应头给css
        if (req.url.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css');
        }
        // 那就是页面和js css 图片 
        fs.readFile('.' + req.url, (err, data) => {
            if (err) console.log(err); //不是很严谨的话 就没必要throw 了 因为会一但报错 那么服务器下面的代码就不会执行 导致服务器崩了
            res.end(data);
        })
    // } else {
    //     // 处理ajax请求
    //     // 约定好，前端发过来的请求 如果是 /getAllHero 就返回所有的英雄数据
    //     if (req.url === '/getAllHero') {
    //         fs.readFile('./data/getAllHero.json', (err, data) => {
    //             // let str = template('tp',data);
    //             res.end(data);
    //         })
    //     }
    }else{ //为了能够减少服务器的负担，我们在第一次请求页面的时候 就把动态的数据 从服务器传到一个写好的html文件中
        // 约定好 req.url === '/views/index.html' 的时候返回一个template 生成页面给浏览器
        if(req.url === '/views/index.html'){
            // 读取数据
            fs.readFile(__dirname + '/data/getAllHero.json','utf-8',(err,data)=>{
                if(err) console.log(err);
                // console.log(data);//这个时候返回的是一个十六进制 要是设置编码格式 utf-8 才能转换成 json的字符串
                // 把字符串转成伪数组
                let arr = JSON.parse(data);
                // 把伪数组放到模板代码里面替换
                // 写模板代码 - views里面有一个index.html模板文件
                // 导入数据
                console.log(__dirname);
                let html = template(__dirname +'/views/index.html',{arr});
                res.end(html);
            })
        }
    }
})
