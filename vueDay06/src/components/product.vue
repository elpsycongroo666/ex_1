<template>
    <div class="product">
        <h1>产品</h1>
        <p>{{info}}</p>
        <button @click="dateil">商品详情</button>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
  data () {
    return {
      info: '??'
    }
  },
  methods: {
    dateil () {
      // 获取数据
      let id = this.$route.params.id
      console.log(this.$router)
      if (id === '1') {
        this.$router.push({ name: 'computer' })
      } else if (id === '2') {
        this.$router.push({ name: 'mobile' })
      } else if (id === '3') {
        this.$router.push({ name: 'fruit' })
      }
    }
  },
  // 钩子函数只能监听路由的组件部分 监听不了参数部分
  // 组件一加载就可以触发的钩子函数
  mounted () {
    // 获取数据
    // console.log(this.$route)
    let id = this.$route.params.id
    if (id === '1') {
      this.info = '这个是电脑产品'
    } else if (id === '2') {
      this.info = '这个是手机产品'
    } else if (id === '3') {
      this.info = '这个是水果产品'
    }
  },
  //   所以我们要用侦听器来监听参数的变化
  watch: {
    //   to 新 from旧
    '$route' (to, from) {
      console.log(to)
      let id = to.params.id
      if (id === '1') {
        this.info = '这个是电脑产品'
      } else if (id === '2') {
        this.info = '这个是手机产品'
      } else if (id === '3') {
        this.info = '这个是水果产品'
      }
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>
