// 下载数据库模块
const mysql = require('mysql');
// 创建数据库链接
const connection = mysql.createConnection({
    host : '127.0.0.1',
    // 端口可以不写
    user : 'root',
    password : 'root',
    database : 'baixiu'
})
// 这个控制器完成所有与用户相关的增删改和查询
function login(email,callback){
    // 创建sql语句
    let sql = `select * from users where email = "${email}"`
    // 调用mysql模块
    connection.query(sql,(err,result)=>{
        if(err){
            callback(err);
        }else{
            // result 查询 返回的是一个结果集(数组),如果数据有数据，则只有一条数据
            // 访问一个不存在的变量 ： *** is not define
            // 访问一个对象不存在的属性 ： 返回的是undefined
            callback(null,result[0]);
            // console.log(result[0]);
        }
    })
}




// 暴露
module.exports = {
    login,
}