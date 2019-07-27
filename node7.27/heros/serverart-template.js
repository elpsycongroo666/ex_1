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
    }else{
        // 判断请求的url是否是一个指定的主页请求，我们约定好url==='/views/index.html'
        if(req.url === '/views/index.html'){
            // 如果是这个的话 那么我们就读取json文件，转换为数组
            fs.readFile(__dirname + '/data/getAllHero.json',(err,data)=>{
                if(err) console.log(err);
                // console.log(data);
                // 转成数组
                let arr = JSON.parse(data);
                // 因为我们要在服务器就加载这个页面 所以 我们 要用 art-template  先引入模块 
                // 引入模块之后 有前辈写好的方法 就是template(网页路径,对象)
                let html = template(__dirname + '/views/index.html',{arr})
                // 把art-template生成的结构返回给浏览器
                res.end(html);
            })
        }
    }
    
})
