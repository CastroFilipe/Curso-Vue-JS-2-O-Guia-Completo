import Vue from 'vue'
import App from './App.vue'

import './plugins/bootstrap-vue'
import './plugins/axios' //necessário para utilizar o axios dentro da instância do vue

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
