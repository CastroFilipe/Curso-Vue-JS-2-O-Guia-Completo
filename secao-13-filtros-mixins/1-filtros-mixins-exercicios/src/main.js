import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// criando filtro global
Vue.filter('inverter', (valor) => {
	return valor.split('').reverse().join('');
})

new Vue({
	render: h => h(App)
}).$mount('#app')
