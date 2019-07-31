$(function () {
  // 注册删除按钮的点击事件 使用事件委托来做
  $('#tbody').on('click', 'a:last-child', function () {
    // 删除操作是及其危险的 要弹出框
    if (!confirm('你确定要删除吗?')) {
      return;
    } else {
      let _this = this;
      // 就获取对应的id  ajax请求 去服务器上面删除掉数据
      let id = $(this).attr('data-id');
      $.ajax({
        url: 'http://127.0.0.1:8888/heroRemove',
        type: 'get',
        data: { id },
        success: function (res) {
          if (res.code === 200) {
              alert(res.msg);
              // 删除对应页面的行
              // 要用到this 使用闭包的形式
              $(_this).parents('tr').remove();
          }
        }
      })
    }
  })
})