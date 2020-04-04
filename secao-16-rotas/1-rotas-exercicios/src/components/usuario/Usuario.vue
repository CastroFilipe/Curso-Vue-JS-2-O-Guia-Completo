<template>
    <div class="usuario">
        <h2>Usuários</h2>
        <hr>
        <!-- o propriedade personalizada 'sucesso' foi definida apenas como uma forma alternativa 
        de aplicar estilo. O estilo será definido no arquivo style.css presente na raiz do projeto-->
        <button sucesso @click="irParaInicio">Voltar</button>
    </div>
</template>

<script>
export default {
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