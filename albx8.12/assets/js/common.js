
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
    // str:?id=5&name=jack
    getParameter(str){
        let obj = {}
        // 去除?
        str = str.substring(1);
        // 按照&符号进行分隔
        let arr = str.split('&');//["id=5","name=jack"]
        // 遍历
        for(let i = 0; i < arr.length; i++){
            let temp = arr[i].split('='); //["id","5"]
            obj[temp[0]] = temp[1]
        }
        return obj
    }
}