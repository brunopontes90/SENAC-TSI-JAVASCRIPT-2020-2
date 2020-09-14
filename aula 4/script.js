/*
let georgia = {
    nome: 'Georgia',
    pontos: [99, 100, 101, 102, 104, 105],
    media: function () {
        let soma = 0;
        for (let i = 0; i < this.pontos.length; i++) {
            soma += this.pontos[i];
        }
        return soma / this.pontos.length;
    }
}

let newyork = {
    nome: 'New York',
    pontos: [105, 99, 75, 120, 119, 99],
    media: function () {
        let soma = 0;
        for (let i = 0; i < this.pontos.length; i++) {
            soma += this.pontos[i];
        }
        return soma / this.pontos.length;
    }
}

let florida = {
    nome: 'Florida',
    pontos: [85, 80, 75, 125, 111, 98],
    media: function () {
        let soma = 0;
        for (let i = 0; i < this.pontos.length; i++) {
            soma += this.pontos[i];
        }
        return soma / this.pontos.length;
    }
}

let texas = {
    nome: 'Texas',
    pontos: [89, 122, 132, 85, 90, 99],
    media: function () {
        let soma = 0;
        for (let i = 0; i < this.pontos.length; i++) {
            soma += this.pontos[i];
        }
        return soma / this.pontos.length;
    }
}

let ncaa = {
    times: [georgia, newyork, florida, texas],
    vencedor: function () {
        let campeao = this.times[0]; //armazenando o objeto (georgia)
        //console.log("A média do time " + this.times[0].nome + " é:" + this.times[0].media());
        for (let i = 1; i < this.times.length; i++) {
            //console.log("A média do time " + this.times[i].nome + " é:" + this.times[i].media());
            if (this.times[i].media() > campeao.media()) {
                campeao = this.times[i]; //armazenado o objeto (this.time[i])
            }
        }
        console.log(campeao.nome + ' é o vencedor');
    }
}

ncaa.vencedor();

function rodaOdado() {
    let dado = Math.floor(Math.random() * 6) + 1;
    document.querySelector('#dado').textContent = dado;
}

*/

let dado = {
    valor: null,
    jogando: function() {
        /**
         * Gera um número aleatório de 1 até 6 e atualiza na tela esse novo valor
         */
        this.valor = Math.floor(Math.random() * 6) + 1; //gera um numero randomico
        this.imprimeValor();
    },
    imprimeValor: function() {
        /**
         * Atualiza na tela o valor do dado atual no elemento HMTL (#dado)
         */
        document.querySelector('#dado').textContent = this.valor; //substitui o valor do texto do elemento HTML com o ID=dado
    }
};

let player1 = {
    nome: 'Player 1',
    id: 1,
    pontos: 0,
    pontosTemporarios: 0,
    jogaODado: function() {
        /**
         * O jogador deve rolar os dados e pedir para o jogo verificar
         */
        dado.jogando();
        pig.verificaOValorDoDado();
    },
    parar: function() {
        /**
         * Caso o jogador decida parar, atribuir os valores dos pontos temporarios nos pontos oficiais
         * e passar a vez para o próximo jogador
         */
        this.adicionarNosPontos();
        pig.proximoJogador();
    },
    adicionarNosPontosTemporarios: function(pontos) {
        /**
         * Calcula baseado nos pontos temporarios anteriores a soma dos novos valores do dado
         * Escreve esse novo valor na tela
         */
        this.pontosTemporarios += pontos;
        this.imprimirOsPontosTemporarios();
    },
    zerarOsPontosTemporarios: function() {
        /**
         * Zera os pontos temporarios do jogador
         */
        this.pontosTemporarios = 0;
        this.imprimirOsPontosTemporarios();
    },
    adicionarNosPontos: function() {
        /**
         * Adiciona aos pontos oficiais o valor dos pontos temporários
         */
        this.pontos += this.pontosTemporarios;
        this.imprimirOsPontos();
    },
    imprimirOsPontosTemporarios: function() {
        /**
         * Atualiza na tela o elemento com o ID (#jogador-1-pontosTemporarios) o valor dos novos pontos temporário
         */
        document.querySelector('#jogador-' + this.id + '-pontosTemporarios').textContent = this.pontosTemporarios;
    },
    imprimirOsPontos: function() {
        /**
         * Atualiza na tela o elemento com o ID (#jogador-1-pontos) o valor dos novos pontos
         */
        document.querySelector('#jogador-' + this.id + '-pontos').textContent = this.pontos;
    }
}

let player2 = {
    nome: 'Player 2',
    id: 2,
    pontos: 0,
    pontosTemporarios: 0,
    jogaODado: function() {
        /**
         * O jogador deve rolar os dados e pedir para o jogo verificar
         */
        dado.jogando();
        pig.verificaOValorDoDado();
    },
    parar: function() {
        /**
         * Caso o jogador decida parar, atribuir os valores dos pontos temporarios nos pontos oficiais
         * e passar a vez para o próximo jogador
         */
        this.adicionarNosPontos();
        pig.proximoJogador();
    },
    adicionarNosPontosTemporarios: function(pontos) {
        /**
         * Calcula baseado nos pontos temporarios anteriores a soma dos novos valores do dado
         * Escreve esse novo valor na tela
         */
        this.pontosTemporarios += pontos;
        this.imprimirOsPontosTemporarios();
    },
    zerarOsPontosTemporarios: function() {
        /**
         * Zera os pontos temporarios do jogador
         */
        this.pontosTemporarios = 0;
        this.imprimirOsPontosTemporarios();
    },
    adicionarNosPontos: function() {
        /**
         * Adiciona aos pontos oficiais o valor dos pontos temporários
         */
        this.pontos += this.pontosTemporarios;
        this.imprimirOsPontos();
    },
    imprimirOsPontosTemporarios: function() {
        /**
         * Atualiza na tela o elemento com o ID (#jogador-1-pontosTemporarios) o valor dos novos pontos temporário
         */
        document.querySelector('#jogador-' + this.id + '-pontosTemporarios').textContent = this.pontosTemporarios;
    },
    imprimirOsPontos: function() {
        /**
         * Atualiza na tela o elemento com o ID (#jogador-1-pontos) o valor dos novos pontos
         */
        document.querySelector('#jogador-' + this.id + '-pontos').textContent = this.pontos;
    }
}


let pig = {
    jogadores: [player1, player2],
    jogadorAtual: 0,
    playerAtual: function() {
        /** 
         * Retorna em objeto o jogador da vez
         */
        return this.jogadores[this.jogadorAtual];
    },
    proximoJogador: function() {
        /**
         * Quando for passar a vez, é necessário zerar o valor de pontos temporarios do jogador atual.
         * Passar a vez para o próximo jogador, e atualizar na tela o nome dele
         */
        this.playerAtual().zerarOsPontosTemporarios();
        this.jogadorAtual++; //Passa para o próximo jogador
        if (this.jogadorAtual == this.jogadores.length) { //se o próximo jogador não estiver no array
            this.jogadorAtual = 0; //volto para primeiro jogador 
        }
        document.querySelector('#jogador-atual').textContent = this.playerAtual().nome; //atualiza o nome do jogador no elemetno HTML (#jogador-atual)
    },
    verificaOValorDoDado: function() {
        /**
         * Rega do jogo: 
         * Caso o jogador tire 1: passar a vez para o próximo jogador
         * Caso o jogador tire ourto número: adicionar aos pontos temporários o valor atual do dado
         */
        if (dado.valor == 1) {
            this.proximoJogador();
        } else {
            this.playerAtual().adicionarNosPontosTemporarios(dado.valor);
        }
    }
}

window.onload = alerta;

function alerta() {
    alert(1);
}