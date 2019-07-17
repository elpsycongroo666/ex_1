// 首先 我们要想在jq中添加很多的方法 就必须在原型上面 添加方法 那么 就必须要有构造函数

// 所以我们的第一步就是创建构造函数

; (function () {
    function Init(selector) {
        // 获取元素 是以css选择器的方式 所以我们用
        let lis = document.querySelectorAll(selector)
        // 为了能有伪数组的样子 我们需要遍历 数组 将数组的索引和元素都显示出来
        for (let i = 0; i < lis.length; i++) {
            // 因为我们这个是构造函数 所以我们的this指向的是实例对象
            this[i] = lis[i]; // => 将伪数组的内容传给this这个实例对象
        }
        // 我们单单有元素和索引还不够 还要有长度
        this.length = lis.length;
    }
    // 考虑到我们会经常使用遍历 使用 我们先封装一个遍历的方法each
    Init.prototype.each = function (callback) { //考虑到我们的逻辑不一定 所以这里使用一个回调函数
        for (let i = 0; i < this.length; i++) {
            return callback(i, this[i]);
        }
    }

    // 封装一个css的方法
    Init.prototype.css = function (property, value) {//首先由两个参数的情况 就是设置css  只有一个属性的情况就是获取属性值
        if (value != undefined) { //如果有输入value的值 那么就是设置
            // 设置值中 还会分一些 带单位和不带单位的情况 如果带单位就还要判断 有没有写单位 不带单位的就如颜色这种
            // 所以我们先创建一个数组 把所有带单位的属性 先放到里面去 
            let arr = ['width', 'height', 'top', 'left'];
            // 要给每一个都设置所以要遍历
            this.each( (i,e) =>{
                if (arr.indexOf(property) !== -1) {// 那就是包含在里面的
                    if (value.toString().indexOf('px') !== -1) {
                        e.style[property] = value;
                    } else {
                        e.style[property] = value + 'px';
                    }
                } else {
                   e.style[property] = value;
                }
            })
        }else{
            return window.getComputedStyle(this[0])[property]; //因为有可能其他同类名的的元素 的样式不同 所以我们只能每次获取一个的样式
        }
        return this;
    }

    // 为了方便我们的书写 所以我们又创建一个构造函数 
    function jQuery(selector) {
        return new Init(selector);
    }


    // 转换成全局变量
    window.$ = window.jQuery = jQuery;
})()


let box  = jQuery('.box');
box.css('color','blue');