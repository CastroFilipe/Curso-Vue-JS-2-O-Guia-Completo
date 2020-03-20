export default {
	computed: {
		espacoPorVirgula() {
			return this.frase1.replace(/\s/g, ',')//fará a mesma coisa que o filtro replaceSpaces
		},
		fraseTamanhos(){
			return this.frase2.split(' ').map((palavra)=>{ return `${palavra}(${palavra.length}) `}).join('')
		}
	},
}