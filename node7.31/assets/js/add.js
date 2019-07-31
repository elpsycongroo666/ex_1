$(function(){
    // 先注册新增按钮的点击事件
    $('#sub').on('click',function(){
        // 交互常识 判断非空
        if($('tbody input[name=name]').val().trim().length === 0){
            alert('用户名不能为空');
        }else{
            // 获取表单的内容 发送ajax请求
            let data = $('#myform').serialize();
            console.log(data); //img=..%2Fassets%2Fimage%2F3.jpg&name=123&gender=%E7%94%B7
            $.ajax({
                url : 'http://127.0.0.1:8888/addNewHero',//与后台服务器约定好的
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
})