// 给文件上传按钮注册change事件
$(function () {
    $('#feature').on('change', function () {
        // 获取文件
        let file = this.files[0];
        // 创建formdata对象 转换成文件流的形式
        let formdata = new FormData();
        // 把文件传进添加进formdata对象中
        formdata.append('img', file);
        // 发送ajax请求
        $.ajax({
            type: 'post',
            url: '/uploadFile',
            data: formdata,
            dataType: 'json',
            processData: false,
            contentType: false,
            success: function (res) {
                if (res.code == 200) {
                    // 就做一个预览效果
                    $('.thumbnail').attr('src', '/uploads/' + res.img).show();
                    // 把数据存入隐藏域
                    $('[name="feature"]').val(res.img);
                } else {
                    $('.alert-danger > span').text(res.msg);
                    $('.alert-danger').fadeIn(300).delay(2000).fadeOut(300);
                }
            }
        })
    })

    // 拿到所有分类的数据
    $.ajax({
        url: '/getAllCate',
        type: 'get',
        dataType: 'json',
        success: function (res) {
            let str = `<option value="all">所有分类</option>`
            for (let i = 0; i < res.data.length; i++) {
                str += `<option value="${res.data[i].id}">${res.data[i].name}</option>`
            }
            $('#category').html(str);
        }
    })


    // 创建ckeditor富文本框控件替换页面中的textarea
    // 它会创建一个富文本框对象
    CKEDITOR.replace('content');

    // 获取id
    let id = itcase.getParameter(location.search).id;

    // 保存文件
    $('.btnSave').on('click', function () {
        // 获取数据
        // console.log(CKEDITOR.instances.content.getData());
        // 这种方法确实可以拿得到数据 但是我们不想自己拼接数据 而是使用serialize来获取到数据 所以我们不这个方法
        CKEDITOR.instances.content.updateElement()//同步
        // 我们使用这种
        if (id) {
            opt('/editPostById')
        }else{
            opt('/addPost')
        }

    })

    function opt(url) {
        let data = $('form').serialize();
        console.log(data);
        $.ajax({
            url: url,
            type: 'post',
            data,
            dataType: 'json',
            success: function (res) {
                if (res.code == 200) {
                    alert(res.msg);
                    location.href = '/admin/posts'
                } else {
                    alert(res.msg);
                }
            }
        })
    }

    if (id) {
        $.ajax({
            url: '/getPostById',
            type: 'get',
            dataType: 'json',
            data: { id },
            success: function (res) {
                if (res.code == 200) {
                    // 渲染页面
                    // console.log(res);
                    $('#title').val(res.data.title);
                    $('#content').val(res.data.content);
                    $('#slug').val(res.data.slug);
                    $('.thumbnail').attr('src', '/uploads/' + res.data.feature).show()
                    $('#category').val(res.data.category_id);
                    // 用户可能不更改数据 所以我们也要将隐藏域的值保存
                    $('[name="feature"]').val(res.data.feature);
                    // 存储一个id
                    $('[name="id"]').val(res.data.id);
                    // 渲染发布时间
                    $('#created').val(res.data.created);
                }
            }
        })
    }
})