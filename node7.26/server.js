// 搭建服务器第一步 先引入http模块
// const http = require('http');
// // 创建服务器
// const server = http.createServer();
// // 给服务器绑定ip和端口
// server.listen(8888,'127.0.0.1',()=>{
//     console.log('http://127.0.0.1:8888');
// })
// // 告诉服务器，要接受用户发送过来的请求
// // 给server注册一个浏览器请求服务器事件
// // server.on(事件类型，回调函数)
// // 事件类型千万不要写错
// server.on('request',(req,res)=>{
//     // req 是 request的缩写，是一个请求对象，里面有请求的所有的信息
//     // res 是 response的缩写，是一个响应对象，里面有响应的所有的信息
//     console.log('有请求进来了');

//     // 设置响应头可以解决中文乱码的问题，但是一定要在返回之前设定
//     res.setHeader('Content-Type','text/html;charset=utf-8');

//     // 我们要给浏览器返回一点数据
//     // res.end(字符串);
//     res.end('123');
// })



// 搭建服务器第一步 先引入模块
// const http = require('http');
// // 创建服务器
// const server = http.createServer();
// // 给服务器绑定ip和端口
// server.listen(8888,'127.0.0.1',()=>{
//     console.log('启动了');
// })
// // 告诉服务器，要接受用户发送过来的请求
// // 给server注册一个浏览器请求服务器事件
// // server.on(事件类型,回调函数)
// // 事件类型千万不要写错
// server.on('request',(req,res)=>{
//     console.log('有请求进来了');

//     // 设定响应头可以解决中文乱码的问题，但是一定要在返回之前设定
//     res.setHeader('Content-Type','text/html;charset=utf-8');

//     res.end('响应内容');
// })


// 第一步先引入模块化
// const http = require('http');
// // 第二步创建服务器
// const server = http.createServer();
// // 绑定ip和端口
// server.listen(8888,'10.254.8.35',()=>{
//     console.log('服务器启动了，要访问就通过 http://10.254.8.35:8888 访问');
// })
// // 告诉服务器，要接受用户发过来的请求
// server.on('request',(req,res)=>{
//     // req 请求
//     // res 响应
//     console.log('有请求进来了');
    
//     // 设定响应头可以解决中文乱码的问题，但是一定要在返回之前设定
//     res.setHeader('Content-Type','text/html;charset=utf-8');

//     // 我们要给浏览器返回一定的数据
//     res.end('返回数据');
// })

// const http = require('http');
// // 创建服务器
// const server = http.createServer();
// // ip端口
// server.listen(8080,'127.0.0.1',()=>{
//         console.log('启动成功');
// })

// // 注册请求事件
// server.on('request',(req,res)=>{
//     // // 设置响应头可以解决中文乱码问题
//     // console.log('有人访问了');
//     res.setHeader('Content-Type','text/html;charset=utf-8');
//     if(req.url === '/index.html'){
//         res.end(`<h1>首页<h1>`);
//     }else if(req.url === '/list.html'){
//         res.setHeader('Content-Type','text/html;charset=utf-8');
//         res.end(`<ul>
//         <li>1</li>
//         <li>1</li>
//         <li>1</li>
//         </ul>`)
//     }else if(req.url === '/detail.html'){
//         res.end(`<h1>详情页</h1>`);
//     }else{
//         // 响应结果
//     // res.end('狗狗狗狗狗');
//     res.end('404');
//     }
    
    
// })



const hp = require('http');
// 创建一个服务器
const server = hp.createServer();
// 设置ip地址
server.listen(8888,'127.0.0.1',()=>{
        console.log('开启');
})

server.on('request',(req,res)=>{
    res.setHeader('Content-Type','text/html;charset=utf-8');
    if(req.url === '/index.html'){
        res.end('首页')
    }else if(req.url === '/list.html'){
        res.end('列表')
    }else if(req.url === '/detail.html'){
        res.end('详情')
    }else{
        res.end('404');
    }
})