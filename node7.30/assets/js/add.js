$(function(){
    $('#sub').on('click',function(){
        if($('tbody input[name=name]').val().trim().length === 0){
            alert('用户名不能为空');
            return;
        }else{
            // 获取表单数据
            let data = $('#myform').serialize();
            $.ajax({
                type: 'post',
                url : 'http://127.0.0.1:8888/addNewHero',
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
})