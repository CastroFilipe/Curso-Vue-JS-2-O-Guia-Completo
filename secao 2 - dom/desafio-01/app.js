new Vue({
    el: '#desafio',
    data : {
        nome: 'Filipe',
        idade: 27,
        randomico: Math.round(Math.random()),
        image: 'https://upload.wikimedia.org/wikipedia/pt/1/1e/%C3%8Dcone_do_UOL_Messenger.png',   
    },
    methods: {
        idadeXtres(){
            return this.idade * 3
        }
    }
})