<template>
  <div class="nome-completo">
    <Rotulo nome="Nome">
      <input type="text" :value="value.nome" @input="atualizarNome"/>
    </Rotulo>
    <Rotulo nome="Sobre nome">
      <input type="text" :value="value.sobreNome" @input="atualizarSobreNome"/>
    </Rotulo>
  </div>
</template>

<script>
import Rotulo from '@/components/Rotulo.vue'

export default {
    components: { Rotulo },
    props: {
        value: {
            type: Object,
            required: true
        }
    },
    methods: {
        atualizarNome(event){
            this.$emit('input', {
                nome: event.target.value,
                sobreNome: this.value.sobreNome
            })
        },
        atualizarSobreNome(event){
            this.$emit('input', {
                nome: this.value.nome,
                sobreNome: event.target.value
            })
        }
    },
};
</script>

<style>
</style>