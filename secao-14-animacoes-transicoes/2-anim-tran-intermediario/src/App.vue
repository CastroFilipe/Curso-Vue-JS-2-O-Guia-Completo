<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<b-button variant="primary" class="mb-4" @click="exibirFrase = !exibirFrase">Animar</b-button>

		<b-select v-model="tipoAnimacao" class="mb-4">
			<option value="fade">Aplicar fade</option>
			<option value="slide">Aplicar slide</option>
		</b-select>
		<transition :name="tipoAnimacao">
			<b-alert variant="success" show v-if="exibirFrase">Alerta 3 com slide: {{frase}}</b-alert>
		</transition>
	</div>
</template>

<script>

export default {
	data(){
		return {
			frase: 'uma frase para o usuário',
			exibirFrase: true,
			tipoAnimacao: 'slide'
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

.fade-enter, .fade-leave-to{
	opacity: 0;
}

.fade-enter-active, .fade-leave-active {
	transition: opacity 2s;
}

/*Os keyframes definem a animação. 
Nesse caso, uma transformação de baixo para cima(slide-out) ou de cima para baixo(slide-in) */
@keyframes slide-in {
	from { transform: translateY(10px);}
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
