<template>
  <div class="di">
    <p>这个文件描述如何通过第三方动画库来实现元素的过渡动画效果</p>
    <button @click="isShow = !isShow">点我啊</button>
    <transition
      enter-active-class="animated slideInRight"
      leave-active-class="animated slideOutRight"
    >
      <p class="myAnimate" v-show="isShow">这个是被操作的元素</p>
    </transition>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isShow: false
    }
  }
}
</script>

<style scoped>
.myAnimate {
    width: 200px;
}
</style>
