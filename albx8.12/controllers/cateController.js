// 实现所有与分类数据相关的业务处理
const catemodel = require('../models/catemodel.js');
// 获取所有分类数据
function getAllCate(req, res) {
    catemodel.getAllCate((err, data) => {
        if (err) {
            res.json({ code: 400, msg: '数据查询失败' })
        } else {
            res.json({
                code: 200,
                data,
                msg: '数据获取成功'
            })
        }
    })
}

// 修改分类
function cateEdit(req, res) {
    let obj = req.body
    console.log(obj);
    catemodel.cateEdit(obj, (err) => {
        if (err) {
            res.json({
                code : 400,
                msg : '分类编辑失败'
            })
        }else{
            res.json({
                code :200,
                msg : '分类编辑成功'
            })
        }
    })
}

function addNewCate(req, res) {
    let obj = req.body;
    // console.log(obj);
    catemodel.addNewCate(obj, (err) => {
        if (err) {
            res.json({
                code: 400,
                msg: '新增数据失败'
            })
        } else {
            res.json({
                code: 200,
                msg: '新增数据成功'
            })
        }
    })
}

function deleteCateById(req,res){
    let id = req.query.id
    console.log(id);
    catemodel.deleteCateById(id,(err)=>{
        if(err){
            res.json({
                code : 400,
                msg : '删除失败'
            })
        }else{
            res.json({
                code :200,
                msg :'删除成功'
            })
        }
    })
}

// 批量删除
function deleteCate(req,res){
    // 传递id 删除对应数据
    let obj = req.query;
    catemodel.deleteCate(obj,(err)=>{
        if(err){
            res.json({
                code : 400,
                msg : '删除失败'
            })
        }else{
            res.json({
                code : 200,
                msg : '删除成功'
            })
        }
    })
}
module.exports = {
    getAllCate, cateEdit, addNewCate,deleteCateById,deleteCate
}