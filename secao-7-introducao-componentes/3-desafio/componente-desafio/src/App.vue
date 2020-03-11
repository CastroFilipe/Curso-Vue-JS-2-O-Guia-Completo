<template>
  <v-app>
    <app-menu />
    <app-toolbar />
    <app-carousel></app-carousel>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import Footer from "./componentes/template/Footer.vue";
import Carousel from "./componentes/widgets/Carousel.vue";
import Toolbar from "./componentes/template/Toolbar.vue";
import Menu from "./componentes/template/Menu.vue";

export default {
  components: {
    "app-footer": Footer,
    "app-carousel": Carousel,
    "app-toolbar": Toolbar,
    "app-menu": Menu
  }
};
</script>
