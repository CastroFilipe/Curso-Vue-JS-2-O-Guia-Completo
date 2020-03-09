<template>
  <div id="app">
    {{textoExemplo}}
    <button @click="textoExemplo += '!'">click</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textoExemplo: "Teste Data vue JS!"
    }
  },
}
</script>

<style>
  body {
    margin: 0;
  }
  #app{
    background-color: coral;
    color: white;
    font-size: 1.5em;
  }
</style>