<template>
    <div id="app">
        <p>Mixins</p>

        <Frutas></Frutas>

    </div>
</template>

<script>
import Frutas from '@/components/Frutas.vue'

export default {
    components: {Frutas}

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
    display: flex;
    align-items: center;
    flex-direction: column;
}

input {
	font-size: 2.5rem;
}
</style>