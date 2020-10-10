function Perguntas(pergunta, respostas, respostaCorreta) {
    this.pergunta = pergunta;
    this.respostas = respostas;
    this.respostaCorreta = respostaCorreta;
}


Perguntas.prototype.fazAPergunta = function() {
    console.log(this.pergunta);
    for (let i = 0; i < respostas.length; i++) {
        console.log(respostas[i]);
    }
}

Perguntas.prototype.verificaResposta = function(resposta) {
    if (resposta == this.respostaCorreta) {
        console.log('Voce esta correto');
    } else {
        console.log('Voce erooooooooooooou!!!');

    }
}


let pergunta1 = new Perguntas('Qual é a fruta que ressecada para se tornar uma ameixa seca?', //perguntas
    ['uva', 'ameixa', 'banana', 'abacaxi', 1]); //respostas, 1 seria o indecie da resposta correta

let pergunta2 = new Perguntas('Qual o oceano banha o litoral brasileiro?', //perguntas
    ['Pacifico', 'Indico', 'Ártico', 'Atlantico', 'Mar Morto'], 3); //respostas, 1 seria o indecie da resposta correta

let pergunta3 = new Perguntas('Quantas folhas tem o trevo da sorte?', //perguntas
    ['Quatro', 'Tres', 'Cinco', 'Doze'], 0); //respostas, 0 seria o indecie da resposta correta

let perguntas = [pergunta1, pergunt2];
let pergunta_randon = Math.floor(Math.random() * pergunta.length);


perguntas[pergunta_randon].fazAPergunta();
let resposta = parseInt(prompt('Qual é a respsta correta?'));
perguntas[pergunta_randon].verificaResposta(resposta);