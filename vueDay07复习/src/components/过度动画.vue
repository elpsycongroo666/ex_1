<template>
  <div class="fade">
    <button @click="isShow = !isShow">按钮</button>
    <transition name="fade">
      <!-- 1.将想要加过渡动画的元素包裹在transition组件中 -->
      <!-- 2.为transition添加name属性 -->
      <p v-show="isShow">我是被操作的元素</p>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: true
    }
  }
}
</script>

<style scoped>
.fade-enter {
  margin-left: 200px;
  opacity: 0;
}
.fade-enter-active {
    transition: all 1s;
}
.fade-enter-to {
  margin-left: 0px;
  opacity: 1;
}
.fade-leave {
  margin-left: 0px;
  opacity: 1;
}
.fade-leave-active {
    transition: all 1s;
}
.fade-leave-to {
  margin-left: 200px;
  opacity: 0;
}
</style>
