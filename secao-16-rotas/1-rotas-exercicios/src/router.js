import Vue from 'vue'
import Router from 'vue-router'
import inicio from '@/components/Inicio.vue'
import usuario from '@/components/usuario/Usuario.vue'

Vue.use(Router)

/*Configuração do vue-router
    quando o usuário acessar a raiz da aplicação 'localhost:8080/' o componente inicio será exibido na tela
    quando o usuário acessar o path '/usuario' o componente usuario será exibido na tela
*/
export default new Router({
    routes: [
        { path: '/', component: inicio },
        { path: '/usuario', component: usuario }
    ]
})