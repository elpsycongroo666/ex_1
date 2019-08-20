// 这个模块主要实现路由封装
// 1.引入 vue
import Vue from 'vue'
// 2.引入vue-router
import VueRouter from 'vue-router'

// 6.引入组件
import index from '@/components/index.vue'
import product from '@/components/product.vue'
// 3.use : 让vue使用vue-router进行路由管理
Vue.use(VueRouter)

// 4.创建路由对象:实现路由和组件的映射
const router = new VueRouter({
  // 5.添加路由配置，通过routes可以进行路由配置
  routes: [
    // 每一个单独的路由配置都是一个对象(每一个对象就是一个单独的路由配置)，一般来说，常见的配置属性有：
    // name:当前路由名称
    // path:路由路径
    // component:当前路由所映射的组件对象(不是字符串)
    {
      name: 'index',
      path: '/index',
      component: index
    },
    {
      name: 'product',
      path: '/product',
      component: product
    }
  ]
})

// 7.暴露
export default router
