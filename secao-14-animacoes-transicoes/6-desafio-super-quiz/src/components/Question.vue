<template>
    <div class="question">
        <span>{{question.text}}</span>
        <ul class="answers">
            <li v-for="(answer, i) in question.answers" :key="answer.text" 
                @click="selected(answer)">
                <span class="number">{{ i+1 }}</span>
                <span class="text">{{ answer.text }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        question : {
            type: Object,
            required: true
        }
    },
    methods: {
        /*Irá emitir o evento selected ao componente pai quando o usuário selecionar 
        uma alternativa. o evento irá enviar o valor boolean correct presente na 
        alternativa(answer). Assim poderão ser feitas verificações para saber se 
        o usuário respondeu certo ou errado*/
        selected(answer){
            this.$emit('selected', answer.correct)
            console.log(" está certo ?"+ answer.correct)
        }
    },
}
</script>

<style>
    .question {
        height: 400px;
        color: #000;
        background-color: #FFF;
        width: 70%;
        border-radius: 20px;
        font-size: 2.5rem;

        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    ul.answers {
        font-size: 2rem;
        padding: 0;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    .answers li {
        margin: 20px;
        background-color: #89c454;
        border-radius: 8px;
        width: 40%;
        cursor: pointer;
        display: flex;
    }

    .answers li:hover {
        background-color: #73ad3f;
    }

    .answers .number {
        padding: 10px;
        background-color: #1e9c31;
        color: #FFF;
        flex-basis: 30px;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }

    .answers .text {
        flex: 1;
        align-self: center;
    }
</style>
