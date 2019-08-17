import Vue from 'vue'
// import App from './App.vue'
// import first from './components/插值表达式.vue'
// import first from './components/v-text.vue'
// import first from './components/v-html.vue'
// import first from './components/v-bind.vue'
// import first from './components/v-for.vue'
// import first from './components/v-model.vue'
// import first from './components/v-on.vue'
import first from './components/案例.vue'
// import first from './components/计算属性.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(first)
}).$mount('#app')
