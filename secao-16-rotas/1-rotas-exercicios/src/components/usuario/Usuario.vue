<template>
    <div class="usuario">
        <h2>Usuários</h2>
        <hr>
        <p>Código: {{id}}</p><!-- O id que é um parametro :id no path -->

        <!-- o propriedade personalizada 'sucesso' foi definida apenas como uma forma alternativa 
        de aplicar estilo. O estilo será definido no arquivo style.css presente na raiz do projeto-->
        <button sucesso @click="irParaInicio">Voltar</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            /*o atributo route é definido globalmente no vue-router
            o atributo id receberá o :id utilizado como parametro no path*/
            id: this.$route.params.id
        }
    },
    watch: {
        /*monitora o atributo route definido globalmente pelo vue-router. 
        O valor do id será atualizado quando acontecerem mudanças em route.
        o parametro 'to' indica a rota de destino. o 'from' a rota de origem*/ 
        $route(to, from){
            // console.log(from)
            console.log('saindo de ' + from.path+ ' para ' + to.path)
            this.id = to.params.id //atualiza o id presente em data()
        }
    },
    methods: {
        /* O push fará a navegação para o path indicado*/
        irParaInicio(){
            // this.$router.push('/') //1° forma. Passando a string que representa o path
            this.$router.push({path: '/'}) //forma alternativa. Passando um objeto com o atributo path
        }  
    },
}
</script>

<style>

</style>