const postmodel = require('../models/postmodel')
const moment = require('moment');
function getAllPost(req,res){
    // 我们要获得pageSize 和 pageNum
    let obj = req.query;
    // 调用数据模块
    postmodel.getAllPost(obj,(err,data)=>{
        if(err){
            res.json({code : 400, msg : '数据查询失败'})
        }else{
            // 为了日期的格式 改为 YYYY-MM-DD HH-mm-ss的格式
            // for(let i = 0; i < result.length; i++){
            //     // moment() 如果没有传递参数，就获取当前日期，如果需要转换成指定的日期，则需要传递参数
            //     // format：进行格式化，里面进行自定义的格式化设置
            //     result[i].created = moment(result[i].created).format('YYYY-MM-DD HH-mm-ss')
            // }
            res.json({
                code : 200,
                msg : '查询数据成功',
                data : data
            })
        }
    })
}

// 处理新增请求
function addPost(req,res){
        // 通过post的方式获取数据
        let obj = req.body;
        obj.id = null;
        obj.user_id = req.session.currentUser.id;
        obj.views = 0;
        obj.likes = 0;
        console.log(obj)
        postmodel.addPost(obj,(err)=>{
            if(err){
                console.log(err);
                res.json({
                    code : 400,
                    msg : '新增文章失败'
                })
            }else{
                res.json({
                    code : 200,
                    msg : '新增文章成功'
                })
            }
        })
}


// 通过id获取数据
function getPostById(req,res){
    let id = req.query.id
    postmodel.getPostById(id,(err,data)=>{
        if(err){
            res.json({
                code : 400,
                msg : '获取数据失败'
            })
        }else{
            data.created = moment(data.created).format('YYYY-MM-DDTHH:mm')
            res.json({
                code : 200,
                msg : '获取数据成功',
                data
            })
        }
    })
}


// 通过id编辑数据
function editPostById(req,res){
    let obj = req.body;
    console.log(obj);
    postmodel.editPostById(obj,(err)=>{
        console.log(err);
        if(err){
            res.json({
                code : 400,
                msg : '编辑失败'
            })
        }else{
            res.json({
                code : 200,
                msg : '编辑成功'
            })
        }
    })
}

// 通过id删除数据
function delPostById(req,res){
    let id = req.query.id
    console.log(id);
    postmodel.delPostById(id,(err)=>{
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
    getAllPost,addPost,getPostById,editPostById,delPostById
}