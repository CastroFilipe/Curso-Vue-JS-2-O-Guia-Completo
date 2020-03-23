/** Arquivo para configuração global do axios para disponibilizá-lo em toda a aplicação*/
import Vue from 'vue'
import axios from 'axios'

//url base para as requisições na api
axios.defaults.baseURL = 'http://localhost:3000'

Vue.use({
    install(Vue) {
        /*propriedade $http criada e que aponta para a instância do axios.
        Com isso o axios poderá ser acessado através do atributo $http*/
        Vue.prototype.$http = axios 
    }
})