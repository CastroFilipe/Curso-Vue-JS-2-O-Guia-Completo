<template>
    <div id="app">
        <h1>HTTP com Axios</h1>
        <b-card class="card-container">
            <b-form-group label="Nome">
                <b-form-input type="text" size="lg" v-model="produto.nome" 
                placeholder="Informe o nome de um Hambúrguer ou refrigerante">
                </b-form-input>
            </b-form-group>
            <!--  -->
            <b-form-group label="Descrição">
                <b-form-input type="text" size="lg" v-model="produto.descricao" 
                placeholder="Informe a descrição">
                </b-form-input>
            </b-form-group>
            <!--  -->
            <b-form-group label="Preço">
                <b-form-input type="number" size="lg" v-model="produto.preco" 
                placeholder="Informe o valor">
                </b-form-input>
            </b-form-group>
            <!--  -->
            <b-form-group label="Categoria">
                <div class="select-categorias" >
                    <b-form-select v-model="produto.categoriaId" :options="categorias"></b-form-select>
                </div>
            </b-form-group>
            <hr>
            <b-button @click.prevent="salvar" 
            size="lg" variant="success">Salvar</b-button>
        </b-card>
    </div>
</template>

<script>


export default {
    data() {
        return {
            /*modelo de produto para refletir exatamente os modelos salvos 
            no db.json. Com esse modelo poderão ser feitas chamadas POST para inserir novos 
            produtos com os atributos setados e informados pelo usuário*/
            produto : {
                id: 0,
                nome: '',
                descricao:'',
                preco: 0,
                categoriaId: 0,
            },
            categorias: [
                {value : 1, text: 'Hambúrgueres'},
                {value : 2, text: 'Refrigerantes'}
            ]
        }
    },
    methods: {
        /**Fará a requisição do tipo post para salvar o objeto produto. 
         * O endpoint é '/produtos' e será concatenado com a baseURL definida no arquivo
         * axios.js. Após a requisição POST , retorna uma resposta 'resp'. 
         * Após a resposta ser recebida, limpar os valores do objeto produto.
        */
        salvar(){
            this.$http.post('produtos', this.produto).then(resp => {
                    this.produto.nome = ''
                    this.produto.descricao = ''
                    this.produto.preco = 0
                    this.produto.categoriaId = 0
                })
        }
    }
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 20px;
}

.card-container {
    width: 50%;
    margin: 0px auto;
}

.select-categorias {
    width: 30%;
}
</style>
