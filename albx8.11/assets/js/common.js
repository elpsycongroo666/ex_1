
var itcase = {
    getRouterName(str) {
        // 那就先获取路由名称
        let index = str.indexOf('?')//查询参数标记
        let routerName = ''
        if (index == -1) {//说明没有参数
            routerName = str.substring(str.lastIndexOf('/') + 1)
        } else {
            routerName = str.substring(str.lastIndexOf('/') + 1, str.indexOf('?'))
        }
        return routerName;
    },

    // str = 'id=1&name=jack'
    getParameter(str){
        str = str.substring(1);
        let obj = {};
        let temp = str.split('&') // ["id=1", "name=jack"]
        for(let i = 0; i < temp.length; i++){
            let arr = temp[i].split('=');//["id","1"] ["name", "jack"]
            obj[arr[0]] = arr[1];
        }
        return obj;
    }
}