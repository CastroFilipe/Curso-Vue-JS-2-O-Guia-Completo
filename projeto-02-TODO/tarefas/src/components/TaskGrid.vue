<template>
    <div class="task-grid">
        <template v-if="tasks.length">
            <Task v-for="task in tasks" :key="task.name" 
                :task="task">
            </Task>
        </template>
        <p v-else class="no-task">Sua vida está em dia</p>
    </div>
</template>

<script>
import Task from '@/components/Task.vue'

export default {
    components: {
        Task
    },
    props: {
        tasks: {type: Array, requered: true }//lista de tarefas do tipo array. Uma propriedade obrigatória
    }
}
</script>

<style>
    .task-grid {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;/*permite quebra de linha */
    }

    .task-grid .task {
        margin: 10px;
    }

    .no-task {
        color: #AAA;
        font-size: 1.7rem;
    }
</style>