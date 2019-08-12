// 引入model模块
const model = require('../models/usermodel');
// 处理登录业务逻辑
function login(req,res){
    // 获取客户端传回来的数据
    let obj = req.body;
    // console.log(obj);
    model.login(obj.email,(err,data)=>{
        // console.log(data);
        if(err){
            // send : 实际类型转换
            // res.send({code : 400, msg : '服务器异常'})
            // json：可以直接将js对象转成json字符串并返回
            res.json({code : 400 , msg : '服务器出错'})
        }else{
            // 判断有没有查询到结果集
            if(data){
                // 判断密码是否正确
                if(data.password == obj.password){
                    // 写入登录状态
                    // res.writeHead(200,{
                    //      'Set-Cookie' : 'isLogin=true'
                    // })
                    // 使用session写入登录状态
                    req.session.isLogin = 'true';
                    // 写入当前用户的数据 以免以后改密码的时候没数据
                    req.session.currentUser = data;
                    
                    res.end(JSON.stringify({code : 200 , msg : '登录成功'}));
                }else{
                    res.json({code : 400 , msg : '密码错误'});
                }
            }else{
                res.json({code : 400 , msg: '邮箱输入有误'})
            }
        }
    })
}





module.exports = {
    login
}