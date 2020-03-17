<template>
    <div class="progress-bar">
        <span class="progress-value">{{porcentagem}}%</span>
        <div class="progress"  :style="{width: porcentagem+'%'}"></div>
    </div>
</template>

<script>
export default {
    props: {
        porcentagem: {type: Number, default: 0}
    }
}
</script>

<style>
    .progress-bar{
        position: relative;
        border: 1px solid white;
        width: 80%;
        min-height: 25px;
        margin: 5px auto;
        color: white;
        border-radius: 8px;
    }

    .progress {
        background-color: green;
        height: 100%;
        width: 0%;
        display: flex;

    }

    .progress-value{
        position: absolute;
        left: 50%;
    }
</style>