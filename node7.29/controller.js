const template = require('art-template');
const queryString = require('querystring');
const fs = require('fs');
const model = require('./model');
let controller = {
    // 处理所有静态资源的方法
    staticResource(req, res) {
        // 处理css黄色警告
        if (req.url.endsWith('.css')) {
            // 设置一个响应头
            res.setHeader('Content-Type', 'text/css;charset=utf-8');
        }
        // 读取
        fs.readFile(__dirname + req.url, (err, data) => {
            if (err) console.log(err);
            res.end(data);
        })
    },
    // 处理主页的方法
    getIndexHtml(req, res) {
        // fs.readFile('./data/heros.json', 'utf-8', (err, data) => {
        //     if (err) console.log(err);
        //     let arr = JSON.parse(data);
        //     let html = template(__dirname + '/views/index.html', { arr });
        //     res.end(html);
        // })
        model.getAllHero(function(arr){
            let html = template( __dirname + '/views/index.html',{ arr });
            res.end(html);
        });
    },
    // 处理添加页面的方法
    getAddHtml(req, res) {
        fs.readFile(__dirname + req.url, (err, data) => {
            if (err) console.log(err);
            res.end(data);
        })
    },
    // 处理新增的请求
    addNewHero(req, res) {
        // post请求就是将数据 一块一块的传递过去 要先注册一个正在接收事件
        // 把接收到的数据 一块一块的加起来
        let data = '';
        req.on('data', (chunck) => {
            data += chunck;
        })
        // 在注册一个 接收完成事件
        req.on('end', () => {
            // 接收完成之后 ，得到的是一个url编码的格式 需要解析成对象
            // 找一个 queryString 的核心模块
            data = queryString.parse(data);
            // 跟以前一样 先将数据读取出来 转成数组
            model.getAllHero((arr)=>{
                // 得到最大id
                model.getMaxId((maxId)=>{
                    data.id = maxId + 1;
                    // 把旧数据合并，写入数组
                    arr.push(data);
                    // 调用model的写入方法
                    model.writeFile(arr);
                    let result = {code : 200, msg : '成功'};
                    res.end(JSON.stringify(result));
                })
            })
        })
    }
}

module.exports = controller;