// 搭建服务器第一步 引入http模块
const http = require('http');
// 创建一个服务器 
// http.creatServer([options],[listener])
// 两个参数都可选，就先不管 - 一般都是用默认的就行
const server = http.createServer();
// 给服务器绑定ip和端口
// server.listen(端口,ip,回调函数)
// server.listen(8080,'127.0.0.1',()=>)
server.listen(8080, '127.0.0.1', () => {
    console.log('服务器启动了，可以通过 http://127.0.0.1:8080 访问')
})
// 告诉服务器，要接受用户发送过来的请求
// 给server注册一个浏览器请求服务器事件
// server.on(事件类型,回调函数)
// 事件类型千万不要写错
server.on('request', (req, res) => {
    // req 是 request的缩写，是一个请求对象，里面有请求的所有的信息
    // res 是 respose的缩写，是一个相应对象，里面有相应的所有的信息
    console.log('有请求进来了');

    // 设定相应头可以解决中文乱码的问题，但是一定要在返回之前设定
    res.setHeader('Content-Type', 'text/html;charset=utf-8');

    // 我们要给浏览器返回一点数据
    // res.end(字符串);
    res.end('你好-我叫李狗蛋');

})
