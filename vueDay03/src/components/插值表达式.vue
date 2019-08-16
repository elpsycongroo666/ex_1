<template>
  <div class="first">
    <p>{{msg}}</p>
    <!-- 1.拼接字符串 -->
    <p>{{msg + 'jack'}}</p>
    <!-- 2.实现简单的运算-表达式 -->
    <p>{{age + 1}}</p>
    <!-- 3.使用api -->
    <p>{{msg.toUpperCase()}}</p>
    <!-- 三元表达式 -->
    <p>{{gender ? '男': '女'}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "hello",
      age: 20,
      gender: true
    };
  }
};
</script>

<style lang="less" scoped>
</style>