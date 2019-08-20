import Vue from 'vue'
import 'animate.css'
// import axios from 'axios'
// import App from './App.vue'
// import first from './components/插值表达式.vue'
// import first from './components/v-text.vue'
// import first from './components/v-html.vue'
// import first from './components/v-bind.vue'
// import first from './components/v-for.vue'
// import first from './components/v-model.vue'
// import first from './components/v-on.vue'
// import first from './components/案例.vue'
// import first from './components/计算属性.vue'
// import first from './components/深度监听.vue'
// import first from './components/过度动画.vue'
// import first from './components/过度动画.vue'
// import first from './components/axios-get.vue'
// import first from './components/axios-post.vue'
import App from './components/案例2.vue'
// 引入路由模块
// import router from '@/router/index.js'
// import router from '@/router/index3.js'
// 引入根组件
// import App from './App.vue'
// Vue.use(axios)

Vue.config.productionTip = false

new Vue({
  // 注入路由：让当前应用使用我们所配置好的
  // router,
  // el : '#app'
  // 渲染组件到页面
  render: h => h(App)
}).$mount('#app')
