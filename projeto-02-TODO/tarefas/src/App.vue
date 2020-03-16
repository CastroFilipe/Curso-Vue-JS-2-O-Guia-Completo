<template>
	<div id="app">
		<h1>Tarefas</h1>

		<Task-grid :tasks="tasks"></Task-grid>

	</div>
</template>

<script>
import TaskGrid from '@/components/TaskGrid.vue'

export default {
	components: {
		TaskGrid
	},
	data() {
		return {
			tasks: [
				{name: 'Lavar louça', pending: false},
				{name: 'Comprar blusa', pending: true},
				{name: 'Comprar fruta', pending: true},
				{name: 'Comprar flores', pending: true},
				{name: 'Comprar feijão', pending: true},
				{name: 'Comprar', pending: true},
				{name: 'Comprar', pending: true},
			]
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
