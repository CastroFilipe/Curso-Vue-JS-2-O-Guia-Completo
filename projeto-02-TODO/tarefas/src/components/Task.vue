<template>
    <div class="task" :class="stateClass">
        <span class="close">x</span>
        <p> {{task.name}} </p>        
    </div>
</template>

<script>
export default {
    props: {
        task: {type: Object, required: true}
    },
    computed: {
        stateClass() {//teste para verificar se a tarefa está pendente ou não. Assim será possível definir qual classe aplicar(classe pending ou done)
            return {
                pending: this.task.pending,
                done: !this.task.pending
            }
        }
    }
}
</script>

<style>
    .task {
        position: relative;
        box-sizing: border-box;
        width: 350px;
        height: 150px;
        padding: 10px;
        border-radius: 8px;
        font-size: 2rem;
        font-weight: 300;
        cursor: pointer;
        user-select: none;/* Impedir que o usuário selecione o texto interno */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .pending{
        background-color: #F44336;
        border-left: 12px solid #B73229;
    }

    .done {
        color: rgb(184, 183, 183);
        background-color: green;
        text-decoration: line-through;
        border-left: 12px solid rgb(116, 156, 55);
    }

    .pending .close {
        background-color: #B73229;
    }

    .done .close {
        background-color: #0A8f08;
    }

    .close {
        position: absolute;
        right: 10px;
        top: 10px;

        font-size: 0.9rem;
        font-weight: 600;
        
        width: 20px;
        height: 20px;
        border-radius: 10px;
        
        display: flex;
        justify-content: center;
    }

</style>