// 实现所有与分类数据相关的业务处理
const catemodel = require('../models/catemodel.js');
// 获取所有分类数据
function getAllCate(req,res){
    catemodel.getAllCate((err,data)=>{
        if(err){
            res.json({code:400,msg:'数据查询失败'})
        }else{
            res.json({
                code:200,
                data,
                msg:'数据获取成功'
            })
        }
    })
}


module.exports = {
    getAllCate
}