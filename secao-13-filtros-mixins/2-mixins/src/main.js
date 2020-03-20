import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/*mixin será aplicado a todos os componentes: Instancia do Vue criada em main.js, App.vue e Frutas.vue*/
Vue.mixin({
	created() {
		console.log('Método Created chamado - Mixin Global!')
	},
})

new Vue({
	render: h => h(App),
	created(){
		console.log('Instancia do vue criada!')
	}
}).$mount('#app')
