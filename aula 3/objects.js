//OBJECTS

//formas de criar um objeto

let aluno1 = new Object();

console.log(aluno1);

aluno1.nome = "Aluno 1";
aluno1.profissao = "Estudante";
aluno1.idade = 33;

console.log(aluno1);

//OUTRA FORMA
let bruno = {
    primeiroNome: "Bruno",
    sobreNome: "Pontes",
    idade: 33,
    anoNascimento: 1990,
    profissao: "Aluno",
    hobbie: ['estudar', 'jogar'],
    calculaIdade: function() {
        return 2020 - this.anoNascimento;
    },
    nomeCompleto: function() {
        return this.primeiroNome + " " + this.sobreNome
    }
};

bruno.online = true;
console.log(bruno.calculaIdade());
console.log(bruno.nomeCompleto());
console.log(bruno);