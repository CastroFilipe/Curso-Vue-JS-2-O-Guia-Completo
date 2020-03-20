<template>
    <div class="container-frutas">
        <div class="frutas">
            <span>Lista de frutas:</span>
            <ul>
                <li v-for="fruta in frutas" :key="fruta"><p>{{fruta}}</p></li>
            </ul>
        </div>

        <div class="formulario">
            <input type="text" v-model="fruta" @keydown.enter="adicionar">
            <button @click="adicionar">+</button>
        </div>
    </div>
</template>

<script>
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
</script>

<style scoped>
    ul, li {
        padding: 0px;
        margin: 0px;
        border: 0px;
        list-style: none;
    }

    p {
        margin: 5px 0px;
    }

    .container-frutas {
        border-radius: 5px;
                border: 1px solid rgba(109, 108, 108, 0.2);
        display: flex;
        flex-direction: column;
        min-width: 40%;
        margin: 5px auto;
    }

    .frutas {
        min-height: 10rem;
    }

    .formulario {
        display: flex;
        margin: 5px auto;
        width: 100%;
        justify-content: center;
    }

    .formulario button{
        width: 4.0rem;
        border: 1px solid rgb(126, 124, 124, 0.5);
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        outline-color: rgba(66, 65, 65, 0.7);
    }

    .formulario input {
        width: 60%;
        border: 1px solid rgba(109, 108, 108, 0.5);
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        outline: none;
    }
</style>