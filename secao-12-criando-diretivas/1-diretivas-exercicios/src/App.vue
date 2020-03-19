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
		<!-- Usando a diretiva global personalizada -->
		<p v-destaque="'brown'">Usando a diretiva personalizada v-destaque com passagem de valor</p>
		<p v-destaque="cor">Usando a diretiva personalizada v-destaque com passagem de valor</p>

		<p v-destaque="cor">passagem de valor sem a utilização do argumento</p>
		<p v-destaque:fundo="cor">Passagem de valor através do argumento 'fundo'</p>

		<!-- Exemplo de função: Aplicação atrasada do estilo -->
		<p v-destaque.atrasar="'orange'">Aplicação atrasada de estilo</p>
		<p v-destaque="'orange'">Aplicação instantânea de estilo</p>

		<!-- Diretiva local -->
		<p v-destaque-local>diretiva local</p>

		<!-- Diretiva com o modificador alternar cores -->
		<p v-estilo-local.alternar="'pink'">diretiva com modificador alternar</p>

		<!-- Diretiva com múltiplos modificadores -->
		<p v-estilo-local.alternar.atrasar="'pink'">diretiva com múltiplos modificadores: alternar e atrasar</p>
	</div>
</template>

<script>
export default {
	directives: {
		'destaque-local': {
			bind(el){
				el.style.fontSize = '4.0rem'
			}
		},
		//criação de diretiva para aplicação de mais de um modificador. Exemplo: v-estilo-local.fundo.atrasar.mod3.mod4...
		'estilo-local' :{
			bind(el, binding){
				const aplicarCor = cor => {
					if(binding.arg === 'fundo') {
						el.style.backgroundColor = cor
					} else {
						el.style.color = cor
					}
				}

				let tempoDeAtraso = 0
				if(binding.modifiers['atrasar']){
					tempoDeAtraso = 3500
				}

				const cor1 = binding.value
				const cor2 = 'purple'
				let corAtual = cor1

				setTimeout(() => {
					if(binding.modifiers['alternar']){//se existe o modificador alternar, ficará alternando as cores
						setInterval(() => {
							corAtual = corAtual === cor1 ? cor2 : cor1
							aplicarCor(corAtual)
						}, 1000)
					} else { //se não, aplicará a cor apenas uma vez
						aplicarCor(binding.value)
					}
				}, tempoDeAtraso)
			}
		}
	},
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
