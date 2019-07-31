const model = require('./model');
let controller = {
    // 处理逻辑
    // 给router一个获得index的页面
    getIndexHtml(req, res) {
        // // 先读取json文件 然后使用 render渲染
        // fs.readFile('./data/heros.json', 'utf-8', (err, data) => {
        //     if (err) console.log(err);
        //     // 因我们render('要渲染的ejs文件名',对象数组);
        //     // 所以我们需要把这个数据转换数组
        //     let arr = JSON.parse(data);
        //     // 直接渲染
        //     res.render('index', { arr });
        // })
        // 调用model的方法 来读取文件
        model.getJsonAll((arr) => {
            // 将得到数组 然后直接熏染
            res.render('index', { arr });
        })
    },
    heroRemove(req, res) {
        // 通过对应id删除对应的数据
        // 先得到id
        // express里面已经帮我们把get请求带回来的参数处理了
        // 直接通过req.query 可以获取
        // console.log(req.query);{ id: '4' }
        let id = req.query.id; //得到对应的id
        // res.send('ok');
        // 判断数据库中 有没有与之对应的id  如果有 那就把数据删除 然后 再写回数据库
        model.getJsonAll((arr) => {
            // arr.forEach((e,i) => {
            //     if(e.id === id){
            //         arr.splice(i,1);
            //         // 写回数据库的方法 在model里面在设置一个
            //         model.writeFile(arr);
            //         // 响应信息回去
            //         res.send({code : 200, msg:'删除成功'});
            //     }
            // });
            let isExit = arr.findIndex((e) => {
                return e.id == id;
            })
            isExit != -1 ? arr.splice(isExit, 1) : 0;
            // 写回数据
            model.writeFile(arr);
            res.send({ code: 200, msg: '删除成功' });
        })
    },
    // 获取add页面
    getAdd(req, res) {
        // 原本我们要读取数据 然后 send回去 加载出来 但是现在 我们有ejs的话 就不需要那么麻烦了 
        // 直接使用res.render() 返回add页面就行了
        res.render('add');//没有动态数据 所以 我们不需要在一开始的时候就加载 就不用传数组对象了 只需要把一个add.html的文件 改成add.ejs就行了
    },
    // 新增英雄请求
    addNewHero(req, res) {
        // 需要先获取传递回来的数据
        // express里面没有封装post请求的数据的获取，依赖于一个第三方模块
        // body-parser 它其实是一个 express的中间件，一般中间件都是 app.js 里面注册
        // 注册了之后，req对象身上就会多一个属性 body 这个属性是一个对象，该对象是解析 post请求传递回来的数据得到的
        // console.log(req.body);//[Object: null prototype] { img: '../assets/image/3.jpg', name: '123', gender: '男' }
        // 发现少了id属性 又因为id是唯一的 我们就要先把旧数据的最大id获取到 然后给新id=旧id+1 然后添加进数组里面

        // 先调用获取数组的方法
        model.getJsonAll((arr) => {
            // 调用获取最大id的方法
            model.getMaxId((maxId) => {
                req.body.id = maxId + 1;
                // 合并
                arr.push(req.body);
                // 写入
                model.writeFile(arr);
                // 返回
                res.send({ code: 200, msg: '添加成功' });
            })
        })
    }
}

// 暴露controller
module.exports = controller;