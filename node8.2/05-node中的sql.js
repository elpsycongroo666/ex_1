const mysql = require('mysql');

const conn = mysql.createConnection({
    host : '127.0.0.1',
    port : 3306,
    user : 'root',
    password : 'root',
    database : 'gz35'
})

conn.connect();

let sql = `insert into heros set name='旺财',gender='男',img='../assets/image/4.jpg'`

conn.query(sql,(err,result,filed)=>{
    if(err)console.log(err);
    console.log(result);
    console.log(filed);
})

conn.end();
