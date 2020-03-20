<template>
  <div id="app">
    <h1>DIRETIVAS</h1>
    <hr>
	<p v-dir1="'yellow'">aplicação dir1</p>

	<p v-dir2:fundo.atrasar.alternar="{cor1: 'green', cor2: 'blue', cor3: 'pink', atraso: 3000, intervalo: 500}">
		aplicação de múltiplos modificadores
	</p>
  </div>
</template>

<script>


export default {
	//diretivas no componente local.
	directives: {
		dir1: {
			bind(el, binding){
				el.style.backgroundColor = binding.value
			}
		},

		dir2: {
			bind(el, binding){
				const propriedades = binding.value

				const aplicarCor = cor => {
					if(binding.arg === 'fundo') {
						el.style.backgroundColor = cor
					} else {
						el.style.color = cor
					}
				}

				let corAtual = propriedades.cor2

				setTimeout(()=>{	
					if(binding.modifiers['alternar']){
						setInterval(() => {
							corAtual = corAtual === propriedades.cor2 ? propriedades.cor3 : propriedades.cor2
							aplicarCor(corAtual)
						}, propriedades.intervalo)
					} else { //se não, aplicará a cor apenas uma vez
						aplicarCor(corAtual)
					}
				}, propriedades.atraso)
			
			}
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
	font-size: 2.5rem;
}
</style>
