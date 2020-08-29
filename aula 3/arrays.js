//ARRAYS

let nome = ['Bruno', 'Aluno 1', 'aluno 2'];
let anos = new Array(1990, 1987, 2002); //OUTRA FORMA DE DECLARAR

// 0: Bruno
// 1: Aluno 1
// 2: Aluno 2
// Tamanho do Array = 3


//imprimindo os valores
console.log(nome[0]);
console.log(nome.length);

//alterar um valor em uma posição
nome[2] = "Aluno 2";
console.log(nome[2]);

//Adicionar valor a um array
nome[3] = "Avó do aluno 1";

//Imprimindo o array inteiro
console.log(nome);

//Criar um novo Array (diferentes tipos)
let bruno = ["Bruno", "Aluno", 1990];
console.log(bruno);
console.log(2020 - bruno[2]); //fazendo calculo

//colocar um valor no final do array
bruno.push(true);
bruno.push("Teste");

//colocar um valor no inicio do array
bruno.unshift("Mr.");

//Apagar o valor final de um array
bruno.pop();

//Procurar um valor em um array (casoi nao encontra retorna -1)
console.log(bruno.indexOf(1990));
console.log(bruno.indexOf("Aluno"));
console.log(bruno.indexOf("Professor") !== -1 ? 'É professor' : 'Bruno não é professor');


console.log(bruno);