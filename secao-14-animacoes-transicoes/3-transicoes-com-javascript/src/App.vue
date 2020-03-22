<template>
	<div id="app" class="container-fluid">
		<h1>Transições com Javascript</h1>
		<hr>
		
		<b-button @click="exibir2 = !exibir2">Mostrar</b-button>
		<!-- Eventos de transição -->
		<transition
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
			frase: 'uma frase para o usuário',
			exibirFrase: true,
			exibir2: true,
			tipoAnimacao: 'slide',
		}
	},
	methods: {
			beforeEnter(el){
				console.log("1-Before enter")
			},

			enter(el, done){//done() será chamado indicando opara o vue que a animação foi concluída
				console.log("2-enter")
				done()
			},

			afterEnter(el){
				console.log("3-after enter")
			},

			enterCancelled(){
				console.log("enter cancelled")
			},

			beforeLeave(el){
				console.log("1-Before leave")
			},

			leave(el, done){
				console.log("2-leave")
				done()
			},

			afterLeave(el){
				console.log("3-after leave")
			},

			leaveCancelled(){
				console.log("leave cancelled")
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
