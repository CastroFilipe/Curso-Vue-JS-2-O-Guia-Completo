import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//trecho que criará a diretiva global nomeada como 'destaque'
Vue.directive('destaque', {
	bind(el, binding){

		let tempoDeAtraso = 0
		if(binding.modifiers['atrasar']){//verifica se dentre os modificadores passados existe algum nomeado 'atrasar'
			tempoDeAtraso = 3000
		}

		//se o modificador 'atrasar' foi utilizado, então o estilo será aplicado após o tempo setado
		setTimeout(() => {
			if(binding.arg === 'fundo') {
				el.style.backgroundColor = binding.value
			} else {
				el.style.color = binding.value
			}
		}, tempoDeAtraso)	
	}
})

new Vue({
	render: h => h(App),
}).$mount('#app')
