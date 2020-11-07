/**
 * Array = [1,2,3,4]
 */

// const boxes = document.querySelectorAll('.box');
// console.log(boxes);

//ES5
//EXECUTANDO BOXES 
// let array5 = Array.prototype.slice.call(boxes);
// console.log(array5);
// array5.forEach(function(el) {
//     el.style.backgroundColor = 'dodgerblue';
// });

//ES6
/*
let array6 = Array.from(boxes);
array6.forEach(el => {
    el.style.backgroundColor = 'dodgerblue';
});
*/

//ES5
/*
let array5 = Array.prototype.slice.call(boxes);
for (let i = 0; i < array5.length; i++) {
    if (array5[i].className == 'box azul') {
        continue;
    }
    array5[i].style.backgroundColor = 'dodgerblue';
    array5[i].textContent = 'Agora é azul';
}
*/

//ES6
//forOff
/*
for (const el of Array.from(boxes)) {
    if (el.className.includes('azul')) {
        continue;
    }
    el.style.backgroundColor = 'dodgerblue';
    el.textContent = 'Agora é azul';

}
*/

// let almondegas = ['Crew', 'Crew', 'Impostor', 'Crew'];

//ES5
// let arrayImpostor = almondegas.map(function(el) {
//     return el == 'Impostor';
// });

// console.log(almondegas);
// console.log(arrayImpostor);
// console.log(arrayImpostor.indexOf(true));

// console.log(almondegas[arrayImpostor.indexOf(true)]);

// //ES6

// let iImpostor = almondegas.findIndex(el => el == 'Impostor');
// console.log(iImpostor);
// console.log(almondegas[iImpostor]);

// let impostor = almondegas.find(el => el == 'Impostor');
// console.log(impostor);


/**
 * Spread Operator (operador de propagação)
 */

function soma(a, b, c, d) {
    return a + b + c + d;
}

let soma1 = soma(1, 5, 3, 6);
console.log(soma1);

let valores = [1, 5, 3, 6];
let soma2 = soma(valores[0], valores[1], valores[2], valores[3]);
console.log(soma2);

//ES5
//quem é o this, null
// let soma3 = soma.apply(null, valores);
// console.log(soma3);

// //ES6
// let soma4 = soma(...valores);
// console.log(soma4);

//Outros exemplos
// const fam1 = ['Thyago', 'Marco', 'Maria', 'Symone'];
// const fam2 = ['Giulia', 'Elias', 'Silvia', 'Victor'];

// const novaFam = [...fam1, 'Nyna', ...fam2];
// console.log(novaFam);

//outro exemplo
// const boxes = document.querySelectorAll('.box');
// const h = document.querySelector('h1');

// const todosElementos = [h, ...boxes];
// todosElementos.forEach(el => el.style.color = 'purple');

/**
 * Rest Parameter
 */

//ES5
function semArgumento5() {
    console.log(arguments);
    let array = Array.prototype.slice.call(arguments);
    console.log(array);
}

semArgumento5(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);

//ES6
/*
function semArgumento6(nome, ...nomeDaVar) {
    console.log(nome);
    console.log(nomeDaVar);
}

semArgumento6('Bruno', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);
*/

/**
 * Default Parameters
 */

//ES5
function Quintas5(firstName, anoNasc, lastName) {

    lastName == undefined ? lastName == 'Quintas' : lastName;

    this.firstName = firstName;
    this.lastName = lastName;
    this.anoNasc = anoNasc;
}

let thyago = new Quintas5('Thyago', 1987);
let giuliana = new Quintas5('Giuliana', 1987, 'Sousa');
console.log(thyago, giuliana);


//ES6
function Quintas6(firstName, anoNasc, lastName = 'Quintas') {

    this.firstName = firstName;
    this.lastName = lastName;
    this.anoNasc = anoNasc;
}

let thyago6 = new Quintas5('Thyago', 1987);
let giuliana6 = new Quintas5('Giuliana', 1987, 'Sousa');
console.log(thyago6, giuliana6);