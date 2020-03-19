import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//trecho que criará a diretiva global nomeada como 'destaque'
Vue.directive('destaque', {
	bind(el, binding){
		el.style.backgroundColor = binding.value//usará o valor passado na diretiva para definir a cor de fundo
	}
})

new Vue({
	render: h => h(App),
}).$mount('#app')
