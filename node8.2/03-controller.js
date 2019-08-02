const model = require('./04-model');

// 英雄界面
function getIndex(req, res) {
  model.getAllHero((result) => {
    res.render('index', { result });
  })
}

// 新增英雄界面
function getAddHtml(req, res) {
  res.render('add');
}

// 修改界面
function getEdit(req, res) {
  res.render('edit');
}

// 使用模板引擎动态渲染的修改页面
function getEdit2(req, res) {
  // 需要把要修改的旧的数据已经带回浏览器
  let id = req.query.id;
  // console.log(id);
  // 根据id把旧的数据获取出来
  model.getHeroById(id, target => {
    // console.log(target);
    res.render('edit2', target);
  })
  // res.send('ok');
}


function getHeroById(req, res) {
  let id = req.query.id;
  model.getHeroById(id, target => {
    let response = {};
    if (target) {
      response.code = 200;
      response.msg = '获取成功';
      response.data = target;
    } else {
      response.code = 503;
      response.msg = '没有找到对应的数据，请确认id是否正确';
    }
    res.send(response);
  })
}

//修改英雄
function editHeroById(req, res) {
  // 获取数据
  let data = req.body;
  model.editHeroById(data.id, data, (result) => {
    let response = {
      code: 501,
      msg: '修改失败'
    };
    if (result.affectedRows === 1) {
      response.code = 200;
      response.msg = '修改成功';
    }
    res.send(response);
  })
}

// 添加英雄请求
function addNewHero(req, res) {
  let data = req.body;
  model.addNewHero(data, (result) => {

    let response = {
      code: 501,
      msg: '提交失败'
    };

    if (result.affectedRows === 1) {
      response.code = 200;
      response.msg = '新增成功';
    }

    res.send(response);
  })
}

// 删除请求
function deleteHeroById(req, res) {
  let id = req.query.id;
  model.deleteHeroById(id, result => {
    let response = {
      code: 501,
      msg: '失败'
    };
    if (result.affectedRows === 1) {
      response.code = 200;
      response.msg = '成功';
    }
    res.send(response);
  })
}

const controller = {
  getIndex, getEdit, getHeroById, editHeroById, getEdit2, getAddHtml, addNewHero, deleteHeroById
}

module.exports = controller;