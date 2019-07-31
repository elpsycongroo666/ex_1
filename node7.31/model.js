const fs = require('fs');
let model = {
    // 一个可以通过读取json数据 获得数组的方法
    getJsonAll(callback){
        fs.readFile('./data/heros.json','utf-8',(err,data)=>{
            if(err)console.log(err);
            let arr = JSON.parse(data);
            // 因为readfile是异步的 就是 当代码执行到了这里 不会因为它而停止 反而会让这一块自己执行 然后另外的也执行 总的来说 就是一同执行 但是我们是要通过
            // 这个代码执行完之后 获得到的数据 因为我们也不知道 这个json文件有多大 如果是几百m 那么读取就要花很多时间了 所以 我们用return就得不到想要的数据
            // 只能用callback
            callback(arr);
        })
    },
    // 将数组的形式 转换成json格式 在写入数据库
    writeFile(arr){
        let jsonStr = JSON.stringify(arr);
        fs.writeFile('./data/heros.json',jsonStr,'utf-8',(err)=>{
            if(err)console.log(err);
        })
    },
    getMaxId(callback){
        // 先获取数据
        this.getJsonAll((arr)=>{
            let id = arr[0].id;
            for(let i = 0; i < arr.length; i++){
                if(arr[i].id > id){
                    id = arr[i].id;
                }
            }
            callback(id);
        })
    }
}

module.exports = model;