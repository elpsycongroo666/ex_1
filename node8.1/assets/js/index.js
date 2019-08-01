$(function(){
    $('#tbody').on('click','a:last-child',function(){
        // 交互常识
        if(!confirm('你确定要删除吗')){
            return;
        }else{
            // 获取对应id
            let id = $(this).attr('data-id');
            let _this = this;
            // 发送ajax请求
            $.ajax({
                url : 'http://127.0.0.1:8888/deleteHeroById',
                type : 'get',
                data : { id },
                success : function(res){
                    if(res.code === 200){
                        alert(res.msg);
                        // 把对应的数据删除
                        $(_this).parents('tr').remove();
                    }
                }
            })
        }
    })
})