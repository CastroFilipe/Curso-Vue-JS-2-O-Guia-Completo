<template>
	<div id="app" class="container-fluid">
		<h1>Transições com Javascript</h1>
		<hr>
		
		<b-button @click="exibir2 = !exibir2">Mostrar</b-button>
		<!-- Eventos de transição -->
		<!-- :css="false" garante a excluzão de qualquer css da animação/transição -->
		<transition
			:css="false"
			@before-enter="beforeEnter"
			@enter="enter"
			@after-enter="afterEnter"
			@enter-cancelled="enterCancelled"

			@before-leave="beforeLeave"
			@leave="leave"
			@after-leave="afterLeave"
			@leave-cancelled="leaveCancelled">
			<div v-if="exibir2" class="caixa"></div>
		</transition>
	</div>
</template>

<script>

export default {
	data(){
		return {
			exibir2: true,
			tipoAnimacao: 'slide',
			larguraBase: 0
		}
	},
	methods: {
			beforeEnter(el){
				this.larguraBase = 0
				el.style.width = `${this.larguraBase}px`
			},

			enter(el, done){//done() será chamado indicando opara o vue que a animação foi concluída
				let rodada = 1
				const temporizador = setInterval(() => {
					//adiciona rodada*10 a largura do componente a cada 20 ms
					const novaLargura = this.larguraBase + rodada * 10 
					el.style.width = `${novaLargura}px`//adiciona a largura calculada ao componente
					rodada++
					//após a 30° rodada, limpa o temporizador e chama a função done() indicando fim da animação
					if(rodada > 30){
						clearInterval(temporizador)
						done()
					}
				}, 20);

			},

			beforeLeave(el){
				this.larguraBase = 300
				el.style.width = `${this.larguraBase}px`
			},

			leave(el, done){
				let rodada = 1
				const temporizador = setInterval(() => {
					//adiciona rodada*10 a largura do componente a cada 20 ms
					const novaLargura = this.larguraBase - rodada * 10 
					el.style.width = `${novaLargura}px`//adiciona a largura calculada ao componente
					rodada++
					//após a 30° rodada, limpa o temporizador e chama a função done() indicando fim da animação
					if(rodada > 30){
						clearInterval(temporizador)
						done()
					}
				}, 20);
			},
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

.caixa {
	height: 100px;
	width: 300px;
	margin: 30px auto;
	background-color: lightgreen;
}

/* .fade-enter, .fade-leave-to{
	opacity: 0;
}

.fade-enter-active, .fade-leave-active {
	transition: opacity 2s;
} */

/*Os keyframes definem a animação. 
Nesse caso, uma transformação de baixo para cima(slide-out) ou de cima para baixo(slide-in) */

/* @keyframes slide-in {
	from { transform: translateY(10px);}
	to {transform: translateY(0);}
}

@keyframes slide-out {
	from { transform: translateY(0px);}
	to {transform: translateY(5px);}
} */

/*classes css que utilizam os frames criados*/ 
/* .slide-enter-active {
	animation: slide-in 0.5s ease;
	transition: opacity 0.5s;
}

.slide-leave-active {
	animation: slide-out 0.5s ease;
	transition: opacity 0.5s;
}

.slide-enter, .slide-leave-to{
	opacity: 0;
} */
</style>
