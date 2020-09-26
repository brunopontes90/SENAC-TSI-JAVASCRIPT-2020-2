let NBATimes = function(xnome, xpontos) {
    this.nome = xnome;
    this.pontos = xpontos;
}

NBATimes.prototype.contarPontos = function() {
    let soma = 0;
    for (let i = 0; i < this.pontos.length; i++) {
        soma += this.pontos[i];
    }
    console.log(soma);
}

let lakers = new NBATimes('Lakers', [89, 120, 103, 100]);
let golden = new NBATimes('Golden', [97, 105, 110, 99]);
let cavaliers = new NBATimes('Cavaliers', [90, 117, 108, 89]);
//console.log(lakers, golden, cavaliers);



let jogador = function(nome) {
    this.nome = nome;
    this.ppt = undefined;
}

jogador.prototype.geraPPT = function() {
    this.ppt = Math.floor(Math.random() * 3);
}

jogador.prototype.gritar = function() {
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAA!!!!");
}

jogador.prototype.pedirTempo = function() {
    console.log(this.nome + ": TEMPOO!!");
}


let player1 = new jogador("Mike");
let player2 = new jogador("Denis");

player1.pedirTempo();

/*************************************
 * Passando uma função como argumento
 * ************************************/

let anos = [1990, 1965, 1937, 2005, 1998, 2000];

function calculaIdade(ano) {
    return 2020 - ano;
}

function maxBatimentosCardiacos(idade) { //calcula batimento cardiaco
    return Math.round(207 - idade * 0.7);
}

function ehMaiorDeIdade(idade) { // é maior de idade
    return idade >= 18;
}

function calculaArray(array, fn) { // calcula  qualquer tipo de array
    let arrayRetorno = [];
    for (let i = 0; i < array.length; i++) {
        arrayRetorno.push(fn(array[i]));
    }
    return arrayRetorno;
}

let idades = calculaArray(anos, calculaIdade); //é uma função de callback
let maioridade = calculaArray(idades, ehMaiorDeIdade);
let maxBatimentos = calculaArray(idades, maxBatimentosCardiacos);
// console.log(anos, idades, maioridade, maxBatimentos);

/************************
 * Anonymous Function
 ************************/

function perguntasEmUmaEntrevista(area) {
    switch (area) {
        case 'programação':
            return function(nome) { // função anonima

                console.log(nome + ' qual linguagem voce programa?');
            }
        case 'designer':
            return function(nome) {
                console.log('voce pode me mostrar seu portifolio, ' + nome + '?');
            }
        default:
            return function(nome) {
                console.log('Então você é musico não é ' + nome + '?');
            }
    }
}

let perguntaParaProgramador = perguntasEmUmaEntrevista('programador');
perguntaParaProgramador('João');

let perguntaParaDesigner = perguntasEmUmaEntrevista('designer');
perguntaParaDesigner('Veronica');

perguntasEmUmaEntrevista('designer')('Bruno'); // vai viavel


function quantoTempoParaAposentar(sexo) {
    switch (sexo) {
        case 'masculino':
            return function(idade) {
                console.log(65 - idade);
            }
        case 'feminino':
            return function(idade) {
                console.log(62 - idade);
            }
    }
}

quantoTempoParaAposentar('masculino')(33);
quantoTempoParaAposentar('feminino')(33);