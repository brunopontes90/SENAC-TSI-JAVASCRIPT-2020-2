let lakers = 89 + 120 + 103 + 100;
let goldenState = 97 + 105 + 110 + 99;
let cavaliers = 90 + 117 + 108 + 89;

let mediaLakers = lakers / 4;
let mediaGolden = goldenState / 4;
let mediaCavaliers = cavaliers / 4;

switch (true) {
    case (mediaLakers > mediaGolden && mediaLakers > mediaCavaliers):
        console.log(`O Los Angeles Lakers tem a maior media com ${mediaLakers} pontos`);
        break;
    case (mediaGolden > mediaLakers && mediaGolden > mediaCavaliers):
        console.log(`O Golden State Warriors tem a maior media com ${mediaGolden} pontos`);
        break;
    case (mediaCavaliers > mediaLakers && mediaCavaliers > mediaGolden):
        console.log(`O Golden State Warriors tem a maior media com ${mediaCavaliers} pontos`);
        break;
    default:
        console.log(`Todos os times tem a mesma pontuação`);
        break;
}