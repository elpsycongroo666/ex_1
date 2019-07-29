// $(function () {
//   // 点击新增，把数据新增到服务器
//   $('#sub').on('click', function () {
//     // 非空判断

//     // 收集数据
//     let data = $('#myform').serialize();
//     console.log(data);
//     // ajax请求
//     $.ajax({
//       type: "post",
//       url: "http://127.0.0.1:8888/addNewHero",
//       data,
//       // dataType 用于告诉ajax对象，服务器返回的格式是什么，不需要根据Content-Type自己解析了
//       dataType: 'json',
//       success: function (res) {
//         console.log(res);
//         // res = JSON.parse(res);
//         if (res.code === 200) {
//           alert(res.msg);
//         }
//       }
//     });
//   })


// });



$(function () {
  // 注册点击事件
  $('#sub').on('click', function () {
    // 先判断是否为空
    if ($('tbody input[name=name]').val().trim().length === 0) {
        alert('用户名不能为空');
        return;
    }else{
      // 获取表单数据
      let data = $('#myform').serialize();
      
      // 发送ajax请求
      $.ajax({
        url : 'http://127.0.0.1:8888/addNewHero',
        type : 'post',
        data,
        dataType : 'json',
        success : function(res){
            // console.log(res);{"code":200,"msg":"添加成功"}
            // res = JSON.parse(res);
            if(res.code === 200){
              alert(res.msg);
              location.href = '../../views/index.html';
            }
        }
      })
    }
  })
})