new Vue({
    el: '#app',
    data: {
        running: false,
        playerLife: 100,
        monsterLife: 100,
        logs: []//array que conterá todos os logs
    },
    computed: {
        hasResult() {
            return this.playerLife == 0 || this.monsterLife == 0
        }
    },
    methods: {
        startGame() {
            this.running = true
            this.playerLife = 100
            this.monsterLife = 100
            this.logs = []
        },
        /* Usado para o ataque, tanto do player quanto do monstro. 
        O atributo especial(true/false) indica se o ataque foi especial, o que causa mais dano ao monstro.  */
        attack(especial) {
            /*Ataque no monstro */
            this.hurt('monsterLife', 5, 10, especial, 'Jogador', 'Monstro', 'cls-player')
            
            /*Se o monstro ainda está vivo, será feito o ataque no player */
            if(this.monsterLife > 0) {
                this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'cls-monster')
            }
        },
        /*função que fará o ataque de fato, calculando os valores de dano e demais lógicas.
        source: fonte do ataque, target: alvo do ataque, cls: classe css a ser aplicada no momento de exibição desse log*/
        hurt(prop, min, max, especial, source, target, cls) {
            const plus = especial ? 5 : 0 //se for uma ataque especial, o valor 5 será adicionado ao range min e max. indicando uma maior potência do ataque
            const hurt = this.getRandom(min + plus, max + plus)
            this[prop] = Math.max(this[prop] - hurt, 0)//será atribuído a this.monsterLife ou this.playerLife o parametro zero, garantindo que o life nunca será negativo.
            this.registerLog(`${source} atingiu ${target} com ${hurt}.`, cls)
        },
        /*Função que cura o jogador e faz o ataque do monstro logo em seguida*/ 
        healAndHurt() {
            this.heal(10, 15)
            this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'cls-monster')
        },
        /*Função que recupera a vida e salva a informação no log*/ 
        heal(min, max) {
            const heal = this.getRandom(min, max)
            this.playerLife = Math.min(this.playerLife + heal, 100)//Math.min impedirá que a cura gere um valor maior do que 100
            this.registerLog(`Jogador ganhou força de ${heal}.`, 'cls-player')
        },
        /* Retorna o valor ramdômico entre o valor min e max especificados. Esse valor será o dano aleatorio causado pelo ataque. */
        getRandom(min, max) {
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        },
        /*Registra o log, para isso recebe o texto e a classe css a ser aplicada*/
        registerLog(text, cls) {
            /*Cada log conterá o texto e a classe css a ser aplicada. Assim será possível aplicar um estilo em logs de monstro e outro nos
            logs do player..
            unshift adiciona o novo elemento na primeira posição do array. O push, por exemplo, adiciona no fim */
            this.logs.unshift({ text, cls })
        }
    },
    watch: {
        /* termina o jogo em caso de vitória ou desistência, fazeno assim com que os botões do jogo sejam escondidos*/
        hasResult(value) {
            if (value) this.running = false
        }
    }
})