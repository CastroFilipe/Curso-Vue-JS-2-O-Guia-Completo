<template>
    <div class="frutas">
        <ul>
            <li v-for="f in frutas" :key="f">{{f}}</li>
        </ul>

        <div class="formulario">
            <input type="text" v-model="fruta" v-on:keydown.enter="adicionar">
            <button @click="adicionar">+</button>
        </div>

    </div>
</template>

<script>
export default {
   data() {
       return {
           fruta: '',
           frutas: ['banana', 'maçã', 'laranja']
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

<style>
    ul, li {
        list-style: none;
    }

    .frutas{
        border: 1px gray solid;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 500px;
        margin: 15px auto;
    }

    .formulario {
        display: flex;
    }

    .formulario button{
        height: 50px;
        width: 50px;
    }

    .formulario input {
        width: 100%;
    }
</style>