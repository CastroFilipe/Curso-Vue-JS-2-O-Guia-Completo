import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//filtro global para contar caracteres de cada palavra
Vue.filter('contarCaracteres', (valor) => {
	valor = valor.split(' ')
	console.log(valor)

	valor = valor.map((palavra) => {
		return `${palavra}(${palavra.length}) ` 
	})

	return valor.join('')
})

new Vue({
	render: h => h(App),
}).$mount('#app')
