$(function(){
    $('.btnlogin').on('click',function(){
        // 获取数据 通过input的name属性和value属性获取
        let data = $('.login-wrap').serialize();
        // console.log(data);
        $.ajax({
            type : 'post',
            url : '/login',
            data : data,
            success :function(res){
                // console.log(res);
                if(res.code === 400){
                    $('.alert-danger > span').text(res.msg);
                    // 淡入淡出 显示时间
                    $('.alert-danger').fadeIn(500).delay(2000).fadeOut(500)
                }else{
                    // 进行页面跳转
                    location.href = '/admin';
                }
            }
        })
    })
})