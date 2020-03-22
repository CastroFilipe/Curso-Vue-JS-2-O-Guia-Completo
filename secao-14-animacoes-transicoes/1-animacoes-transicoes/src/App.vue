<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<b-button variant="primary" class="mb-4" @click="exibirFrase = !exibirFrase">Mostrar frase</b-button>
		
		<b-alert variant="info" show v-if="exibirFrase">Alerta sem transição: {{frase}}</b-alert>

		<transition name="meuEstilo"><!--tag utilizada para transições-->
			<b-alert variant="success" show v-if="exibirFrase">Alerta com transição: {{frase}}</b-alert>
		</transition>
	</div>
</template>

<script>

export default {
	data(){
		return {
			frase: 'uma frase para o usuário',
			exibirFrase: false
		}
	}
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
.meuEstilo-enter {
	opacity: 0;
}

.meuEstilo-enter-active {
	transition: opacity 2s;
}

.meuEstilo-enter-to {
	opacity: 1;
}

.meuEstilo-leave {
	opacity: 1;
}

.meuEstilo-leave-active {
	transition: opacity 2s;
}

.meuEstilo-leave-to {
	opacity: 0;
}
</style>
