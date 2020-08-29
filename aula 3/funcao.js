//FUNÇOES

let anoBruno = 1990;

function calculaIdade(anoNascimento) {
    return 2020 - anoNascimento;
}

anoBruno = calculaIdade(anoBruno);

console.log(anoBruno);

function anosAteAposentar(anoNascimento, nome, sexo) {
    //se for M vai se aposentar com 65 anos
    //se for F vai se aposentar com 62 anos

    let idade = calculaIdade(anoNascimento);
    let idadeParaAposentar;
    switch (sexo) {
        case 'M':
        case 'Masculino':
            idadeParaAposentar = 65;
            break;
        case 'Feminino':
        case 'F':
            idadeParaAposentar = 62;
            break;
        default:
            console.log("Voce deve informar um sexo (M/Masculino ou F/Feminino)");
            return;
    }

    if (aposentadoria > 0) {
        let aposentadoria = idadeParaAposentar - idade;
        console.log(`${nome} ira se aposentar ira se aposentar em ${aposentadoria}`);
    } else {
        console.log(`${nome} se aposentou em  ${aposentadoria}`);
    }
}
console.log(calculaIdade(anoBruno, "Bruno", "M"));

//FUNCTION DECLARATION

function seuTrabalho(trabalho) {
    switch (trabalho) {
        case 'Professor':
            return 'Estou ensinando a codificar em JS';
        case 'Aluno':
            return 'Estou aprendendo a codifcar em JS';
        default:
            return 'Tenho um trabalho um tanto excentrico';
    }
}

console.log(seuTrabalho("Professor"));
console.log(seuTrabalho("Aluno"));
console.log(seuTrabalho("Físico"));


//FUNCTION EXPRESSION

let seuTrabalho = function(trabalho) {
    switch (trabalho) {
        case 'Professor':
            return 'Estou ensinando a codificar em JS';
        case 'Aluno':
            return 'Estou aprendendo a codifcar em JS';
        default:
            return 'Tenho um trabalho um tanto excentrico';
    }
}

console.log(seuTrabalho("Professor"));
console.log(seuTrabalho("Aluno"));
console.log(seuTrabalho("Físico"));