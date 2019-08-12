$(function () {

    function init() {
        $.ajax({
            url: '/getAllCate',
            type: 'get',
            dataType: 'json',
            success: function (res) {
                // console.log(res);
                $('tbody').html(template('cateListTemp', res))
            }
        })
    }

    init();

    $('tbody').on('click', '.btnEdit', function () {
        // 使用自定义属性的意义在于获取数据的时候可以直接获取到对象
        let obj = $(this).data();
        // console.log(obj);
        // 修改对应框的val
        $("#name").val(obj.name);
        $('#slug').val(obj.slug);
        $('[name="id"]').val(obj.id);
        // $('.optinfo').text('编辑分类目录');
        $('.Options').text('编辑分类目录');
        $('.btnedit').show();
        $('.btnAdd').hide();
    })

    // 注册新增按钮的事件
    $('.btnAdd').on('click', function () {
        // console.log('123');
        // console.log($('form').serialize());
        $.ajax({
            url: '/addNewCate',
            type: 'post',
            data: $('form').serialize(),
            dataType: 'json',
            success: function (res) {
                // console.log(res);
                if (res.code == 200) {
                    alert(res.msg);
                    init();
                    $('#name').val('');
                    $('#slug').val('');
                } else {
                    $('.alert-dange > span').text(res.msg);
                    $('.alert-dange').fadeIn(300).delay(1500).fadeOut(300);
                }
            }
        })
    })


    // 注册编辑按钮的事件
    $('.btnedit').on('click', function () {
        $.ajax({
            url: '/cateEdit',
            type: 'post',
            data: $('form').serialize(),
            dataType: 'json',
            success: function (res) {
                // console.log(res);
                if (res.code == 200) {
                    alert(res.msg);
                    init();
                    $('#name').val('');
                    $('#slug').val('');
                    $('.Options').text('添加分类目录');
                    $('.btnedit').hide();
                    $('.btnAdd').show();
                } else {
                    $('.alert-dange > span').text(res.msg);
                    $('.alert-dange').fadeIn(300).delay(1500).fadeOut(300);
                }
            }
        })
    })

    // 点击删除按钮实现删除
    $('tbody').on('click', '.btnDel', function () {
        if (confirm('你确定要删除吗')) {
            // 获取id
            let id = $(this).data('id');
            // console.log(id);
            $.ajax({
                url: '/deleteCateById?id=' + id,
                type: 'get',
                success: function (res) {
                    if (res.code === 200) {
                        $('.alert-danger > span').text(res.msg);
                        $('.alert-danger').fadeIn(300).delay(2000).fadeOut(300);
                        init();
                    } else {
                        $('.alert-danger > span').text(res.msg);
                    }
                }
            })
        } else {
            return;
        }
    })

    // 实现全选删除
    $('.chkAll').on('click', function () {
        let status = $('.chkAll').prop('checked');
        $('.chkSingle').prop('checked', status);
        // 当他们都被选中的时候 就显示批量删除
        if ($('.chkSingle:checked').length > 1) {
            $('.btnDels').fadeIn(300);
        } else {
            $('.btnDels').fadeOut(300);
        }
    })

    // 当我们选中两个以上的多选框之后 就显示批量删除 当我们将多选框全部选中的时候，就把全选多选框也选中
    $('tbody').on('click', '.chkSingle', function () {
        // 获取tbody中所有复选框的个数
        let chks = $('tbody .chkSingle').length;
        if ($('tbody .chkSingle:checked').length > 1) {
            $('.btnDels').fadeIn(300);
        } else {
            $('.btnDels').fadeOut(300);
        }
        if ($('tbody .chkSingle:checked').length == chks) {
            $('.chkAll').prop('checked', true);
        } else {
            $('.chkAll').prop('checked', false);
        }
    })

    $(".btnDels").on('click', function () {
        if (confirm('你确定要删除选中的吗')) {
            // 1.获取tbody中所有被选中的复选框
            let chks = $('tbody .chkSingle:checked')
            // 2.遍历这些复选框 获取复选框所对应的的id
            let ids = [];
            for (let i = 0; i < chks.length; i++) {
                ids.push(chks[i].dataset['id']);
            }
            // 3.发起ajax请求
            $.ajax({
                url: '/deleteCate?id=' + ids.join(','),
                type: 'get',
                dataType: 'json',
                success: function (res) {
                    if (res.code == 200) {
                        $('.alert-danger > span').text(res.msg)
                        $('.alert-danger').fadeIn(500).delay(3000).fadeOut(500)
                        init()
                    }
                }
            })
        }
    })

})