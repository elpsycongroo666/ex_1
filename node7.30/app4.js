const express = require('express');
const app = express();
const fs = require('fs');
app.listen(8888,()=>{
    console.log('http://127.0.0.1:8888');
})

app.use('/assets',express.static('assets'));

app.set('view engine','ejs');


app.get('/index',(req,res)=>{
    fs.readFile('./data/heros.json','utf-8',(err,data)=>{
        if(err) console.log(err)
        let arr = JSON.parse(data);
        res.render('index',{ arr });
    })
})
