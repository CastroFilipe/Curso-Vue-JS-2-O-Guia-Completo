<template>
    <div id="app">
        <h1>HTTP com Axios</h1>
        <b-card class="card-container">
            <b-form-group label="Nome">
                <b-form-input type="text" size="md" v-model="produto.nome" 
                placeholder="Informe o nome de um Hambúrguer ou refrigerante">
                </b-form-input>
            </b-form-group>
            <!--  -->
            <b-form-group label="Descrição">
                <b-form-input type="text" size="md" v-model="produto.descricao" 
                placeholder="Informe a descrição">
                </b-form-input>
            </b-form-group>
            <!--  -->
            <b-form-group label="Preço">
                <b-form-input type="number" size="md" v-model="produto.preco" 
                placeholder="Informe o valor">
                </b-form-input>
            </b-form-group>
            <!--  -->
            <b-form-group label="Categoria">
                <div class="select-categorias" >
                    <b-form-select size="md" v-model="produto.categoriaId" :options="categorias"></b-form-select>
                </div>
            </b-form-group>
            <hr>
            <b-button-group class="mb-4">
                <b-button @click.prevent="salvar" size="lg" variant="success">POST SALVAR</b-button>
            
                <b-button @click.prevent="buscarProdutos" size="lg" variant="info" class="ml-1">GET PRODUTOS</b-button>
            </b-button-group>

            <b-list-group>
                <b-list-group-item v-for="produto in produtos" :key="produto.id">
                    <strong>id: </strong>{{produto.id}}<br>
                    <strong>Nome: </strong>{{produto.nome}}<br>
                    <strong>Descrição: </strong>{{produto.descricao}}<br>
                    <strong>Preço: </strong>{{produto.preco}}<br>
                    <b-button variant="warning" @click="carregarParaEditar(produto)">Editar</b-button>
                    <b-button class="ml-2" variant="danger">Excluir</b-button>
                </b-list-group-item>
            </b-list-group>  
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
                id: null,
                nome: '',
                descricao:'',
                preco: 0,
                categoriaId: 0,
            },
            categorias: [
                {value : 1, text: 'Hambúrgueres'},
                {value : 2, text: 'Refrigerantes'}
            ],
            produtos: []//usado para guardar os dados de uma solicitação GET
        }
    },
    methods: {
        /**
         * Fará a requisição GET no endpoint 'baseURL/produtos', os dados recebidos serão
         * atribuidos ao array produtos. baseURL, que nesse estudo é 'http://localhost:3000/', foi 
         * definida no arquivo axios.js
         */
        buscarProdutos(){
            this.$http.get('produtos').then(resp => {
                this.produtos = resp.data
            })
        },
        /**
         * Faz o teste condicional para definir se chama o metodo POST para inserir ou PUT para atualizar
         * o objeto de acordo com o atual valor presente no id.
         */
        salvar(){
            let id = this.produto.id
            id != null ? this.salvarPUT() : this.salvarPOST()
        },
        /**
         * Fará a requisição do tipo post no endpoint 'baseURL/produtos' para salvar o objeto produto. 
         * Após a resposta ser recebida, limpar os valores do objeto produto.
         * Por último faz uma nova requisição GET para atualizar os registros exibidos na tela.
        */
        salvarPOST(){
            this.$http.post('produtos', this.produto)
            .then(resp => {
                this.limparProduto()
            }).then(() => {
                this.buscarProdutos()
            })
        },
        //semelhante ao anterior
        salvarPUT(){
            this.$http.put(`produtos/${this.produto.id}`, this.produto)
            .then(resp =>{
                this.limparProduto()
            }).then(() => {
                this.buscarProdutos()
            })
        },
        //Método que caregará o produto no formulario, possibilitando assim sua edição
        carregarParaEditar(produto){
            this.produto = JSON.parse(JSON.stringify(produto))//Uma forma de copiar o objeto(deep copy)

            //outra forma de copiar. Forma usada quando não existem outros objetos internos
            //this.produto = {...produto}
        },
        limparProduto(){
            this.produto.id = null
            this.produto.nome = ''
            this.produto.descricao = ''
            this.produto.preco = 0
            this.produto.categoriaId = 0
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
    width: 70%;
    margin: 0px auto;
}

.select-categorias {
    width: 30%;
}
</style>
