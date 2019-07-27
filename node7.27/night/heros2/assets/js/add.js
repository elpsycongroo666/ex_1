// 要提交表单，我们就要先把判断非空
// 先获取文本域
let text = $('tbody input[name=name]');

// 注册点击新增事件
$('#sub').on('click', function () {
    if (text.val().trim().length === 0) {
        alert('用户名不能为空')
        return;
    } else {
        // 获取表单内容
        let data = $('form').serialize();
        // ajax请求
        let xhr = new XMLHttpRequest();
        xhr.open('get', 'http://127.0.0.1:8888/addHero?' + data) //请求地址约定好的 /addHero
        xhr.send();
        xhr.onreadystatechange = function(){
            if(xhr.status === 200 && xhr.readyState === 4){
                let res = JSON.parse(xhr.response);
                if(res.code === 200){
                    alert(res.msg);
                }
            }
        }
    }
})
