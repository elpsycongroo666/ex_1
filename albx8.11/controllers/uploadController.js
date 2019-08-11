// 下载引入formidable模块
const formidable = require('formidable');
// 引入path核心模块 可以去nodejs文档查看效果
const path = require('path');

exports.uploadFile = (req,res) => {

    // 创建文件上传对象
    var form = new formidable.IncomingForm()
    // 修改编码格式 这个编码格式与上传的文件的编码格式无关 是用来修改普通键值对的
    form.encoding = 'utf-8';
    // 设置文件上传到的位置的路径 一定要设置正确
    form.uploadDir = __dirname + "/../uploads";
    // 是否要保留扩展名 是的 扩展名的作用 就是为了给文件设置一个默认的打开方式而已
    form.keepExtensions = true;
    // 调用方法实现文件上传
    // req：请求报文 传递的文件就在请求报文的请求体中
    // 三个回调函数
    // err：错误信息对象
    // fields：普通键值对 有s就代表可以传多个
    // files：文件上传完成之后的相关信息，主要是存储上传成功之后的信息
    form.parse(req, function(err, fields, files) {
        console.log(files)
        if(err){
            res.json({
                code :400,
                msg : '文件上传失败',
            })
        }else{
            // 上传成功之后 要把文件的路径返回给前台 让前台再次发起请求 然后通过请求得到想要的图片 才能实现预览效果 （二次请求）
            let imgname = path.basename(files.img.path)//这里的img是通过前台给文件 append的时候传进来的键 append('img',file)
            res.json({
                code : 200,
                msg : '文件上传成功',
                img : imgname
            })
        }
      });
}