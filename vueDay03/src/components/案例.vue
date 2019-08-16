<template>
  <div id="app">
    <div class="add">
      编号:
      <input type="text" v-model="brand.id" ref="id" /> 品牌名称:
      <input type="text" v-model="brand.bname" ref="bname" v-myfocus />
      <input type="button" value="添加" @click="add" />
    </div>
    <div class="add">
      品牌名称:
      <input type="text" placeholder="请输入搜索条件" />
    </div>
    <div>
      <table class="tb">
        <tbody>
          <tr>
            <th>编号</th>
            <th>品牌名称</th>
            <th>创立时间</th>
            <th>操作</th>
          </tr>
          <tr v-for="(value,index) in brandlist" :key="index">
            <td>{{value.id}}</td>
            <td>{{value.bname}}</td>
            <td>{{value.time}}</td>
            <td>
              <a href="#" @click.prevent="del(index)">删除</a>
            </td>
          </tr>
          <tr>
            <td colspan="4" v-show="brandlist.length == 0">没有任何数据，请先添加</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// 引入定义好全局自定义指令
// 使用到了对象的解构
import { myfocus } from '@/directives/userDirective.js'
export default {
  data () {
    return {
      brand: {
        id: '',
        bname: ''
      },
      brandlist: [
        {
          id: 1,
          bname: '玛莎拉蒂',
          time: new Date()
        },
        {
          id: 2,
          bname: '劳斯莱斯',
          time: new Date()
        },
        {
          id: 3,
          bname: '兰博基尼',
          time: new Date()
        }
      ]
    }
  },
  methods: {
    //   添加
    add () {
      this.brand.time = new Date()
      this.brandlist.push({ ...this.brand })
    },
    del (index) {
      this.brandlist.splice(index, 1)
    }
  },
  // 组件加载完毕，就会自动触发的函数
  // mounted(){
  //     // console.log(this.$refs);
  //     this.$refs.bname.focus();
  // }

  // 实现指令的注册
  directives: {
    myfocus
  }
}
</script>

<style lang="less" scoped>
#app {
  width: 600px;
  margin: 10px auto;
}

.tb {
  border-collapse: collapse;
  width: 100%;
}

.tb th {
  background-color: #0094ff;
  color: white;
}

.tb td,
.tb th {
  padding: 5px;
  border: 1px solid black;
  text-align: center;
}

.add {
  padding: 5px;
  border: 1px solid black;
  margin-bottom: 10px;
}
</style>
