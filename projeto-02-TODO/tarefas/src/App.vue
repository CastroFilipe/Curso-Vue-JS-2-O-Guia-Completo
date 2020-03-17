<template>
	<div id="app">
		<h1>Tarefas</h1>
		<ProgressBar :porcentagem="calcularPorcentagem"></ProgressBar>
		<NewTask @taskAdded="addTask($event)"></NewTask>
		<Task-grid :tasks="tasks" 
		@taskDeleted="deleteTask"
		@mudarEstado="mudarEstado"></Task-grid>

	</div>
</template>

<script>
import TaskGrid from '@/components/TaskGrid.vue'
import NewTask from '@/components/NewTask.vue'
import ProgressBar from '@/components/ProgressBar.vue'

export default {
	components: {
		TaskGrid,
		NewTask,
		ProgressBar
	},
	data() {
		return {
			tasks: []
		}
	},
	methods: {
		addTask(task){
			const funcaoComparar = t => t.name === task.name //verifica se a task tem o mesmo nome de uma task t qualquer

			const nomeIgual = this.tasks.filter(funcaoComparar)

			if(nomeIgual.length == 0){//indica que não existe nehuma task t com mesmo nome da task passada como parametro
				task.pending = true
				this.tasks.push(task)
			}
		},
		deleteTask(i){
			this.tasks.splice(i, 1)
		},
		mudarEstado(task){
			task.pending = !task.pending
		}
	},
	computed: {
		calcularPorcentagem(){
			const concluidos = this.tasks.filter(t => t.pending === false).length
			const tamanho = this.tasks.length
			const porcentagem = Math.round(concluidos/tamanho *100) || 0
			console.log(porcentagem)
			return porcentagem
		}
	},
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
