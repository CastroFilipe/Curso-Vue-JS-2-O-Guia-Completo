new Vue({
    el: "#app",
    data: {
        visible : true
    },
    methods: {
        alterarVisibilidade(){
            console.log('visibilidade alterada')
            this.visible = !this.visible
        }
    }
})