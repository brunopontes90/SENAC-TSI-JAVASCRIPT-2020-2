let gorjeta = function(valorDaConta) {
    return [valorDaConta * 0.10, valorDaConta * 0.16, valorDaConta * 0.18];
}

console.log(`Valor da conta R$ 124,00: ${gorjeta(124)}`);
console.log(`Valor da conta R$ 124,00: ${gorjeta(49)}`);
console.log(`Valor da conta R$ 124,00: ${gorjeta(261)}`);