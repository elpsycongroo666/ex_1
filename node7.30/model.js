const fs = require('fs');
let model = {
    // 设定一个 通过 json 读取 数组的方法
    getJsonArr(callback){
        fs.readFile('./data/heros.json', 'utf-8', (err, data) => {
            if (err) console.log(err);
            let arr = JSON.parse(data);
            callback(arr);
        })
    }
}
module.exports = model;