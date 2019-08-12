const conn = require('../utils/myconn')
// 新增导航菜单项
exports.addMenu = (obj,callback) =>{
    // 1.查询出所有的menu数据
    let sql = 'select value from `options` where id = 9';
    conn.query(sql,(err,results)=>{
        if(err){
            callback(err);
        }else{
            // [{"icon":"fa fa-glass","text":"奇趣事","title":"奇趣事","link":"/category/funny"},{"icon":"fa fa-phone","text":"潮科技","title":"潮科技","link":"/category/tech"},{"icon":"fa fa-fire","text":"会生活","title":"会生活","link":"/category/living"},{"icon":"fa fa-gift","text":"美奇迹","title":"美奇迹","link":"/category/travel"}]
            let jsonStr = results[0].value
            // 将json字符串转为js数组
            let arr = JSON.parse(jsonStr);
            // 将传入的数据对象添加到数组中
            arr.push(obj);
            // 转换成json格式
            let finalStr = JSON.stringify(arr);
            // 实现update
            sql = `update options set value = ? where id = 9`
            conn.query(sql,[finalStr],(err)=>{
                if(err){
                    callback(err)
                }else{
                    callback(null);
                }
            })
        }
    })
}


exports.getMenu = (callback)=>{
    let sql = 'select value from `options` where id = 9'
    conn.query(sql,(err,result)=>{
        if(err){
            callback(err)
        }else{
            console.log(result[0]);
            callback(null,JSON.parse(result[0].value));
        }
    })
}