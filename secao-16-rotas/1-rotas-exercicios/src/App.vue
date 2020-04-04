<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1>
		<Menu></Menu>
		<router-view></router-view>
	</div>
</template>

<script>
//importando o Menu que contém os router-links para navegação
import Menu from '@/components/templates/Menu.vue'

export default {
	//registrando o componente Menu no componente App.vue
	components: {Menu}
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
