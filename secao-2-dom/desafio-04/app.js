new Vue({
	el: '#desafio',
	data: {
		classe1: 'destaque',
		classeDigitada: 'destaque',
		classeDigitada2: '',
		trueOrFalse: false,
		cor5: 'blue',
		estilo5: {
			width: `${400}px`,
			height: `${30}px`
		},
		percentProgresso: 0
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe1 = this.classe1 == 'destaque' ? 'encolher' : 'destaque'
			}, 1000);
		},
		setTrueOrFalse(event) {
			if (event.target.value == 'true') {
				this.trueOrFalse = true
			} else if (event.target.value == 'false') {
				this.trueOrFalse = false
			}
		},
		iniciarProgresso() {
			let valor = 0
			const temporizador = setInterval(() => {
				valor += 1
				this.percentProgresso = valor
				if(valor >= 100){
					clearInterval(temporizador)
				}
			}, 100)

		}
	}
})
