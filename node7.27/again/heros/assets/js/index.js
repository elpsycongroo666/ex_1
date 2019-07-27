// 同过ajax请求 获取数据 加载到页面中
// 先创建一个ajax请求
const xhr = new XMLHttpRequest();
xhr.open('get','http://127.0.0.1:8888/getAllHero');
xhr.send();
xhr.onreadystatechange = function(){
    // 这个
}