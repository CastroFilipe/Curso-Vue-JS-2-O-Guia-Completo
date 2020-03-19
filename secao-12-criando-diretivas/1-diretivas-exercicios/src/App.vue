<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr>
		<!-- As diretiva interpretam códigos javascript válidos, por isso nesse exemplo o texto é uma String dentro de aspas simples.
		O texto dentro da tag p será o texto passado na diretiva. Para ver esse comportamento, inspecionar o elemento. -->
		<p v-text="'Usando diretiva v-text.'"></p>

		<!-- A diretiva v-html interpreta as tags html. Ler sobre ataques cross site scripting -->
		<p v-html="'usando a diretiva v-html que interpreta <strong>tags html</strong>'"></p>
		<hr>
		<!-- Usando a diretiva personalizada -->
		<p v-destaque="'brown'">Usando a diretiva personalizada v-destaque com passagem de valor</p>
		<p v-destaque="cor">Usando a diretiva personalizada v-destaque com passagem de valor</p>

		<p v-destaque="cor">passagem de valor sem a utilização do argumento</p>
		<p v-destaque:fundo="cor">Passagem de valor através do argumento 'fundo'</p>

	</div>
</template>

<script>
export default {
	data() {
		return {
			cor : 'green'
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
</style>
