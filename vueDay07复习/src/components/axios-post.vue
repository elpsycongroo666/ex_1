<template>
    <div class="box">
        <p>这个文件显示如何使用axios发起get请求</p>
        <input type="text" v-model="cateObj.slug"> <br>
        <input type="text" v-model="cateObj.name">
        <button @click="addNewCate">post请求</button>
    </div>
</template>
<script>
// import axios from 'axios'
import { addNewCate } from '../utils/myaxios.js'
export default {
  data () {
    return {
      cateObj: {
        slug: '',
        name: ''
      }
    }
  },
  methods: {
    addNewCate () {
      addNewCate(this.cateObj)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>

</style>
