<template>
    <div id="app">
        <h1>Transições em grupos de elementos</h1>
        <b-button class="mb-3 mt-5" @click="adicionarAluno">Adicionar</b-button>

        <b-list-group v-for="(aluno,i) in alunos" :key="aluno">
            <b-list-group-item @click="removerAluno(i)"> {{aluno}}</b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
export default {
    data() {
        return {
            alunos: ['Roberto', 'Julia', 'Teresa', 'Paulo']
        };
    },
    methods: {
        adicionarAluno(){
            this.alunos.push('João')
        },
        removerAluno(indice){
            this.alunos.splice(indice, 1)
        }
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
