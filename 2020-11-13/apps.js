/**
 * MAP: hash, table
 */

const dados = new Map();

// set = colocar 
// dados.set('pergunta', 'Qual é o nome do seu professor?');
// dados.set(1, "Thyago Quyntas");
// dados.set(2, "Thiago Quintas");
// dados.set(3, "Thyago Quintas");
// dados.set(4, "Thiago Claro");
// dados.set('correta', 3);
// dados.set(true, 'Resposta Correta !');
// dados.set(false, 'Resposta incorreta !');

// verifica se tem 0
// if (dados.has(0)) {
//     dados.set(0, "Thiago Quintas");
// }

/*
console.log(dados);
console.log(dados.get('correta'));
dados.delete('correta');
dados.clear(); // apraga os valores dentro
dados.has(0); // tem 0
*/

// console.log(dados.get('pergunta'));
// dados.forEach((value, key) => {

//     if (typeof(key) === 'number') {
//         console.log(`Pergunta ${key}:${value}`);
//     }
// });

// for (let [key, value] of dados.entries()) {
//     if (typeof(key) === 'number') {
//         console.log(`Pergunta ${key}:${value}`);
//     }
// }
// const resposta = parseInt(prompt('Qual a resposta correta?'));
// console.log(dados.get(resposta === dados.get('correta')));

/* INTRODUÇÃO A ORIENTADO A OBJETO */

/**
 * CLASS
 */
//ES5
let Humano5 = function(nome, ano, trabalho) {
    this.nome = nome;
    this.ano = ano;
    this.trabalho = trabalho;

}

Humano5.prototype.calculaIdade = function() {
    let idade = new Date().getFullYear() - this.ano;
    console.log(idade);
}

let thyago5 = new Humano5('Thyago', 1987, 'Professor');
console.log(thyago5);
thyago5.calculaIdade();

//ES6
class Humano6 {
    constructor(nome, ano, trabalho) {
        this.nome = nome;
        this.ano = ano;
        this.trabalho = trabalho;
    }
    calculaIdade() {
        let idade = new Date().getFullYear() - this.ano;
        console.log(idade);
    }
}

let thyago6 = new Humano6('Thyago', 1987, 'Professor');
console.log(thyago6);
thyago5.calculaIdade();

/**
 * Sub-Classes: Herança
 */
//ES5

let Atleta5 = function(nome, ano, trabalho, modalidade, jogosOlimpicos, medalhas) {
    //call - chama o antorior
    Humano5.call(this, nome, ano, trabalho);
    this.modalidade = modalidade;
    this.jogosOlimpicos = jogosOlimpicos;
    this.medalhas = medalhas;
}

Atleta5.prototype = Object.create(Humano5.prototype);
Atleta5.prototype.adicionaMedalha = function() {
    this.medalhas++;
}

let thyago5A = new Atleta5('Thyago', 1987, 'Nadador', 'Piloto', 3, 10);
// console.log(thyago5A);

//ES6
// extends = pega tudo que o Humano6 faz
class Atleta6 extends Humano6 {
    constructor(nome, ano, trabalho, modalidade, jogosOlimpicos, medalhas) {
        //pega a classe anterior = superior
        super(nome, ano, trabalho);
        this.modalidade = modalidade;
        this.jogosOlimpicos = jogosOlimpicos;
        this.medalhas = medalhas;

    }
    comemoracao() {
        console.log('Uhuuuuu!!! \\o/');
    }
    adicionaMedalha() {
        this.medalhas++;
    }
}

let thyago6A = new Atleta6('Thyago', 1987, 'Nadador', 'Piloto', 3, 10);
thyago6A.calculaIdade();
thyago6A.adicionaMedalha();
console.log(thyago6A);
thyago6A.comemoracao();


class Nadador extends Atleta6 {
    constructor(nome, ano, trabalho, modalidade, jogosOlimpicos, medalhas) {
        super(nome, ano, trabalho, modalidade, jogosOlimpicos, medalhas);
    }
    comemoracao() {
        console.log('Blu blu blu heeee!!! \\o/');
    }
}