const express = require('express');
const router = express.Router();
const controller = require('./03-controller');

router.get('/index',(req,res)=>{
  controller.getIndex(req,res);
})
// 约定/add 返回添加界面
router.get('/add',(req,res)=>{
  controller.getAddHtml(req,res);
})

// 约定以  /edit  返回编辑页面
router.get('/edit',(req,res)=>{
  controller.getEdit(req,res);
})

router.get('/edit2',(req,res)=>{
  controller.getEdit2(req,res);
})

// 给前端一个根据id获取原来的数据的接口
router.get('/getHeroById',(req,res)=>{
  controller.getHeroById(req,res);
});


// 此时需要一个可以让前端修改英雄的接口
router.post('/editHeroById',(req,res)=>{
  controller.editHeroById(req,res);
})

// 约定好一个添加请求
router.post('/addNewHero',(req,res)=>{
  controller.addNewHero(req,res);
})

// 约定好删除的请求
router.get('/deleteHeroById',(req,res)=>{
  controller.deleteHeroById(req,res);
})


module.exports = router;