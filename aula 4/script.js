let lakers = {
    nome: 'Lakers',
    pontos: [89, 120, 103, 100],
    media: function() {
        return this.pontos / 4;
    }
}

let golden = {
    nome: 'Golden State',
    pontos: [97, 105, 110, 99],
    media: function() {
        let soma = 0;
        for (let i = 0; i < this.pontos.length; i++) {
            soma += this.pontos[i];
        }
        return soma / this.pontos.length;
    }
}

let cavaliers = {
    nome: 'Cavaliers',
    pontos: [90, 117, 108, 89],
    media: function() {
        let soma = 0;
        for (let i = 0; i < this.pontos.length; i++) {
            soma += this.pontos[i];
        }
        return soma / this.pontos.length;
    }
}


let nba = {
    teams: [lakers, golden, cavaliers],
    calculaMediaParaTodosOsTimes: function() {
        for (let i = 0; i < this.teams.length; i++) { //cada cada time calcular a media
            let timeAtual = this.teams[i]; //coloco o valor do time atual na variavel timeAtual
            let soma = 0; //zera a variavel soma
            for (let j = 0; j < timeAtual.pontos.length; j++) { //roda a soma para cada jogo
                soma = timeAtual.pontos[j];
            }
            timeAtual.media = soma / timeAtual.pontos.length; //cria um novo valor para cada time
        }
    },
    quemEhOVencedor: function() {
        this.calculaMediaParaTodosOsTimes();
        let vencedor = this.teams[0]; //atribui a 1º posição dos times como vencedor
        for (let i = 0; i < this.teams.length; i++) { //roda cada  um dos times
            if (vencedor.media < this.teams[i].media) { //verifico se o numero de pontos é maior do que o vencedor atual
                vencedor = this.teams[i]; //guardo o vencedor novo
            }
        }
        console.log("O grande vencedor é o " + vencedor.nome); //imprimo o nome do  vencedor
    }
}


console.log(nba.teams);
nba.quemEhOVencedor();
// console.log(lakers.nome, lakers.media());
// console.log(golden.nome, golden.media());
// console.log(cavaliers.nome, cavaliers.media());

class timeDeBasquete {

    constructor(_name, _pontos) {
        this.name = _name;
        this.pontos = _pontos;
    }

    media() {
        let soma = 0;
        for (let i = 0; i < this.pontos.length; i++) {
            soma += this.pontos[i];
        }
        return soma / this.pontos.length;
    }
}

times = [
    lakers = new timeDeBasquete("Lakers", [89, 120, 103, 100]),
    golden = new timeDeBasquete("Golden", [97, 105, 110, 99])
]

console.log(times);