new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed:{
        resultado(){
            console.log('computed...')
            return this.valor != 37 ? 'valor diferente de 37' : 'valor igual a 37'
        }
    },
    watch: {
        resultado(){
            console.log('resultado...')
            setTimeout(()=> {
                console.log('valor reiniciado')
                this.valor = 0
            }, 5000)
        }
    }
});