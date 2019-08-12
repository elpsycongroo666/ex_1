const queryString = require('querystring');
// 获取前面的页面
function getIndexPage(req,res){
    res.render('index.ejs');
}

function getDetailPage(req,res){
    res.render('detail.ejs');
}

function getLIstPage(req,res){
    res.render('list.ejs');
}


// 获取后台的页面
function getAdminCategoriesPage(req, res) {
    res.render('admin/categories.ejs');
}

function getAdminCommentsPage(req, res) {
    res.render('admin/comments.ejs');
}

function getAdminIndexPage(req, res) {
    // 进行登录状态的验证
//     var mycookie = queryString.parse(req.headers.cookie);//获得到的是字符串
//     if(mycookie.isLogin && mycookie.isLogin == 'true'){
//         res.render('admin/index.ejs');
//     }else{
//         // 重定向
//         res.writeHead(301,{
//             'location' : '/admin/login'
//         })
//         res.end();
//     }
    if(req.session.isLogin && req.session.isLogin == 'true'){
        res.render('admin/index.ejs');
    }else{
        res.writeHead(301,{
            'Location' : '/admin/login'
        })
        res.end();
    }
}
function getAdminLoginPage(req, res) {
    res.render('admin/login.ejs');
}

function getAdminNavMenusPage(req, res) {
    res.render('admin/nav-menus.ejs');
}

function getAdminPassworDresetPage(req, res) {
    res.render('admin/password-reset.ejs');
}

function getAdminPostAddPage(req, res) {
    res.render('admin/post-add.ejs');
}

function getAdminPostsPage(req, res) {
    res.render('admin/posts.ejs');
}

function getAdminProfilePage(req, res) {
    res.render('admin/profile.ejs');
}

function getAdminSettingsPage(req, res) {
    res.render('admin/settings.ejs');
}

function getAdminSlidesPage(req, res) {
    res.render('admin/slides.ejs');
}

function getAdminUsersPage(req,res){
    res.render('admin/users.ejs');
}


// 暴露
module.exports = {
    getIndexPage,getDetailPage,getLIstPage,
    getAdminCategoriesPage,getAdminCommentsPage,getAdminIndexPage,getAdminLoginPage,getAdminNavMenusPage,getAdminPassworDresetPage,
    getAdminPostAddPage,getAdminPostsPage,getAdminProfilePage,getAdminSettingsPage,getAdminSlidesPage,getAdminUsersPage
}