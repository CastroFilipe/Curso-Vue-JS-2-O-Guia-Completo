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
    props: ['nome'], //define a propriedade que será aceita na tag referente a esse componente.
    methods: {
        inverterNome(){
            this.nome = this.nome.split('').reverse().join('')
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
