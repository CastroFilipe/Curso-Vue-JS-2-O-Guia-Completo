<template>
	<div id="app">
		<h1>Formulário Desafio</h1>
		<div class="conteudo">
			<form class="painel">
				<div class="cabecalho">Formulário</div>
				<!-- Exercicio 01 -->
				<!-- Criar uma formulário de registro -->
				<!-- Nome completo (Nome e Sobrenome) -->
				<!-- Email -->
				<!-- Senha -->
				<!-- Armazenar Dados? (Sim/Não) -->

				<!-- Exercicio 02 -->
				<!-- Só mostrar o fomulário de não tiver sido submetido -->
				<!-- Mostrar a área de Resultado apenas quando o formulário for submetido -->
				
				<!-- Exercicio 03 -->
				<!-- Crie um componente personalizado NomeCompleto -->
				<!-- Esse componente deve receber Nome e Sobrenome -->
				<Rotulo nome="Nome">
					<input type="text" v-model.lazy.trim="usuario.nome">
				</Rotulo>
				<Rotulo nome="Sobre nome">
					<input type="text" v-model.lazy.trim="usuario.sobreNome">
				</Rotulo>
				<Rotulo nome="E-mail">
					<input type="email" v-model.lazy.trim="usuario.email">
				</Rotulo>
				<Rotulo nome="Senha">
					<input type="password" v-model="usuario.senha">
				</Rotulo>
				<Rotulo nome="Armazenar dados?">
					<span class="inputRadio"><input type="radio" :value=true v-model="armazenarDados">Sim</span>
					<span class="inputRadio"><input type="radio" :value=false v-model="armazenarDados">Não</span>
				</Rotulo>
			</form>
			<div class="painel">
				<div class="cabecalho">Resultado</div>

				<Rotulo nome="Nome">
					{{usuario.nome}}
				</Rotulo>

				<Rotulo nome="Sobre nome">
					{{usuario.sobreNome}}
				</Rotulo>

				<Rotulo nome="E-mail">
					{{usuario.email}}
				</Rotulo>

				<Rotulo nome="Senha">
					{{usuario.senha}}
				</Rotulo>
				
				<Rotulo nome="Armazenar dados?">
					{{armazenarDados ? 'Sim'  : 'Não'}}<!-- {{typeof armazenarDados}} -->
				</Rotulo>
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue'

export default {
	name: 'app',
	components: { Rotulo },
	data() {
		return {
			usuario: {
				nome: '',
				sobreNome: '',
				senha: ''
			},
			armazenarDados: true
		}
	},
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.inputRadio {
	margin-right: 40px;
}
</style>
