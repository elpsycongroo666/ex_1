// 先引入http模块
const http = require('http');
// 读取文本API
const fs = require('fs');
// 创建服务器
const server = http.createServer();
// 绑定ip和端口 默认是本地的ip可以不用写
server.listen(8888, () => {
    console.log('启动成功 http://127.0.0.1:8888 访问');
})
// 设置请求事件
server.on('request', (req, res) => {
    // console.end(res.url)
    // 被访问的时候运行
    console.log('访问成功');
    if (req.url === '/index.html') {
        fs.readFile('./views/index.html', (err, data) => {
            if (err) throw err;
            // 那就读取里面这个网页的内容 引入一个新的api fs
            res.end(data);
        })
    }else if(req.url === '/list.html'){
        fs.readFile('./views/list.html',(err,data)=>{
            if(err) throw err;
            res.end(data);
        })
    }else if(req.url === '/detail.html'){
        fs.readFile('./views/detail.html',(err,data)=>{
            if(err) throw err;
            res.end(data);
        })
    }else
    // 我们发现在外部引入的css 是不能被执行的 那就证明 我们是没有读取到这个文件 在network里面的General 请求url 里面看的到 1所以 我又要重新判断一个地址 存储这个css的文件夹之下的路径
    if(req.url === '/assets/css/list.css'){
        fs.readFile('./assets/css/list.css',(err,data)=>{
            if(err) throw err;
            res.end(data);
        })
    }else if(req.url === '/assets/js/list.js'){
        fs.readFile('./assets/js/list.js',(err,data)=>{
            if(err) throw err;
            res.end(data);
        })
    }else if(req.url === '/assets/images/1.jpg'){
        fs.readFile('./assets/images/1.jpg',(err,data)=>{
            if(err) throw err;
            res.end(data);
        })
    }else{
        res.end('404');
    }
})