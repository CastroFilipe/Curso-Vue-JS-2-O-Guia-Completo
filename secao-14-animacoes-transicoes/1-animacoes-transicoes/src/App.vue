<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<b-button variant="primary" class="mb-4" @click="exibirFrase = !exibirFrase">Mostrar frase</b-button>
		
		<transition name="meuEstilo"><!--tag utilizada para transições-->
			<b-alert variant="info" show v-if="exibirFrase">{{frase}}</b-alert>
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

}

.meuEstilo-enter-active {

}

.meuEstilo-enter-to {

}

.meuEstilo-leave {

}

.meuEstilo-leave-active {

}

.meuEstilo-leave-to {

}
</style>
