const fs = require('fs');
const mysql = require('mysql');

let conn = mysql.createConnection({
  hsot: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'gz35'
})

function getAllHero(callback) {
  let sql = `select * from heros where isDelete=0`
    conn.query(sql,(err,result)=>{
      if(err) console.log(err);
      callback(result);
    })
}

function getHeroById(id, callback) {
  this.getAllHero((arr) => {
    let target = arr.find(e => {
      return e.id == id;
    });
    callback(target);
  })
}
// 修改
function editHeroById(id,data,callback){
  let sql = `UPDATE heros set \`name\`='${data.name}',\`gender\`='${data.gender}',\`img\`='${data.img}' where id = ${id}`;
  conn.query(sql,(err,result)=>{
    if(err)console.log(err);
    callback(result);
  })
}


// 新增
function addNewHero(data,callback){
    let sql = `insert into heros set \`name\`='${data.name}',\`gender\`='${data.gender}',\`img\`='${data.img}'`
    conn.query(sql,(err,result)=>{
      if(err)console.log(err);
      callback(result);
    })
}
// 删除
function deleteHeroById(id,callback){
    let sql = `UPDATE heros set isDelete = 1 where id = ${id}`
    conn.query(sql,(err,result)=>{
      if(err)console.log(err);
      callback(result);
    })
}

module.exports = {
  getAllHero, getHeroById,addNewHero,deleteHeroById,editHeroById
};