<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <button @click="inverterNome">Inverter Nome</button>
        <p>Nome do usuário: <strong>{{ nome }}</strong></p>
    </div>
</template>

<script>
export default {
    props: {
        nome: String //define o nome e o tipo de uma propriedade. Fará a validação de tipos na passagem do parametro vindo de Usuario.vue
    }, //define a propriedade que será aceita na tag referente a esse componente.
    methods: {
        inverterNome(){
            this.nome = this.nome.split('').reverse().join('')
            /*dispara um evento chamado nomeInverteu quando a função inverterNome() modificar o nome.
            Assim o componente pai Usuario.vue será notificado da mudança e poderá fazer algo.*/
            this.$emit('nomeInverteu', this.nome)
        }
    },
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
