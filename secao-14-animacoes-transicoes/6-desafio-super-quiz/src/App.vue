<template>
	<div id="app">
		<h1>Super Quiz</h1>
		<!--
			o condicional v-if garante que o componente Question será exibido apenas
			quando o questionMode = true. diferente do valor false que indica que
			o componente Result é aquele que deverá ser exibido.

			:question é o parametro declarado dentro do componente Question. Esse parametro
			recebe um dos objetos dentro do array questions.A variável currentQuestion 
			representa o indice do objeto dentro do array.

			Por último irá capturar o evento 'selected' com um valor boleano indicando 
			se a resposta está correta ou não.

			O componente Result será exibido quando o componente Question não for,
			de acordo com a variável questionMode.
			O componente recebe um atributo :result que informa se o usuário respondeu 
			certo ou não.
			
			por último o componente emite o evento 'confirmed' indicando que deverá
			ser exibida a próxima pergunta
		-->
		<transition name="flip" mode="out-in">
			<Question v-if="questionMode" :question="questions[currentQuestion]" 
			@selected="showResult"></Question>
			<Result v-else :result="result" @confirmed="nextQuestion"></Result>
		</transition>
	</div>
</template>

<script>
import questions from '@/util/questions.js'
import Question from '@/components/Question.vue'
import Result from '@/components/Result.vue'

export default {
	components: {Question, Result},
	data(){
		return {
			result: false,//irá armazenar se o usuário respondeu certo ou errado
			questionMode: true,//váriavel usada para exibir na tela a questão ou o resultado
			questions,//variável para guardar o array questions importado.
			currentQuestion: 0//indice da questão atual que está sendo exibida em tela
		}
	},
	methods: {
		showResult(result){
			this.result = result
			this.questionMode = false
		},
		nextQuestion(){
			this.currentQuestion = Math.floor(Math.random() * this.questions.length);
			this.questionMode = true
		}
	},
}
</script>

<style>
body {
	background: linear-gradient(to right, rgb(0, 0, 70), rgb(28, 181, 224));
	font-family: 'Oswald', sans-serif;
	color: #FFF;
	height: 100vh;
}

#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;

	display: flex;
	flex-direction: column;
	align-items: center;
}

#app h1 {
	font-weight: 200;
	font-size: 4rem;
}

@keyframes flip-out {
	from { transform: rotateY(0deg); }
	to { transform: rotateY(90deg); }
}

@keyframes flip-in {
	from { transform: rotateY(90deg); }
	to { transform: rotateY(0deg); }
}

.flip-enter-active {
	animation: flip-in 0.3s ease;
}

.flip-leave-active {
	animation: flip-out 0.3s ease;
}
</style>
