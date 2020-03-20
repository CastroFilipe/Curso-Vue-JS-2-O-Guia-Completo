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
        <hr>
        <p>{{usuarioLogado}}</p>

    </div>
</template>

<script>
import Frutas from '@/components/Frutas.vue'
import frutasMixin from '@/frutasMixin.js'
import usuarioLogadoMixin from '@/usuarioLogadoMixin.js'

export default {
    components: {Frutas},
    mixins: [frutasMixin, usuarioLogadoMixin], //todos os atributos foram substituidos pelo mixin que contém o código.
    data() {
        return {
            frutas: ['BaNaNa']//sobrescreve o valor presente no mixin
        }
    },	
    created(){
		console.log('App.vue criado')
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
    display: flex;
    align-items: center;
    flex-direction: column;
}

input {
	font-size: 2.5rem;
}
</style>