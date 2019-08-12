const optionsmodel = require('../models/optionsmodel')

// 添加
exports.addMenu = (req,res) =>{
    let obj = req.body
    obj.icon ='fa fa-fire'
    console.log(obj);
    optionsmodel.addMenu(obj,(err)=>{
        if(err){
            res.json({
                code : 400,
                msg : '新增失败'
            })
        }else{
            res.json({
                code : 200,
                msg : '新增成功'
            })
        }
    })
}


// 加载页面动态结构
exports.getMenu = (req,res) =>{
    optionsmodel.getMenu((err,data)=>{
        if(err){
            res.json({
                code : 400,
                msg : '获取数据失败'
            })
        }else{
            res.json({
                code : 200,
                msg : '获取数据成功',
                data
            })
        }
    })
}