/**
 * Closure: uma função que pode "lembrar" do seu escopo lexico,
 * mesmo que a função é executada fora desse escopo.
 */

// function nomeCompleto() {
//     let primeiroNome = 'Bruno';
//     let sobreNome = 'Pontes';
//     let imprimeNome = function() {
//         console.log(primeiroNome + ' ' + sobreNome);
//     }
//     return imprimeNome;
// }

// let closure = nomeCompleto();
// closure();

/**
 * Exemplo 2
 */

// function humano(x) { //avo
//     return function cerebro() { //pai
//         return function dobraValor() { //filho
//             console.log(x * 2);
//         }
//     }
// }
// humano(1000)()();


/**
 * Exemplo 3
 */

// function perguntaEmUmaEntrevista(area) {
//     let pergunta = "Qual o seu nome?";
//     switch (area) {
//         case 'programador':
//             return function() {
//                 console.log(pergunta);
//             }
//         case 'designer':
//             return function() {
//                 console.log(pergunta);
//             }
//     }
// }

// perguntasEmUmaEntrevista('designer')();

/**
 * Exemplo 4
 */

// function quantoTempoParaSeAposentar(sexo) {
//     let aposentadoria = [65, 62];
//     switch (sexo) {
//         case 'masculino':
//             return function(idade) {
//                 console.log(aposentadoria[0] - idade);
//             }
//         case 'feminino':
//             console.log(aposentadoria[1] - idades);
//     }
// }

// quantoTempoParaSeAposentar('feminino')();

/**
 * Exemplo 5
 */
//SP:18% | MG:19% e RJ: 19% | SC:7%

// function calculaImposto(estado) {
//     let imposto = [0.18, 0.19, 0.07];
//     impostoPorEstado = {
//         'SP': 0.18,
//         'MG': 0.19,
//         'RJ': 0.19,
//         'SC': 0.07
//     }
//     switch (estado) {
//         case 'SP':
//             return function(valor) {
//                 console.log(valor * estado[estado] + 27);
//             }
//         case 'RJ':
//         case 'MG':
//             return function(valor) {
//                 console.log(valor * estado[estado] + 27);
//             }
//         case 'SC':
//             return function(valor) {
//                 console.log(valor * estado[estado] + 27);
//             }
//     }
// }

/**
 * Construindo o Framework TSI
 */

// function frameworkTSI() {
//     let mensagem = "Usou o framework TSI";
//     let funcoesDoMeuFramework = {
//         mostra: function(elementoHTML) {
//             elementoHTML.style.display = 'block';
//             console.log(mensagem);
//         },
//         esconde: function(elementoHTML) {
//             elementoHTML.style.display = 'none';
//             console.log(mensagem);
//         }
//     }
//     window.$ = funcoesDoMeuFramework;
// }

// frameworkTSI();

/**
 * Bind, call, Aplly
 */

let bruno = {
    nome: 'Bruno Pontes',
    tempoEmpresa: 10,
    idade: 29,
    apresentacao: function(estilo, hora) {
        switch (estilo) {
            case 'formal':
                console.log('Prezados, meu nome é ' + this.nome + ' estou a ' + this.tempoEmpresa + ' anos na empresa' + this.idades + ' ' + hora);
                break;
            case 'informal':
                console.log('faaaaaaaaaaaaaaaaaala pessoal, meu nome é ' + this.nome + ' e tenho ' + this.tempoEmpresa + ' anos na firma!');
                break;
        }
    }
}

bruno.apresentacao('formal', '10h');

let estagiario = {
    nome: 'Silvio Santos',
    tempoEmpresa: 1,
}

bruno.apresentacao.call(estagiario, 'formal');
bruno.apresentacao.apply(estagiario, ['informal']);

/**
 * BIND
 */

let anos = [1990, 1965, 1937, 2005, 1998, 2002];

function calculaIdade(ano) { //calcula a idade de um ano de nascimento
    return 2020 - ano;
}


function calculaArray(array, fn) {
    arrayRetorno.push(fn(array[i]));
}

function ehMaiorDeIdade(limite, idade) { // é maior de idade
    return idade >= limite;
}

function calculaArray(array, fn) {
    let arrayRetorno = [];
}

let idade = calculaArray(anos, calculaIdade);



/***
 * Projeto: Show do Milhao
 * Easy mode: Utilizar prototype no projeto
 * hard: implementar um sistema de pontos para
 * o usuario
 */