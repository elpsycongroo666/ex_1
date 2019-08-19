// 这个模块主要实现路由封装
// 1.先创建引入vue
import Vue from 'vue'
// 2.下载引入router-vue
import VueRouter from 'vue-router'
// 5.引入组件
import index from '@/components/index.vue'
import product from '@/components/product.vue'
import computer from '@/components/computer.vue'
import mobile from '@/components/mobile.vue'
import fruit from '@/components/fruit.vue'
// 3.使用
Vue.use(VueRouter)

// 4.配置路由暴露
export default new VueRouter({
  // 5.添加路由配置，通过routes可以进行路由配置
  routes: [
    {
      name: 'default',
      path: '/',
      redirect: { name: 'index' }
    },
    {
      name: 'index',
      path: '/index',
      component: index
    },
    {
      name: 'product',
      path: '/product/:id',
      component: product,
      children: [
        {
          name: 'computer',
          path: 'computer',
          component: computer
        },
        {
          name: 'mobile',
          path: 'mobile',
          component: mobile
        },
        {
          name: 'fruit',
          path: 'fruit',
          component: fruit
        }
      ]
    }
    // {
    //   name: 'product',
    //   path: '/product',
    //   component: product
    // }
  ]
})
