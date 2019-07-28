// 搭建服务器 第一步 先引入http模块
const http = require('http');
// 创建服务器
const server = http.createServer();
// 引入文件模块
const fs = require('fs');
// 引入模版引擎模块
const template = require('art-template');
// 引入url模块
const url = require('url');
// 为服务器设置ip和端口
server.listen(8888, () => {
    console.log('服务器启动成功 http://127.0.0.1:8888')
})
// 为服务器设置一个请求事件
server.on('request', (req, res) => {

    // 先将静态资源加载 约定好在指定的文件夹下面 因为 req.url是通过路径来获取的 所以我们要把指定路径下的静态文件先获取到
    // nodejs中 有方法可以直接判断 最前面 和最后面 startsWith() endsWith()
    if (req.url.startsWith('/assets')) {
        // 又因为有黄色警告 所以 我们要处理这个css的响应头
        if (req.url.endsWith('.css')) {
            // 既然是css 那就是.css结尾
            res.setHeader('Content-Type', 'text/css');
        }
        // 那就读取文件 读取文件 需要用到fs模块 引入fs模块
        fs.readFile(__dirname + req.url, (err, data) => {
            if (err) console.log(err);
            res.end(data);
        })
    } else {
        // 使用url模块
        let result = url.parse(req.url,true);
        if (req.url === '/views/index.html') {
            // 如果输入的是这个地址 那么 我们要返回这个页面  为了少一次ajax请求 减少服务器负担 所以我们要引入 template模块 来处理
            // 加载这个页面，我们就需要 先获取数据 数据 从数据库来 或者我们先自己写一个json格式的数据
            // 要使用到路径的 不说了 直接给绝对路径
            fs.readFile(__dirname + '/data/herodata.json','utf-8',(err,data)=>{
                if(err)console.log(err);
                // 使用template 模板  会返回一个页面结构 我们相应的时候 就直接返回就行了
                // template('要加载页面的绝对的路径'‘数据对象’)
                // template 要用的数据是
                let arr = JSON.parse(data);
                let html = template(__dirname + '/views/index.html',{arr})
                // 在页面中生成
                res.end(html);
            })
        }else 
        // 处理add页面 因为我们一开始没有数据 所以就不用 引入template来做了
        if(req.url === '/views/add.html'){
            // 将文件读取 加载到这个地方
            fs.readFile(__dirname + '/views/add.html','utf-8',(err,data)=>{
                if(err) console.log(err);
                res.end(data);
            })
        }
        // 处理ajax请求 add页面 有一个提交请求
        // 因为我们是要通过使用get方法来提交数据 所以 我们的url地址栏 上面就会有很多的数据 所以 我们为了解决这种情况 就引入前人做好的url模块中的parse方法
        if(result.pathname === '/addHeros' && req.method === 'GET'){
                // console.log('新增英雄请求');
                // console.log(result);
                // 那么就要先把旧数据读取出来 把json数据转成 数组 然后 把新数据 添加进这个数组里面 
                fs.readFile(__dirname + '/data/herodata.json','utf-8',(err,data)=>{
                    if(err)console.log(err);
                    let arr = JSON.parse(data);
                    // 将新数据传进去
                    // 因为我们没id 又为了id 的唯一性 我们要先把之前的数据 都先遍历 出来 选中最大的那个 然后 +1 赋值给选择的数据
                    let id = 0;
                    arr.forEach(e => {
                        if(e.id > id){
                            id = e.id;
                        }
                    });
                    result.query.id = id + 1;
                    arr.push(result.query);
                    // 然后转成json 写入文件中
                    let josnStr = JSON.stringify(arr);
                    fs.writeFile(__dirname + '/data/herodata.json',josnStr,'utf-8',(err)=>{
                        if(err)console.log(err);
                        res.end(JSON.stringify({code : 200,msg : '添加成功'}));
                    })
                })
        }
    }


})