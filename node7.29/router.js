const url = require('url');
const controller = require('./controller');
let router = function (req, res) {
    let result = url.parse(req.url, true);
    // 处理静态资源
    if (req.url.startsWith('/assets')) {
        controller.staticResource(req, res);
    }
    // 处理主页
    if (req.url === '/views/index.html') {
        controller.getIndexHtml(req,res);
    }
    // 处理添加页面
    if (req.url === '/views/add.html') {
        controller.getAddHtml(req,res);
    }
    // 处理新增的请求
    if (result.pathname === '/addNewHero' && req.method === 'POST') {
        controller.addNewHero(req,res);
    }
}

module.exports = router;