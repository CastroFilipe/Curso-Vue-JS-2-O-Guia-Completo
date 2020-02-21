new Vue({
    el: "#app",
    data: {
        visible : false
    },
    methods: {
        alterarVisibilidade(){
            console.log('visibilidade alterada')
            this.visible = !this.visible
        }
    }
})