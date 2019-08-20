<template>
<div id="app">
        <div class="add">
            编号:
            <input type="text" v-model="brand.id" v-myfocus v-mycolor="color"> 品牌名称:
            <input type="text" v-model="brand.bname">
            <input type="button" value="添加" @click="add">
        </div>
        <div class="add">
            品牌名称:
            <input type="text" v-model="userkey" placeholder="请输入搜索条件">
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
                        <td>{{value.time | timefomat('-')}}</td>
                        <td>
                            <a href="#" @click="del(index)">删除</a>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="4" v-show="arr.length == 0">没有任何数据请先添加</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
// import moment from 'moment'
export default {
  data () {
    return {
      userkey: '',
      color: 'red',
      brand: {
        id: '',
        bname: ''
      },
      brandlist: [
        {
          id: 1,
          bname: '阿里百秀',
          time: new Date()
        },
        {
          id: 2,
          bname: '品优购',
          time: new Date()
        },
        {
          id: 3,
          bname: '学成在线',
          time: new Date()
        }
      ],
      arr: [
        {
          id: 1,
          bname: '阿里百秀',
          time: new Date()
        },
        {
          id: 2,
          bname: '品优购',
          time: new Date()
        },
        {
          id: 3,
          bname: '学成在线',
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
    // 删除
    del (index) {
      this.brandlist.splice(index, 1)
    }
  },
  //   定义局部指令
  directives: {
    myfocus: {
      inserted (el) {
        el.focus()
      }
    },
    mycolor: {
      inserted (el, binding) {
        el.style.color = binding.value
        // console.log(binding)
      }
    }
  },
  //   定义过滤器来设置时间格式
  filters: {
    timefomat (time, spe) {
      let year = time.getFullYear()
      let month = time.getMonth() + 1
      let day = time.getDate()
      return year + spe + month + spe + day
    }
  },
  //   使用计算属性来实现筛选
  //   computed: {
  //     search () {
  //       return this.brandlist.filter((e) => {
  //         return e.bname.indexOf(this.userkey) !== -1
  //       })
  //     }
  //   }

  // 使用侦听器来实现筛选
  watch: {
    userkey (newVal, oldVal) {
      // console.log()
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
