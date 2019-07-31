const express = require('express');
// 引入express 模块 然后创建router对象
const router = express.Router();
// 引入contorller
const controller = require('./controller');


// 监听index页面的请求
router.get('/index',(req,res)=>{
    controller.getIndexHtml(req,res);
})
// 监听删除请求
router.get('/heroRemove',(req,res)=>{
    controller.heroRemove(req,res);
})
// 获取add页面的请求
router.get('/add',(req,res)=>{
    controller.getAdd(req,res);
})
// add页面的新增功能 监听
router.post('/addNewHero',(req,res)=>{
    controller.addNewHero(req,res);
})
// 使router在其他js中也可以访问 暴露router
module.exports = router;