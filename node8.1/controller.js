const model = require('./model');
// 获取index英雄界面的逻辑
function getIndex(req,res){
    model.getAllHero((arr)=>{
        res.render('index',{arr});
    })
}

// 获取add添加英雄界面的逻辑
function getAdd(req,res){
    res.render('add');
}

// 获取edit页面的逻辑
function getEdit(req,res){
    // 需要把修改页面的旧的数据带回浏览器
    let id = req.query.id;
    // 通过id获取旧数据的方法
    model.getDataById(id,(target)=>{
        res.render('edit',target);
    })
}

// 处理删除逻辑
function deleteHeroById(req,res){
    // 通过get请求 发送的id 
    let id = req.query.id;
    // 将数据获取
    model.getAllHero((arr)=>{
        let isExit = arr.findIndex((e)=>{
            return e.id == id;
        })
        isExit != -1 ? arr.splice(isExit,1) : 0;
        // 把数据写回
        model.writeFile(arr);
        res.send({code : 200, msg : '删除成功'});
    })
}

// 处理新增英雄请求的逻辑
function addNewHero(req,res){
    // 将post请求发来的数据 添加进 旧数据中
    // console.log(data);{ img: '../assets/image/3.jpg', name: '123', gender: '男' }
    // res.send('ok');
    model.getAllHero((arr)=>{
        // 获取旧数据中最大id
        model.getMaxId((maxId)=>{
           req.body.id = maxId + 1;
            arr.push(req.body);
            model.writeFile(arr);
            res.send({code : 200 , msg : '新增成功'});
        })
    })
}
// 根据对应id修改数据
function editHeroById(req,res){
        // 获取数据
        let data = req.body;
        // 把数据读取出来
        model.getAllHero((arr)=>{
            for(let i = 0; i < arr.length; i++){
                if(arr[i].id == data.id){
                    arr[i] = data;
                    break;
                }
            }
            model.writeFile(arr);
            res.send({code : 200, msg : '修改成功'});
        })
}
module.exports = {
    getIndex,getAdd,getEdit,deleteHeroById,addNewHero,editHeroById
}