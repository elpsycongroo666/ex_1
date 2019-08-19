// 引入vue
import Vue from 'vue'
// 下载引入路由
import VueRouter from 'vue-router'
// 引入组件
import index from '@/components/index.vue'
import product from '@/components/product.vue'
import computer from '@/components/computer.vue'
import mobile from '@/components/mobile.vue'
import fruit from '@/components/fruit.vue'

// 使用
Vue.use(VueRouter)

// 配置
const router = new VueRouter({
  routes: [
    {
      name: 'default',
      path: '/',
      // 当打开根组件的时候，让其自动的进行重定向--让其再映射下一个组件
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
      // 添加嵌套路由
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
  ]
})

// 暴露
export default router
