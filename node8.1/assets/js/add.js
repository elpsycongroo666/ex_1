$(function(){
    $('#sub').on('click',function(){
        // 先判断非空
        if($('tbody input[name=name]').val().trim().length === 0){
            alert('用户名不能为空');
            return;
        }else{
            // 获取表单数据
            let data = $('#myform').serialize();
            // 发送ajax请求
            $.ajax({
                type : 'post',
                url : 'http://127.0.0.1:8888/addNewHero',
                data,
                success : function(res){
                    if(res.code === 200){
                        alert('新增成功');
                        location.href = '/index';
                    }
                }
            })
        }
    })
})