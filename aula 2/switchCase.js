let imc = 24.9;
switch (imc) {
    case 24.9:
        console.log(`Voce esta no limite do IMC ideal`);
        break;
    case (imc > 24.9 && imc <= 30.0):
        console.log(`Voce esta no limite do sobrepeso leve`);
        break;
    case 34.9:
        console.log(`Voce esta no limite do sobrepeso (moderado)`);
    case 39.9:
        console.log(`Voce esta no limite do sobrepeso (severa)`);
        break;
    default:
        console.log(`Voce esta não esta em nenhum limite`);
        break;
}

let profissao = 'Aluno';
switch (imc) {
    case 'Professor':
        console.log(`Voce esta compartilhando a tela`);
        break;
    case 'Aluno':
        console.log(`Voce esta recebendo conteudo`);
        break;
    case 'Jogador':
        console.log(`Voce esta jogando)`);
        break;
    default:
        console.log(`Voce esta viajando`);
        break;
}

let imc = 24.9;
switch (true) {
    case (imc <= 24.9):
        console.log(`Voce esta no limite do IMC ideal`);
        break;
    case (imc > 24.9 && imc <= 34.9):
        console.log(`Voce esta no limite do sobrepeso leve`);
        break;
    case (imc > 34.9 && imc <= 39.9):
        console.log(`Voce esta no limite do sobrepeso (moderado)`);
    default:
        console.log(`Voce esta superobeso`);
        break;
}