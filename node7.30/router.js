const controller = require('./controller')
const express = require('express');
// 调用方法 创建路由对象
const router = express.Router(); //创建路由的方法 首写字母大写
    // 约定好一个地址 当http://127.0.0.1:8888/index 的时候 就访问到了
    router.get('/index', (req, res) => {
        controller.getIndexHtml(req, res);
    })

module.exports = router;