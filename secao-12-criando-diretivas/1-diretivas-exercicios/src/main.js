import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//trecho que criará a diretiva global nomeada como 'destaque'
Vue.directive('destaque', {
	bind(el){
		el.style.backgroundColor = 'lightgreen'
	}
})

new Vue({
	render: h => h(App),
}).$mount('#app')
