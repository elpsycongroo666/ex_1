<template>
  <div class="first">
    <p>这个文件描述v-for的使用</p>
    <!-- 遍历数组 -->
    <p>对于数组，可以遍历出数组的value和index(值和索引)</p>
    <p>:key:可以是唯一标识当前数据行，后期的操作可以提高效率，这个值必须是唯一值</p>
    <ul>
      <li v-for="(value,index) in arr" :key="index">{{value +':' + index}}</li>
    </ul>
    <!-- 遍历对象 -->
    <p>对于对象，可以遍历出对象的value，key，index,(值,key,index)</p>
    <div v-for="(value,key,index) in obj" :key="index">{{value+':'+key+':'+index}}</div>
    <!-- 遍历对象数组 -->
    <table border="1" width="600px">
        <thead>
            <th>姓名</th>
            <th>年龄</th>
            <th>性别</th>
        </thead>
        <tbody>
            <tr v-for="(value,index) in userlist" :key="index">
                <td>{{value.name}}</td>
                <td>{{value.age}}</td>
                <td>{{value.gender}}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [1, 3, 5, 7, 9],
      obj: {
        name: "jack",
        age: 10,
        gender: "男"
      },
      userlist: [
        {
          name: "jack",
          age: 20,
          gender: "男"
        },
        {
          name: "rose",
          age: 20,
          gender: "女"
        },
        {
          name: "tom",
          age: 20,
          gender: "男"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
</style>