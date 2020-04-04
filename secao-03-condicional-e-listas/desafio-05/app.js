new Vue({
	el: '#desafio',
	data: {
		array: ['Pedro', 'Bia', 'Ana', 'Rebeca'],
		livro: {
			titulo: 'O Senhor dos Anéis',
			autor: 'J.R.R. Tolkiens',
			volume: '3'
		},
		aluno: {
			id: 10,
			nome: 'Maria',
			notas: [7.67, 8.33, 6.98, 9.21]
		},
		boleano : false,
		linguagens: [
			{nome: 'Java', anoLancamento: 1996, empresa: 'Oracle'},
			{nome: 'PHP', anoLancamento: 1995, empresa: 'The PHP Group'},
			{nome: 'C#', anoLancamento: 2000, empresa: 'Microsoft'},
			{nome: 'Javascript', anoLancamento: 1995, empresa: 'Oracle'}
			
		]
	}
});
