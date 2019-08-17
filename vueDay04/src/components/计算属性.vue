<template>
  <div class="data">
    <p>这个组件用来说明计算属性</p>
    <input type="text" v-model="firesText" />
    <input type="text" v-model="secondText" />
    <p>{{firesText.substr(0,1).toUpperCase() + firesText.substr(1) + ':' + secondText.substr(0,1).toUpperCase() + secondText.substr(1) + ':'}}</p>
    <p>{{joinName}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      firesText: '',
      secondText: ''
    }
  },
  computed: {
    joinName () {
      console.log(123)
      return this.firesText.substr(0, 1).toUpperCase() + this.firesText.substr(1) + ':' + this.secondText.substr(0, 1).toUpperCase() + this.secondText.substr(1) + ':'
    }
  }
}
</script>

<style lang="less" scoped>
</style>
