$(function () {
    
    function init(){
        $.ajax({
            url: '/getMenu',
            type: 'get',
            dataType: 'json',
            success: function (res) {
                // res = JSON.parse(res);
                console.log(res);
                // let data = JSON.parse(res.data)
                // console.log(data);
                let str = template('munu',res);
                $('tbody').html(str);
            }
        })
    }
    init();
    $('.btnAdd').on('click', function () {
        $.ajax({
            url: '/addMenu',
            type: 'post',
            data: $('form').serialize(),
            dataType: 'json',
            success: function (res) {
                //  console.log(res);
                if (res.code == 200) {
                    alert(res.msg);
                    init();
                }
            }
        })
    })


})