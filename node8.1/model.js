const fs = require('fs');
// 读取数据 将所有英雄数据转成数组 传回去
function getAllHero(callback) {
    fs.readFile('./data/heros.json', 'utf-8', (err, data) => {
        let arr = JSON.parse(data);
        callback(arr);
    })
}

// 通过id获取旧数据的方法
function getDataById(id, callback) {
    // 遍历旧数据
    this.getAllHero((arr) => {
        // arr.forEach(e => {
        //     if (e.id == id) {
        //         callback(e);
        //         break;
        //     }
        // });
        let target = arr.find((e)=>{
            return e.id == id;
        })
        callback(target);
    })
}

//写回数据库
function writeFile(arr){
    let jsonStr = JSON.stringify(arr);
    fs.writeFile('./data/heros.json',jsonStr,'utf-8',(err)=>{
        if(err)console.log(err);
    })
} 

// 获取最大id
function getMaxId(callback){
    this.getAllHero((arr)=>{
        let id = arr[0].id;
        for(let i = 1; i < arr.length; i++){
            if(arr[i].id > id){
                id = arr[i].id;
            }
        }
        callback(id);
    })
}

module.exports = {
    getAllHero,getDataById,writeFile,getMaxId,
}