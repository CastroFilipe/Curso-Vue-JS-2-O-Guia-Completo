<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p>Nome: {{ nome }}</p>
        <p>Idade: {{ idade }}</p>
        <button @click="alterarNome">Alterar nome</button>
        <hr>
        <div class="componentes">
            <!--nomeInverteu indica um evento personalizado criado no componente UsuarioInfo.vue-->
            <app-usuario-info 
                v-bind:nome="nome" @nomeInverteu="nome = $event" :idade="idade"
            />
            <app-usuario-editar :idade="idade" />
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data() {
        return {
            nome: 'Pedro',
            idade: 21
        }
    },
    methods: {
        alterarNome(){
            this.nome = this.nome == 'Carla' ? 'Pedro' : 'Carla'
        }
    },
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
