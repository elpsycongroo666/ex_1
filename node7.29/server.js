const http = require('http');
const fs = require('fs');
const queryString = require('querystring');
const server = http.createServer();
server.listen(8888, () => {
    console.log('http://127.0.0.1:8888')
})
server.on('request', (req, res) => {
    // 先处理静态资源
    if (req.url.startsWith('/assets')) {
        // 处理黄色警告
        if (req.url.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css;charset=utf-8');
        }
        // 先读取出来 
        fs.readFile(__dirname + req.url, (err, data) => {
            if (err) console.log(err);
            res.end(data);
        })
    } else {
        // 当请求页面的时候 先加载出来
        if (req.url === '/views/add.html') {
            // 读取页面数据
            fs.readFile(__dirname + req.url, (err, data) => {
                if (err) console.log(err);
                res.end(data);
            })
        } else
            // 处理ajax请求
            if (req.url === '/addNewHero' && req.method === 'POST') {
                // 处理post请求
                /* 
                    get和post的区别
                    get
                        - 数据是在url的后面的
                        - 携带的数据量是优先的
                    post
                        - 数据是在请求体里面的
                        - 理论上携带的数据量是无限的

                处理post的数据，数据线给req对象注册一个正在接收数据事件 - 因为post携带的数量可能比较大，所以需要一块一块的进行接收
                */
                let data = '';
                req.on('data', (chunck) => {   //chunck - 块
                    // 把每次接收到的数据，合并到一起
                    data += chunck;
                });
                // 在接收完毕的事件里面处理数据
                req.on('end', () => {
                    // console.log(data);
                    // 得到的是一个url编码的格式 需要解析成对象 img=..%2Fassets%2Fimage%2F0.jpg&name=jack&gender=%E7%94%B7
                    // 找一个 queryString 的核心模块
                    data = queryString.parse(data);
                    // 现将旧数据读取出来
                    fs.readFile(__dirname + '/data/heros.json', 'utf-8', (err, jsonData) => {
                        if (err) console.log(err);
                        let arr = JSON.parse(jsonData);
                        let id = 0;
                        arr.forEach(e => {
                            if (e.id > id) {
                                id = e.id;
                            }
                        });
                        // 给新数据新增一个id 属性 并且 是唯一的
                        data.id = id + 1;
                        // 将新数据添加回数组
                        arr.push(data);
                        // 转换成json
                        let jsonStr = JSON.stringify(arr);
                        // 写回数据库
                        fs.writeFile(__dirname + '/data/heros.json',jsonStr,'utf-8',(err) => {
                            if (err) {
                                console.log(err)
                            } else {
                                let result = JSON.stringify({ code: 200, msg: '新增成功' })
                                res.end(result);
                            }
                        })
                    })
                })

            }
    }
})

