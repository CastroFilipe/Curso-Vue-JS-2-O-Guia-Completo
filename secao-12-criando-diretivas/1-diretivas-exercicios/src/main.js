import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//trecho que criará a diretiva global nomeada como 'destaque'
Vue.directive('destaque', {
	bind(el, binding){

		if(binding.arg === 'fundo') {
			el.style.backgroundColor = binding.value
		} else {
			el.style.color = binding.value
		}
		
	}
})

new Vue({
	render: h => h(App),
}).$mount('#app')
