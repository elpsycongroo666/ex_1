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
import first from './components/axios-post.vue'

// Vue.use(axios)

Vue.config.productionTip = false

new Vue({
  render: h => h(first)
}).$mount('#app')
