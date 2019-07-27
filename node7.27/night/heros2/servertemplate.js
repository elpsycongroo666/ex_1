// 引入服务器模块
const http = require('http');
// 引入读取文件模块
const fs = require('fs');
const template = require('art-template');
// 创建服务器
const server = http.createServer();
// 绑定ip和端口
server.listen(8888, () => {
    console.log('启动成功 ,http://127.0.0.1:8888');
})
// 给服务器注册请求事件
server.on('request', (req, res) => {
    // 当请的时候 我们要先把静态资源加载 约定好要放在某个文件夹下面
    // 现在开始  views里面的html文件，就不再是静态资源，而是art-template的模板代码 因为我们为了减少一次ajax请求数据 减少服务器的压力 但是别以为这样只会 ajax就没用了 因为我们还有提交 等等需要用到
    if (req.url.startsWith('/assets')) {
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
        // 先约定好一个url地址 '/views/index.html'
        if(req.url === '/views/index.html'){
            // 当访问这个地址的时候，我们就要将json数据读取出来 之后添加的到页面中
            // 这里要用绝对路径 所以我么用 __dirname - 指的是 当前路径 长这样 
            // console.log(__dirname); //F:\lianxi\node\7.27\night\heros
            fs.readFile(__dirname + '/data/herodata.json','utf-8',(err,data)=>{
                // 读取出错的话 就 提示出错信息err
                if(err) console.log(err);
                // 因为们是要减少一次 ajax请求 所以 在第一次请求页面的时候 就将数据返回回去了 减少服务器的负担
                // 所以我们要用到art-template 那就先要引入模块
                // 又因为我们template的参数 是 (模板路径,数据对象) 然后我们的数据是json格式的 所以我们要先将json转成 数组
                let arr = JSON.parse(data);
                // console.log(arr);
                let html = template(__dirname + '/views/index.html',{arr})
                // console.log(html); //返回一个index.html页面
                // 然后将这个数据 返回给 请求的人
                res.end(html);
            })
        }
    }
})