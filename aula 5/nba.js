let nba = {
    times: [lakers, golden, cavaliers],
    vencedor: function() {
        let campeao = this.times[0];
        for (let i = 0; i < this.times.length; i++) {
            if (this.times[i].media() > campeao.media()) {
                campeao = this.times[i];
            }

        }
        return campeao.nome;
    }
}

console.log(`${lakers.nome}: ${lakers.media()} pontos`);
console.log(`${golden.nome}: ${golden.media()} pontos`);
console.log(`${cavaliers.nome}: ${cavaliers.media()} pontos`);
console.log(`O vencedor é: ${nba.vencedor()}`);