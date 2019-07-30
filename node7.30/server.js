// const express = require('express');
// const app = express();
// app.listen(8888,()=>{
//     console.log('http://127.0.0.1:8888');
// })

// // 处理静态资源
// app.use('/views',express.static('views'));
// app.use('/assets',express.static('assets'));

// app.get('/',(req,res)=>{
//     res.send('你好世界');
// })

// const express = require('express');
// const app = express();
// app.listen(8888,()=>{
//     console.log('http://127.0.0.1:8888');
// })

// // 处理静态资源
// app.use('/assets',express.static('assets'));
// app.use('/views',express.static('views'));

// // 使用app监听浏览器的请求
// // app.get(访问的url，处理请求的对应的函数)
// app.get('/',(req,res)=>{
//     res.send('你好啊，勇士');
// })


// const express = require('express');
// const app = express();
// app.listen(8888,()=>{
//     console.log('http://127.0.0.1:8888');
// })

// app.use('/views',express.static('views'));
// app.use('/assets',express.static('assets'));

// app.get('/',(req,res)=>{
//     res.send('!!!!');
// })


const express = require('express');
const app = express();
app.listen(8888,()=>{
    console.log('http://127.0.0.1:8888');
})

app.use('/assets',express.static('assets'));
app.use('/views',express.static('views'));

// app.use(express.static('views'));
// app.use(express.static('assets'));
// 如果用这个方法处理静态资源，在访问的时候，不需要带上指定的文件夹的
app.get('/',(req,res)=>{
    res.send('!');
})