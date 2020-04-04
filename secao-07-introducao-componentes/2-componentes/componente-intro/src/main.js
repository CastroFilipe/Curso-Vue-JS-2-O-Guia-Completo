import Vue from 'vue'
import App from './App.vue'
import Contadores from './Contadores.vue'//importando o componente criado

Vue.config.productionTip = false
Vue.component('app-contadores', Contadores)//referenciando o componente através da variável 'app-contador' de forma global

new Vue({
  render: h => h(App),
}).$mount('#app')