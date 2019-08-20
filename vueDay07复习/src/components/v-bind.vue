<template>
    <div class="bind">
        <p>{{msg}}</p>
        <img :src="img" alt="">
        <a v-bind:href="'/del?id='+id">删除</a>
        <p :[prop]="username">动态绑定属性</p>
        <p>下面的示例为元素动态绑定样式</p>
        <p :class="{isRed:hasRed}">我是红色</p>
        <!-- 实现左侧展开和合并 -->
        <button @click="isCollpse=!isCollpse">点击展开和合并</button>
        <div :class="{left:true,collpse:isCollpse}"></div>
        <p :class="[isred,isunder]">HELLO</p>
        <!-- <p :style="'font-size:'+fontsize+'px'">大小</p> -->
        <p :style="{fontSize:fontsize+'px'}">字体</p>
    </div>
</template>

<script>
// @:代表当前项跟目录，跟目录 就是指入口文件所在的目录
// import img from '../assets/7yakcsfit0221.jpg'
import img from '@/assets/7yakcsfit0221.jpg'
export default {
    data:()=>{
        return{
            img : img,
            id: 4,
            msg : 'v-bind说明',
            prop : 'youname',
            username : 'jack',
            hasRed : true, // 标记当前元素是否应该是红色
            isCollpse : false,
            isred : 'isRed',
            isunder : 'under',
            fontsize : 30
        }
    }
}
</script>

<style lang="less" scoped>
    .isRed{
        color : red
    }
    .under{
        text-decoration: underline;
    }
    .left{
        width: 100px;
        height: 400px;
        border: 4px solid red;
        transition: width .4s;
    }
    .collpse{
        width: 30px;
    }
</style>