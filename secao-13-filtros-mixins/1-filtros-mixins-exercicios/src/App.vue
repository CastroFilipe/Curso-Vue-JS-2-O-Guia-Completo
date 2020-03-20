<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<!-- valor | filtro -->
		<p>{{cpf | cpf}}</p>

		<!-- Aplicando mais de um filtro -->
		<p>{{cpf | cpf | inverter}}</p>

		<!-- v-bind:value suporta filtros -->
		<input type="text" value="cpf | cpf">
	</div>
</template>

<script>
export default {
	//criando filtro local para formatar cpf
	filters: {
		cpf(valor){
			valor = valor.replace(/[^\d]/g, "")//remove qualquer caractere que não seja um dígito.

			return valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
		}
	},
	data() {
		return {
			cpf: '10020030040'
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
	font-size: 2.5rem;
}

input {
	font-size: 2.5rem;
}
</style>
