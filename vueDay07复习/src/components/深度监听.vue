<template>
    <div class="div">
        <input type="text" v-model="currentUser.name">
        <input type="text" v-model="currentUser.age">
        <p>{{currentUser.name + ':' + currentUser.age}}</p>
    </div>
</template>

<script>
export default {
  data () {
    return {
      currentUser: {
        name: 'jack',
        age: 20
      }
    }
  },
  watch: {
    //   常规方式
    // currentUser: {
    //   handler (newV, oldV) {
    //     console.log(newV.name, oldV.name)
    //     console.log(newV.age, oldV.age)
    //   },
    //   deep: true
    // }
    'currentUser.name' (newV, oldV) {
      console.log(newV, oldV)
    }
  }
}
</script>
<style scoped>

</style>
