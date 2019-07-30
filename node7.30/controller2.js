// const fs = require('fs');
const model = require('./model2')
let controller = {
    getIndexHtml(req, res) {
        model.getAllHero((arr) => {
            // 获取到arr  将数据渲染
            res.render('index', { arr });
        })
    },
    deleteHeroById(req, res) {
        // 根据id删除掉对应元素
        // 先得到id
        // express里面已经帮我们把get请求带回来的参数处理了
        // 直接通过req.query 可以获取
        // console.log(req.query);
        // console.log('controller1');
        let id = req.query.id;
        // 先读取数据
        model.getAllHero((arr) => {
            // console.log(1);
            // 判断id跟数组中的是否一样
            // for(let i = 0;i < arr.length; i++){
            //     if(arr[i].id === id){
            //         // 那就把对应的数据删除
            //         arr.splice(i,1);
            //         break;
            //     }
            // }
            let isExit = arr.findIndex(e => {
                return e.id == id;
            })
            isExit != -1 ? arr.splice(isExit, 1) : 0;
            // console.log(1);
            // console.log('controller2');
            // 写入
            model.writeFile(arr);
            res.send({ code: 200, msg: '删除成功' });
        })
    },
    getAdd(req,res){
        res.render('add');
    },
    addNewHero(req,res){
        // 需要先获取传递回来的数据
        // express里面没有封装post请求数据的获取，依赖于一个第三发模块
        // body-parser 它其实是一个 express的中间件，一般中间件都是在 app.js里面注册
        // 注册了之后，req对象身上就会多一个属性 body ，这个属性是一个对象，该对象是解析 post请求传递回来的数据得到的
        console.log(req.body);

        // 把数据读取出来，获取一个最大id，把新旧数据合并，写入
        model.getAllHero((arr)=>{
            // 获取最大id
            model.getMaxId((maxId)=>{
                req.body.id = maxId + 1;
                // 合并
                arr.push(req.body);
                // 写入
                model.writeFile(arr);
                // 返回成功
                res.send({code : 200, msg : '成功'});
            })
        })
    }
}
module.exports = controller;