<template>
    <div id="app">

        <p>Mixins</p>

        <Frutas></Frutas>
        <hr>

        <!-- Replicando template presente no componente Frutas.vue -->
        <div class="container-frutas">
            <div class="frutas">
                <span>Lista de frutas:</span>
                <ul>
                    <li v-for="fruta in frutas" :key="fruta"><p>{{fruta}}</p></li>
                </ul>
            </div>

            <div class="formulario">
                <input type="text" v-model="fruta" @keydown.enter="adicionar">
                <button @click="adicionar">+</button>
            </div>
        </div>

    </div>
</template>

<script>
import Frutas from '@/components/Frutas.vue'

export default {
    components: {Frutas},

    // dados replicados do componente Frutas.vue
    data(){
        return {
            fruta: '',
            frutas: ['Uva', 'Acerola', 'Açai']
        }
    },
    methods: {
        adicionar(){
            this.frutas.push(this.fruta)
            this.fruta = ''
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
    display: flex;
    align-items: center;
    flex-direction: column;
}

input {
	font-size: 2.5rem;
}
</style>