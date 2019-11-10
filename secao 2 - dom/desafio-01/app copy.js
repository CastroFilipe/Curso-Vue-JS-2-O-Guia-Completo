new Vue({
    el:'#desafio',
    data: {
        age: 27,
        name: 'Filipe',
        linkDaImagem: 'https://upload.wikimedia.org/wikipedia/pt/1/1e/%C3%8Dcone_do_UOL_Messenger.png'
    },
    methods: {
        ageXtree(){
            return this.age * 3
        },

        sortearNumero(){
            return Math.random()
        }
    }

})