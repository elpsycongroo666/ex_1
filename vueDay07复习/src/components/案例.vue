<template>
  <div id="app">
    <div class="add">
      编号:
      <input type="text" v-model="brand.id" ref="id" /> 品牌名称:
      <input type="text" v-model="brand.bname" ref="bname" v-myfocus v-mycolor="usercolor" />
      <input type="button" value="添加" @click="add" />
    </div>
    <div class="add">
      品牌名称:
      <input type="text" placeholder="请输入搜索条件" v-model="userkey" />
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
          <tr v-for="(value,index) in arr" :key="index">
            <td>{{value.id}}</td>
            <td>{{value.bname}}</td>
            <td>{{value.time | timeformat('-')}}</td>
            <td>
              <a href="#" @click.prevent="del(index)">删除</a>
            </td>
          </tr>
          <tr>
            <td colspan="4" v-show="arr.length == 0">没有任何数据，请先添加</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// 引入定义好全局自定义指令
// 引入时间格式对象
// 使用到了对象的解构
import { myfocus, mycolor } from '@/directives/userDirective.js'
// import moment from 'moment'
export default {
  data () {
    return {
      usercolor: 'blue',
      userkey: '',
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
      ],
      arr: [{
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
      }]
    }
  },
  methods: {
    //   添加
    add () {
      this.brand.time = new Date()
      this.brandlist.push({ ...this.brand })
    },
    // 删除
    del (index) {
      this.brandlist.splice(index, 1)
    }
  },
  // 组件加载完毕，就会自动触发的函数
  // mounted(){
  //     // console.log(this.$refs);
  //     this.$refs.bname.focus();
  // }
  // 定义局部指令
  // directives: {
  //   color: {
  //     inserted (el, binding) {
  //       el.style.color = binding.value
  //       console.log(binding)
  //     }
  //   }
  // }

  // 实现全局指令的注册
  directives: {
    myfocus,
    mycolor
  },
  // 使用局部过滤器来修改时间的格式
  filters: {
    // 默认传入的参数一定是第一个
    timeformat (time, spe) {
      // console.log(time)
      // return moment(this.time).fomat('YYYY-MM-DD HH-mm-ss')
      let year = time.getFullYear()
      let month = time.getMonth() + 1
      let day = time.getDate()
      return year + spe + month + spe + day
    }
  },
  // 使用计算属性来实现数据的筛选
  // computed: {
  //   search () {
  //     // let arr = []
  //     // for (var i = 0; i < this.brandlist.length; i++) {
  //     //   if (this.brandlist[i].bname.indexOf(this.userkey) !== -1) {
  //     //     arr.push(this.brandlist[i])
  //     //   }
  //     // }
  //     // return arr
  //     return this.brandlist.filter(e => {
  //       return e.bname.indexOf(this.userkey) !== -1
  //     })
  //   }
  // },
  watch: {
    userkey: function (newVal, oldVal) {
      console.log(newVal)
      console.log(this.arr)
      this.arr = this.brandlist.filter((e) => {
        return e.bname.indexOf(newVal) !== -1
      })
    }
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
