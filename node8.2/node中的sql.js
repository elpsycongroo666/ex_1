const mysql = require('mysql');

let conn = mysql.createConnection({
    host : '127.0.0.1',
    port : 3306,
    user : 'root',
    password : 'root',
    database : 'gz35'
})

// let sql = `select * from heros`
// let sql = `insert into heros set name='111',gender='男'`
// let sql = `update heros set name='圣骑士' where id = 15`
// let sql = `delete from heros where id = 16`
conn.query(sql,(err,result,filed)=>{
    if(err)console.log(err);

    console.log(result);
    
    // console.log(filed);
})