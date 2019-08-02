$(function(){
    // 判断非空
    $('#sub').on('click',function(){
        if($('tbody input[name=name]').val().trim().length === 0){
            alert('用户名不能为空');
            return;
        }else{
            // 获取表单数据
            let data = $('#myform').serialize();
            // ajax请求
          $.ajax({
              url : 'http://127.0.0.1:8080/addNewHero',
              type : 'post',
              data,
              success : function(res){
                  if(res.code === 200){
                      alert(res.msg);
                      location.href = '/index';
                  }
              }
          })
        }
    })
});