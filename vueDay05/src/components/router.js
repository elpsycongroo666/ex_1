const express = require('express')
const router = express.Router()
// 处理页面的控制器
const pageController = require('./controllers/pageController')
// 处理业务逻辑的控制器
const userController = require('./controllers/userController')
const postController = require('./controllers/postController')
const cateController = require('./controllers/cateController')
const uploadController = require('./controllers/uploadController')
const optionsController = require('./controllers/optionsController')

router
// 约定好获取前面页面的请求
  .get('/', pageController.getIndexPage)
  .get('/detail', pageController.getDetailPage)
  .get('/list', pageController.getLIstPage)
// 后台页面请求
  .get('/admin/categories', pageController.getAdminCategoriesPage)
  .get('/admin/comments', pageController.getAdminCommentsPage)
  .get('/admin/', pageController.getAdminIndexPage)
  .get('/admin/login', pageController.getAdminLoginPage)
  .get('/admin/nav-menus', pageController.getAdminNavMenusPage)
  .get('/admin/password-reset', pageController.getAdminPassworDresetPage)
  .get('/admin/post-add', pageController.getAdminPostAddPage)
  .get('/admin/posts', pageController.getAdminPostsPage)
  .get('/admin/profile', pageController.getAdminProfilePage)
  .get('/admin/settings', pageController.getAdminSettingsPage)
  .get('/admin/slides', pageController.getAdminSlidesPage)
  .get('/admin/users', pageController.getAdminUsersPage)

// 业务处理路由
  .post('/login', userController.login)

  .get('/getAllPost', postController.getAllPost)
// 实现新增
  .post('/addPost', postController.addPost)
// 获取编辑页面的数据
  .get('/getPostById', postController.getPostById)
// 文章编辑操作
  .post('/editPostById', postController.editPostById)
// 删除操作
  .get('/delPostById', postController.delPostById)

// 点击编辑 实现编辑分类目录
  .post('/cateEdit', cateController.cateEdit)
// 点击添加 实现添加新分类
  .post('/addNewCate', cateController.addNewCate)
// 获取所有分类请求
  .get('/getAllCate', cateController.getAllCate)
  .get('/deleteCateById', cateController.deleteCateById)
  .get('/deleteCate', cateController.deleteCate)
// 实现文件上传
  .post('/uploadFile', uploadController.uploadFile)

  .post('/addMenu', optionsController.addMenu)
  .get('/getMenu', optionsController.getMenu)

// 暴露
module.exports = router
