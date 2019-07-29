/*
    该模块只负责两件事：
        读取json文件，返回数组

        得到一个数组，往json文件里面存储
*/
const fs = require('fs');

let model = {
    // 一个读取json文件，返回数组的方法
    getAllHero(callback) {
        fs.readFile( __dirname + '/data/heros.json', 'utf-8', (err, data) => {
            if (err) console.log(err);
            let arr = JSON.parse(data);
            callback(arr);
        })
    },
    // 一个通过数组，写入json文件的方法
    writeFile(arr) {
        let jsonStr = JSON.stringify(arr);
        fs.writeFile('./data/heros.json', jsonStr, 'utf-8', (err) => {
            if (err) console.log(err);
        })
    },
    // 获取最大id的方法
    getMaxId(callback) {
        this.getAllHero((arr) => {
            let id = 0;
            arr.forEach(e => {
                if (e.id > id) {
                    id = e.id;
                }
            });
            callback(id)
        })
    }
}


module.exports = model;