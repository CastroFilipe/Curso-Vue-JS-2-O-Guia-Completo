<template>
    <div class="new-task">
        <input class="form-element" placeholder="Nova Tarefa?" type="text" v-model="name" @keydown.enter="add" >
        <button class="form-element" @click="add">+</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name : ''
        }
    },
    methods: {
        add(){
            this.$emit('taskAdded', { name: this.name})
            this.name = ''
        }
    },
}
</script>

<style>
    .new-task {
        margin: 35px;
    }

    .form-element {
        outline: none;
        font-size: 2rem;
        border: 1px solid white;
        padding: 5px 10px 8px;
        color: white;
    }

    input.form-element {
        width: 500px;
        background: #FFF2;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }

    button.form-element {
        border-left: none;
        background-color: rgb(97, 97, 245);
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }
</style>