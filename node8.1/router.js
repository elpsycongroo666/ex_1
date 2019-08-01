const express = require('express');
const router = express.Router();
const controller = require('./controller');

// 约定好获取英雄界面的请求 /index
router.get('/index',(req,res)=>{
    controller.getIndex(req,res);
})

// 约定好添加界面的请求 /add
router.get('/add',(req,res)=>{
    controller.getAdd(req,res);
})

// 约定好获取编辑页面的请求 /edit
router.get('/edit',(req,res)=>{
    controller.getEdit(req,res);
})

// 约定好删除请求 /deleteHeroById
router.get('/deleteHeroById',(req,res)=>{
    controller.deleteHeroById(req,res);
})

// 处理新增请求
router.post('/addNewHero',(req,res)=>{
    controller.addNewHero(req,res);
})

// 处理编辑请求
router.post('/editHeroById',(req,res)=>{
    controller.editHeroById(req,res);
})
module.exports = router;