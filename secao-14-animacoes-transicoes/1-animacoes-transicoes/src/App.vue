<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<b-button variant="primary" class="mb-4" @click="exibirFrase = !exibirFrase">Mostrar frase</b-button>

		<transition name="meuEstilo"><!--tag utilizada para transições-->
			<b-alert variant="success" show class="mb-1" v-if="exibirFrase">Alerta 2 com transição: {{frase}}</b-alert>
		</transition>

		<transition name="slide" appear><!--appear chama a transação no momento de criação do componente-->
			<b-alert variant="success" show v-if="exibirFrase">Alerta 3 com slide: {{frase}}</b-alert>
		</transition>
	</div>
</template>

<script>

export default {
	data(){
		return {
			frase: 'uma frase para o usuário',
			exibirFrase: true
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
/* padrão de nomeclatura para estilos aplicados em transições */
.meuEstilo-enter, .meuEstilo-leave-to{
	opacity: 0;
}

.meuEstilo-enter-active, .meuEstilo-leave-active {
	transition: opacity 2s;
}

/*TRECHO UTILIZADO PARA ANIMAÇÃO*/

/*Os keyframes definem a animação. 
Nesse caso, uma transformação de baixo para cima(slide-out) ou de cima para baixo(slide-in) */
@keyframes slide-in {
	from { transform: translateY(40px);}
	to {transform: translateY(0);}
}

@keyframes slide-out {
	from { transform: translateY(0px);}
	to {transform: translateY(40px);}
}

/*classes css que utilizam os frames criados*/ 
.slide-enter-active {
	animation: slide-in 2s ease;
	transition: opacity 2s;
}

.slide-leave-active {
	animation: slide-out 2s ease;
	transition: opacity 2s;
}

.slide-enter, .slide-leave-to{
	opacity: 0;
}
</style>
