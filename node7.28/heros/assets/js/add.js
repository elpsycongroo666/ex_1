const xhr = new XMLHttpRequest();
// 当我点击新增的时候 就要提交数据
$('#sub').on('click', function () {
    // 交互常识 先将 判断 用户名不能为空
    if ($('tbody input[name=name]').val().trim().length === 0) {
        alert('用户名不能为空');
        return;
    } else {
        // 获取数据 通过ajax请求 提交到数据库
        let data = $('form').serialize();
        xhr.open('get', 'http://127.0.0.1:8888/addHeros?' + data);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.status === 200 && xhr.readyState === 4) {
                let res = JSON.parse(xhr.responseText);
                if (res.code === 200) {
                    alert(res.msg);
                    location.href = '../../views/index.html';
                }
            }
        }
    }
})