function ajax(options) {
  options = options || {};
  options.type = options.type || 'get';
  options.url = options.url || '';
  options.callback = options.callback || function(res){ 
    console.log('你的回调函数没给，我们不建议这样干');  
    console.log(res); 
  }

  let xhr = new XMLHttpRequest();
  // 如果是get请求，把数据拼接在url的后面的
  if(options.type === 'get'){
    // 127.0.0.1:8080/getCode?phone=13377890765
    options.url += '?' + options.data;
  } 
  xhr.open(options.type,options.url);
  // 如果是post请求， 把数据放在send的里面，在之前还要设置请求头
  if(options.type === 'post'){
    // 先设置请求头
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
    xhr.send(options.data);
  }else {
    xhr.send();
  }
  
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
      if(xhr.status === 200){
        // 请求成功
        // console.log(xhr.responseText);
        // 如果遇上别人的逻辑在封装的代码里面，最好的处理方式——回调函数
        options.callback(xhr.responseText);
      }
    }
  }
}