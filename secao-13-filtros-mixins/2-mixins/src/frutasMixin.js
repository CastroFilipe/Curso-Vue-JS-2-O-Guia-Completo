/* Mixins são uma forma flexível de distribuir funcionalidade reutilizável em diversos componentes Vue, 
evitando assim código duplicado. O código dentro de um mixin será mesclado com o componente que utiliza esse mixin*/
export default {
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