new Vue({
    el: '#desafio',
    data: {
        valor: '',
        mensagemAlerta: 'clicou'
    },
    methods: {
        exibirAlerta(){
            return alert(this.mensagemAlerta)
        },
        mudarValor(event){
            this.valor = event.target.value
        }
    }
})