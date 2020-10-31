/**
 * let, const, var
 */

//ES5
// var nome5 = "Bruno Pontes";
// var idade5 = 29;
// var nome5 = "Bruno Confessor";

//ES6
// const nome6 = "Bruno Pontes";
// const idade6 = "29";
// nome6 = "Bruno Confessor";

//ES5
// function passouSemDPS(passou) {
//     if (passou) {
//         var nome = "Bruno Pontes";
//         console.log(nome + " passou sem DP \\0/ ES5");
//     }
// }

// passouSemDPS(true);



//ES6
// function passouSemDPS(passou) {
//     let nome;
//     if (passou) {
//         nome = "Bruno Pontes";
//         console.log(nome + " passou sem DP \\0/ ES6");
//     }
// }

// passouSemDPS(true);


//Mais um exemplo
// let i = 9;
// for (let i = 0; i < 5; i++) {
//     console.log(i);

// }
// console.log(i);

/**
 * Strings: template e comparadores
 */

// let primeiroNome = "Bruno";
// let ultimoNome = "Pontes";
// const ano = 1990; //como nao ira mudar, pode ser const

// //ES5
// console.log("Eu sou " + primeiroNome + " " + ultimoNome + ", e nasci em " + ano);

// //ES6
// console.log(`Eu sou ${primeiroNome} ${ultimoNome} e nasci em ${ano}`);
// let nomeCompleto = `${primeiroNome} ${ultimoNome}`;
// let nomeCompletoPadraoUS = `${ultimoNome}, ${primeiroNome}`;
// console.log(`Eu sou o ${primeiroNome}, e nasci em ${ano}`);

// //Funções comparadores de String
// console.log(nomeCompleto.startsWith("Bru")); //verifica se começa com a palavra
// console.log(nomeCompleto.endsWith("o")); //verifica se termina com a palavra
// console.log(nomeCompleto.includes("n")); //verifica se esta no meio da palavra
// console.log(`${nomeCompleto}\n `.repeat(5)); //repete 5 vezes

/**
 * Arrow functions
 * vieram para substituir o escopo de uma função
 */

//ES5
// const anos = [1990, 1965, 1987, 1938, 2002];
// let idade5for = [];
// for (let i = 0; i < anos.length; i++) {
//     idade5for.push(2020 - anos[i]);

// }

// console.log(idade5for);

// let idademap = anos.map(function(elemento) {
//     return 2020 - elemento;
// });

// console.log(idademap);

//ES6
//declarando arrow function
//se usar as chaves precisa por o return
/**
 * let idade6map = anos.map((elemento) => {
 *  return 2020 - elemento)};
 */

// let idade6map = anos.map((elemento) => {
//     return 2020 - elemento

// });

// let idade6map1 = anos.map((elemento) => 2020 - elemento);

// console.log(idade6map);
// console.log(idade6map1);

// let idade6map2 = anos.map((elemento, index) => {
//     const ano_atual = new Date().getFullYear();
//     const idade = ano - elemento;
//     return `Elemento ${index}: ${elemento} - ${idade}`;
// });

// console.log(idade6map2);

/**
 * Arrow function = this
 */

// let eventoBotao5 = {
//     nome: "Bruno",
//     atribuiFuncaoBotao: function() {
//         var self = this;
//         document.querySelector("#botao5").addEventListener('click', function() {
//             alert(self.nome);
//         });
//     }
// }
// eventoBotao5.atribuiFuncaoBotao();

//ES6
// let eventoBotao6 = {
//     nome: "Bruno",
//     atribuiFuncaoBotao: function() {
//         document.querySelector("#botao6").addEventListener('click', () => {
//             alert(this.nome); //arrow function nao tem escopo, this = escopo do pai
//         });
//     }
// }
// eventoBotao6.atribuiFuncaoBotao();

// /**
//  * Arrow function no Prototype
//  */

// function Pessoa(nome, sobrenome) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
// }

// Pessoa.prototype.meusAmigos = function(amigos) {
//     let saudacao = amigos.map(el => {
//         return `${el}, bem vindo a aula!`;
//     });
//     console.log(saudacao);
// }

// let bruno = new Pessoa("Bruno", "Pontes");
// bruno.meusAmigos("Luana", "Elza", "Gerson");

/**
 * 
 * Destruction - desfazer
 */

// let array = ["Bruno", 29];
// let nome = array[0];
// let idade = array[1];

// console.log(nome);
// console.log(idade);

// let [nom, idad] = array;
// console.log(nom);
// console.log(idad);

// let fnArray = function() {
//     return ["Bruno", 29];
// }
// let [nom, idad, bloano] = fnArray();
// console.log(nom);
// console.log(idad);
// console.log(boleano);

let lakers = {
    nome: 'Lakers',
    pontos: [99, 98, 101, 109],
    proximoJogo: '30/10/2020',
    a: true,
};
//nome:a = dando nome a variavel
let { nome: a, pontos: b } = lakers;

console.log(a);
console.log(b);

function calculaAnosParaAposentar(ano) {
    const idade = new Date().getFullYear() - ano;
    return {
        idade: idade,
        ano: ano,
        tempoParaAposentar: 65 - idade
    }
}

let { tempoParaAposentar } = calculaAnosParaAposentar(1990);
console.log(tempoParaAposentar);