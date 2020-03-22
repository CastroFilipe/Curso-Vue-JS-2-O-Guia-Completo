<template>
    <div id="app" class="container-fluid">
        <h1>Transições em grupos de elementos</h1>

        <b-select v-model="tipoAnimacao" class="mb-4">
			<option value="fade">Aplicar fade</option>
			<option value="slide">Aplicar slide</option>
		</b-select>
        <b-button class="mb-3 mt-5" @click="adicionarAluno">Adicionar</b-button>

        <transition-group :name="tipoAnimacao" mode="out-in" tag="div"><!--aplicará efeitos de transição em todos os elementos-->
            <b-list-group v-for="(aluno,i) in alunos" :key="aluno">
                <b-list-group-item @click="removerAluno(i)"> {{aluno}}</b-list-group-item>
            </b-list-group>
        </transition-group>
    </div>
</template>

<script>
export default {
    data() {
        return {
            alunos: ['Roberto', 'Julia', 'Teresa', 'Paulo'],
            tipoAnimacao: 'fade'
        };
    },
    methods: {
        adicionarAluno(){
            this.alunos.push('João '+`${Math.floor(Math.random() * (99 - 1) + 1)}`)
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

/* CSS PARA O EFEITO FADE */
.fade-enter, .fade-leave-to{
	opacity: 0;
}

.fade-enter-active, .fade-leave-active {
	transition: opacity 2s;
}

/* CSS PARA O EFEITO SLIDE */
@keyframes slide-in {
	from { transform: translateY(5px);}
	to {transform: translateY(0);}
}

@keyframes slide-out {
	from { transform: translateY(0px);}
	to {transform: translateY(5px);}
}

/*classes css que utilizam os frames criados*/ 
.slide-enter-active {
	animation: slide-in 1s ease;
	transition: opacity 1s;
}

.slide-leave-active {
    position: absolute;
    width: 100%;
	animation: slide-out 1s ease;
	transition: opacity 1s;
}

.slide-enter, .slide-leave-to{
	opacity: 0;
}

.slide-move{
    transition: transform 2s;
}
</style>
