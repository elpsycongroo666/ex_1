const model = require('./model');
let controller = {
    getIndexHtml(req, res) {
        // 那就先读取josn文件
        // 使用render渲染页面 index.ejs 所以这里就是index 后面跟着的是数据对象
        model.getJsonArr((arr)=>{
            res.render('index', { arr })
        })
    }
}

module.exports = controller;