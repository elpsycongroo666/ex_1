const http = require('http');
const fs = require('fs');
const server = http.createServer();

server.listen(8080, '127.0.0.1', () => {
    console.log('服务器启动成功 http://127.0.0.1:8080')
})

server.on('request', (req, res) => {
    if (req.url.startsWith('/views') || req.url.startsWith('/assets')) {
        // 如果是css文件 那么就会是以.css结尾 为什么要找到这个css  因为我们需要将黄色警告去除 那就要跟服务器的响应头说 这个是css文件 
        // 要找到这个css文件 那么就通过 endsWith()就可以了
        if (req.url.endsWith('.css')) {
            // 设置响应头
            res.setHeader('Content-Type', 'text/css');
        }
        // 所有静态文件都要读取
        fs.readFile('.' + req.url, (err, data) => {
            if (err) throw err;
            res.end(data);
        })
    }
    
})