<template>
  <div id="app">
    <p>这个是根组件</p>
    <!-- 使用router-link实现路由导航
    <router-link to="/index">首页</router-link> &nbsp;&nbsp;&nbsp;&nbsp;
    <router-link to="/product/1">电脑</router-link> &nbsp;&nbsp;&nbsp;&nbsp;
    <router-link to="/product/2">手机</router-link> &nbsp;&nbsp;&nbsp;&nbsp;
    <router-link to="/product/3">水果</router-link>
    添加路由展示区域
    <router-view></router-view> -->
    <router-link to="/index">首页</router-link> &nbsp;&nbsp;&nbsp;&nbsp;
    <router-link to="/product/1">电脑</router-link> &nbsp;&nbsp;&nbsp;&nbsp;
    <router-link to="/product/2">手机</router-link> &nbsp;&nbsp;&nbsp;&nbsp;
    <router-link to="/product/3">水果</router-link>

    <!-- 添加路由展示区 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">

</style>
