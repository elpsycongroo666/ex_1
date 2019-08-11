$(function(){
    // 根据路由名称来判断
    // 获取元素
    let menuPosts = $('#menu-posts');
    let menuSettings = $('#menu-settings');
    let routerName = itcase.getRouterName(location.href);//为了防止别的页面也会用到 所以封装了一个获取路由名字 的方法
    // 判断是否展开
    if(routerName == 'posts' || routerName == 'post-add' || routerName == 'categories'){
        // 实现展开
        menuPosts.addClass('in').attr('aria-expanded',true);
    }
    if(routerName == 'nav-menus' || routerName == 'slides' || routerName == 'settings'){
        // 实现展开
        menuSettings.addClass('in').attr('aria-expanded',true);
    }
    // 根据路由名字来添加光亮
    $('#'+routerName).addClass('active');
})