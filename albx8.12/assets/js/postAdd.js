$(function () {
    // 一选择文件就实现文件的上传操作
    $('#feature').on('change', function () {
        let file = this.files[0];
        // 创建formdata对象
        let formdata = new FormData();
        // 在formdata中追加数据
        formdata.append('img', file);
        // formdata.append('username', '名字叫:jacklove');
        // 4.使用ajax发送请求
        $.ajax({
            url: '/uploadFile',
            type: 'post',
            data: formdata,
            contentType: false,
            processData: false,
            dataType: 'json',
            success: function (res) {
                // console.log(res);
                if (res.code == 200) {
                    // 实现预览效果
                    $('.thumbnail').attr('src', '/uploads/' + res.img).show();
                    // 将图片名称存储到指定的隐藏域中
                    $('[name="feature"]').val(res.img);
                } else {
                    $('.alert-danger > span').text(res.msg)
                    $('.alert-danger').fadeIn(500).delay(3000).fadeOut(500);
                }
            }
        })
    })

    // 获取分类
    $.ajax({
        type: 'get',
        url: '/getAllCate',
        dataType: 'json',
        success: function (res) {
            // console.log(res);
            let str = `<option value="all">所有分类</option>`
            for (let i = 0; i < res.data.length; i++) {
                str += `<option value="${res.data[i].id}">${res.data[i].name}</option>`
            }
            $('#category').html(str);
        }
    })

    // 如何实现同一个按钮不同的事件触发
    // 判断当前的操作--id作为标识
    // 如果有id就实现编辑操作，如果没有id就实现新增操作
    // 我们又发现 新增操作和编辑操作的ajax请求几乎一致 就只差url请求
    let id = itcase.getParameter(location.search).id;

    
    // console.log(id);
    // 创建ckeditor富文本域控件替换页面中的textarea
    // 它会创建一个富文本框对象
    CKEDITOR.replace('content')

    $('.btnsave').on('click', function () {
        // 同步数据到textarea
        CKEDITOR.instances.content.updateElement()
        // serialize;可以直接获取当前表单中所有拥有name属性的表单元素的value值
        // var data = $(form).serialize()
        // console.log($('form').serialize())
        if(id){
            opt('/editPostById')
        }else{
            opt('/addPost')
        }
    })


    function opt(url){
        $.ajax({
            type: 'post',
            url: url,
            data: $('form').serialize(),
            dataType: 'json',
            success: function (res) {
                if (res.code == 200) {
                    // 提示
                    alert(res.msg);
                    // 跳转
                    location.href = '/admin/posts'
                } else {
                    alert(res.msg);
                }
            }
        })
    }

    if (id) {//如果有id 那就是编辑
        $.ajax({
            url: '/getPostById',
            type: 'get',
            dataType: 'json',
            data: { id },
            success: function (res) {
                    console.log(res);
                    $('#title').val(res.data.title)
                    $('#content').val(res.data.content)
                    $('#slug').val(res.data.slug)
                    $('.thumbnail').attr('src','/uploads/'+ res.data.feature).show();
                    $('#status').val(res.data.status)
                    $('#category').val(res.data.category_id)
                    // 设置隐藏域的值
                    // 用户有可能不更改的情况下就提交 但是我们之前存储在隐藏域的值 是要触发事件才能修改的
                    $('[name="feature"]').val(res.data.feature);
                    // 存储id
                    $('[name="id"]').val(res.data.id);
                    // 时间处理
                    $('#created').val(res.data.created);
            }
        })
    }

})