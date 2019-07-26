// 先引入模块
const http = require('http');
// 读取文件的模块
const fs = require('fs');
// 创建服务器
const server = http.createServer();
// 绑定ip和端口
server.listen(8080,()=>{
    console.log('服务器启动成功 http://127.0.0.1:8080');
})
// 注册请求事件
server.on('request',(req,res)=>{
    // console.log(res.url);
    if(req.url === '/index.html'){
        // 先引入一个读取文件模块
        fs.readFile('./views/index.html',(err,data)=>{
            if(err) throw err;
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
    }else if(req.url === '/assets/css/list.css'){
        fs.readFile('./assets/css/list.css',(err,data)=>{
            if(err) throw err;
            res.end(data);
        })
    }else if(req.url === '/assets/images/1.jpg'){
        fs.readFile('./assets/images/1.jpg',(err,data)=>{
            if(err) throw err;
            res.end(data);
        })
    }else if(req.url === '/assets/js/list.js'){
        fs.readFile('./assets/js/list.js/',(err,data)=>{
            if(err) throw err;
            res.end(data);
        })
    }else{
        res.end('404');
    }
})