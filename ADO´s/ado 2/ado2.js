let lakers = (89 + 120 + 103 + 100) / 4;
let goldenState = (97 + 105 + 110 + 99) / 4;
let cavaliers = (90 + 117 + 108 + 89) / 4;

// VERIFICANDO 2 VARIAVEIS COM TERNARIO
// let vencedor = lakers > goldenState ? `O vencedor é ${lakers}` : `O vencedor é ${goldenState}`;
// console.log(vencedor);

switch (true) {
    case (lakers > goldenState && lakers > cavaliers):
        console.log(`O Los Angeles Lakers tem a maior media com ${lakers} pontos`);
        break;
    case (goldenState > lakers && goldenState > cavaliers):
        console.log(`O Golden State Warriors tem a maior media com ${goldenState} pontos`);
        break;
    case (cavaliers > lakers && cavaliers > goldenState):
        console.log(`O Golden State Warriors tem a maior media com ${cavaliers} pontos`);
        break;
    default:
        console.log(`Todos os times tem a mesma pontuação`);
        break;
}