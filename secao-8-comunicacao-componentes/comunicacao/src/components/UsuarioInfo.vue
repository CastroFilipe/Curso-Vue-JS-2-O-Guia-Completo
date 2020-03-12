<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <button @click="inverterNome">Inverter Nome</button>
        <p>Nome do usuário: <strong>{{ nome }}</strong></p>
        <p>Idade do usuário <strong>{{idade}}</strong></p>
    </div>
</template>

<script>
import barramento from '@/barramento'

export default {
    props: {//define as propriedades que serão aceitas na tag referente a esse componente.
        //define o nome e o tipo de uma propriedade. Fará a validação de tipos na passagem do parametro vindo de Usuario.vue
        nome: String, 
        idade: Number
    }, 
    methods: {
        inverterNome(){
            this.nome = this.nome.split('').reverse().join('')
            /*dispara um evento chamado nomeInverteu quando a função inverterNome() modificar o nome.
            Assim o componente pai Usuario.vue será notificado da mudança e poderá fazer algo.*/
            this.$emit('nomeInverteu', this.nome)
        }
    },
    /*No momento de criação do componente a função callback será vinculada ao componente. */
    created(){
        /*a função callback para alterar a idade será chamada quando o evento alterouIdade 
        for disparado no barramento pelo componente UsuarioEditar.vue*/
        barramento.$on('alterouIdade', (idade) => {
            this.idade = idade
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
