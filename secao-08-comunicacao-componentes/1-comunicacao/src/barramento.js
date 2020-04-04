import Vue from 'vue'
export default new Vue({
    methods: {
        alterarIdade(idade) {
            this.$emit('alterouIdade', idade)
        },
        quandoIdadeMudar(callback){
            this.$on('alterouIdade', callback)
        }
    }
})