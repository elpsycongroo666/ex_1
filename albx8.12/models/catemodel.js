// 实现所有分类数据相关操作
var conn = require('../utils/myconn.js')

// 获取所有分类数据
exports.getAllCate = (callback) => {
    var sql = 'select * from categories'
    conn.query(sql, (err, data) => {
        if (err) {
            callback(err)
        } else {
            callback(null, data)
        }
    })
}


// 修改分类
exports.cateEdit = (obj, callback) => {
    let sql = `UPDATE categories set ? where id = ?`
    conn.query(sql, [obj, obj.id], (err, result) => {
        if (err) {
            callback(err);
        } else {
            callback(null);
        }
    })
}


// 新增分类
exports.addNewCate = (obj, callback) => {
    let sql = `INSERT into categories set slug="${obj.slug}",name = "${obj.name}"`
    conn.query(sql, (err, result) => {
        if (err) {
            callback(err);
        } else {
            callback(null);
        }
    })
}


// 删除对应id的单个分类
exports.deleteCateById = (id, callback) => {
    let sql = `DELETE from categories where id = ${id}`
    conn.query(sql, (err) => {
        console.log(err);
        console.log(sql);
        if (err) {
            callback(err)
        } else {
            callback(null);
        }
    })
}

// 删除多选框选中的
exports.deleteCate = (obj,callback) =>{
    let sql = `delete from categories where id in (${obj.id})`
    conn.query(sql,(err)=>{
        console.log(sql);
        if(err){
            callback(err)
        }else{
            callback(err);
        }
    })
}