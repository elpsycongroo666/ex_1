const express = require('express');
const app = express();
const router = require('./router');
const bodyParser = require('body-parser');
app.listen(8888,()=>{
    console.log('http://127.0.0.1:8888');
})

app.use('/assets',express.static('assets'));


app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended : false}));

app.use(router);
