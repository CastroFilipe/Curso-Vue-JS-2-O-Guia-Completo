<template>
	<div id="app" class="container-fluid">
		<h1>Transições de componentes dinamicos</h1>
		<hr>
		
		<b-button class="mb-3" @click="trocarComponente">Trocar componente</b-button>

		<transition name="slide" mode="out-in">
			<component :is="componenteSelecionado"></component>
		</transition>
	</div>
</template>

<script>
import AlertaPerigo from '@/components/AlertaPerigo.vue'
import AlertaSeguro from '@/components/AlertaSeguro.vue'

export default {
	components: {AlertaPerigo, AlertaSeguro},
	data(){
		return {
			componenteSelecionado: 'AlertaSeguro'
		}
	},
	methods: {
		trocarComponente(){
			this.componenteSelecionado = this.componenteSelecionado == 
			'AlertaSeguro' ? 'AlertaPerigo' : 'AlertaSeguro'
		}
	},		
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 1.5rem;
}

@keyframes slide-in {
	from { transform: translateY(5px);}
	to {transform: translateY(0);}
}

@keyframes slide-out {
	from { transform: translateY(0px);}
	to {transform: translateY(5px);}
}

/*classes css que utilizam os frames criados*/ 
.slide-enter-active {
	animation: slide-in 0.5s ease;
	transition: opacity 0.5s;
}

.slide-leave-active {
	animation: slide-out 0.5s ease;
	transition: opacity 0.5s;
}

.slide-enter, .slide-leave-to{
	opacity: 0;
}
</style>
