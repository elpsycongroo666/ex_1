$(function(){
    $('#tbody').on('click','a:last-child',function(){
        // 危险操作
        if(!confirm('你确定要删除吗?')){
            return;
        }else{
            let _this = this;
            let id = $(this).attr('data-id');
            console.log(id);
            // ajax请求
            $.ajax({
                type : 'get',
                url : 'http://127.0.0.1:8080/deleteHeroById',
                data : {id},
                success :function(res){
                    if(res.code === 200){
                        alert(res.msg);
                        $(_this).parents('tr').remove();
                    }
                }
            })
        }
    })
});