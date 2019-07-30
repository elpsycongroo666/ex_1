// 引入express模块
const express = require('express');
const controller = require('./controller2');
// 调用方法 注册 router模块
const router = express.Router();
// 监听一个加载index页面请求
router.get('/index', (req, res) => {
    controller.getIndexHtml(req,res);
})
// 监听一个删除请求
router.get('/deleteHeroById',(req,res)=>{
    controller.deleteHeroById(req,res);
    // console.log('router');
})
// 监听一个add页面的请求
router.get('/add',(req,res)=>{
    controller.getAdd(req,res);
})
// 处理添加英雄请求
router.post('/addNewHero',(req,res)=>{
    controller.addNewHero(req,res);
})
module.exports = router;