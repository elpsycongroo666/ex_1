// 使用ajax请求获取所有的英雄数据
const xhr = new XMLHttpRequest();
// 获取tr的父元素 添加到页面中
let tbody = document.querySelector('#tbody');
xhr.open('get', 'http://127.0.0.1:8080/getAllHero');
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let res = JSON.parse(xhr.responseText);
        // 把数据加载到页面中
        html = '';
        res.forEach(e => {
            html += `<tr>
            <td>${e.id}</td>
            <td>${e.name}</td>
            <td>${e.gender}</td>
            <td><img src="${e.img}"></td>
            <td><a href="./edit.html?id=${e.id}">修改</a> 
              <a data-id="${e.id}" href="javascript:void(0);">删除</a>
            </td>
          </tr>`
        });
        tbody.innerHTML = html;
    }
}