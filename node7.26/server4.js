const http = require('http');
const fs = require('fs');
const server = http.createServer();
server.listen(8080, () => {
    console.log('开启成功 http://127.0.0.1:8080 ')
})

server.on('request', (req, res) => {
    // 所有的静态资源都放在一些固定的目录下 views里面放页面， assets里面就 放图片，css js之类的
    // 判断判断 url是否以这两个文件夹开头,就知道是否请求静态资源
    // 判断是否以某个字符开头 indexOf === 0   或者 startsWith
    if (req.url.startsWith('/assets') || req.url.startsWith('/views')) {no
        // 读取静态文件
        fs.readFile('.' + req.url, (err, data) => {
            if (err) throw err;
            res.end(data);
        })
        // 如果请求css文件，必然是以css结尾， endsWith - 判断某个字符串是否以 什么结尾
        if (req.url.endsWith('.css')) {
            // 加一个响应头 不加的话 会有个黄色警告
            res.setHeader('Content-Type', 'text/css');
        }
    }

})