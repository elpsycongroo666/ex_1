<template>
  <div class="first">
    <p>这个文件讲解v-model双向数据绑定</p>
    <!-- v-model只支持：input select textarea -->
    <!-- <p v-model="username">aaa</p> -->
    <p>登录</p>用户名：
    <input type="text" v-model="loginForm.userName" />
    <br />密码：
    <input type="text" v-model="loginForm.userPassword" />
    <br />
    <input type="button" value="登录" @click="login" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      // userName :'',
      // userPassword :''
      // 为了得到数据是一个对象
      loginForm: {
        userName: "",
        userPassword: ""
      }
    };
  },
  methods: {
    login() {
      console.log(this.loginForm);
    }
  }
};
</script>

<style lang="less" scoped>
</style>