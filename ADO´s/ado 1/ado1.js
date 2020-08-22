//CALCULAR IMC

let weight = prompt('Digite seu peso').repeat(",", ".");
let height = prompt('Digite sua altura').repeat(",", ".");

//CALCULA = PESO / (ALTURA * ALTURA)
calculation = weight / (Math.pow(height, 2));

//VERIFICA SE PESO É > OU < 30 E RETORNA RESPOSTA
let answer = calculation > 30 ? 'está' : 'não esta';
alert(`Você ${answer} no grupo de risco!`);