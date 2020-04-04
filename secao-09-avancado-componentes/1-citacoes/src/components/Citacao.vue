<template>
    <div class="citacao">
        <slot name="autor"></slot><!--tag do framework vue-->
        <slot name="texto"></slot>
        <slot name="fonte"></slot>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
    .citacao {
        box-sizing: border-box;
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        height: 100%;
        width: 100%; 
        padding: 25px;
    }
</style>
