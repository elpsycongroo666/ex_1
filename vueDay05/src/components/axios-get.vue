<template>
  <div class="box">
    <p>这个文件显示如何使用axios发起get请求</p>
    <button @click="getCateList">get请求-无参</button>
    <button @click="getPostById">get请求-有参</button>
  </div>
</template>
<script>
import { getPostById, getAllCate } from '../utils/myaxios'
import axios from 'axios'
export default {
  methods: {
    //     getAllCate () {
    //       axios.get('http://127.0.0.1:8888/getAllCate')
    //         .then(function (res) {
    //           console.log(res)
    //         })
    //         .catch(function (err) {
    //           console.log(err)
    //         })
    //     },
    //     getPostById () {
    //       axios.get('http://127.0.0.1:8888/getPostById?id=15')
    //         .then((res) => {
    //           console.log(res)
    //         })
    //         .catch((err) => {
    //           console.log(err)
    //         })
    //     }
    // getPostById () {
    //   axios.get('http://127.0.0.1:8888/getPostById', { params: { id: 15 } })
    //     .then((res) => {
    //       console.log(res)
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //     })
    // },
    // 封装好来用
    getPostById () {
      getPostById({ id: 15 })
        .then((res) => {
          console.log(res)
        })
        // catch就是请求失败时调用，里面一个回调函数，传入错误信息对象
        .catch((err) => {
          console.log(err)
        })
    },
    getCateList () {
      getAllCate()
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
<style lang="stylus" scoped></style>
