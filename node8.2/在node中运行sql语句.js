// 引入mysql模块
const mysql = require('mysql');

// 创建一个链接对象
let conn = mysql.createConnection({
    // ip地址
    host : '127.0.0.1',
    port : 3306,
    user : 'root',
    password : 'root',
    database : 'gz35'
})

// 2连接 - 新版本的mysql第三方模块会自动链接，可以省略
conn.connect();

// 3 需要一个sql语句
// let sql = `update heros set isDelete = 1 where id = 4`;
let sql = `SELECT * from heros where isDelete=0`;

// 4执行sql语句

conn.query(sql,(err,result,filed)=>{
    // err - 如果有错，是一个错误对象，如果这个东西存在，后面的两个参数就都是undefined了
    if(err)console.log(err);
    // result - sql语句的执行结果 - 如果是查询，result是一个数组，如果不是查询，result是一个对象
    console.log(result);
    // filed - 如果是查询，才有，查询出来之后，是所有的字段
    console.log(filed);
})

// 关闭连接 - 新版本的不需要了，也是自动关闭的
conn.end();