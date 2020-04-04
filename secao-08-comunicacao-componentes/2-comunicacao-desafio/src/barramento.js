import Vue from 'vue'
export default new Vue({
    methods: {
        selecionar(usuario){
            this.$emit('selecionou', usuario)
        },
        quandoSelecionar(callback){
            this.$on('selecionou', callback)
        }
    }
})