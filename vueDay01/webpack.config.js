var path = require('path');


module.exports = {
    // 入口：你想打包构建的源文件路径--相对路径 
    entry: './src/app.js',
    // 输出：指定将源文件打包构建放置到哪个文件夹 哪个文件名
    output: {
        // 这个路径3.*版本开始，就需要是一个绝对路径
        // 指定文件目录
        path: path.join(__dirname, 'dist'),
        // 指定文件名
        filename: 'main.js'
    },
    devServer: {
        //设置你的托管资源的存放目录，同时这个目录提供外部的访问，默认会自动生成一个main.js文件
        publicPath: '/dist'
    },
    // 这个模块专门用于加载loader
    module: {
        // 加载规则，什么类型的文件你要使用什么样的loader进行解析处理
        rules: [
            // 添加对css的支持
            {
                // 正则表达式：意味着后期以.css结尾的文件都会使用下面使用的loader来处理
                test: /\.css$/i,
                // css-loader：将css模块处理解析为浏览器可以识别的css代码
                // style-loader：将解析过后的css 代码添加到页面中
                // 加载loader是从右到左
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
}