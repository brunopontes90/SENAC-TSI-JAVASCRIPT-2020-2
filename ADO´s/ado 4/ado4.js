let lakers = {
    name: 'Los Angeles Lakers',
    points: [89, 120, 103, 100],
    media: function() {
        let soma = 0;
        for (let i = 0; i < this.points.length; i++) {
            soma += this.points[i];
        }
        return soma / this.points.length;
    }
}

let golden = {
    name: 'Golden State Warriors',
    points: [97, 105, 110, 99],
    media: function() {
        let soma = 0;
        for (let i = 0; i < this.points.length; i++) {
            soma += this.points[i];
        }
        return soma / this.points.length;
    }
}

let cavaliers = {
    name: 'Cleveland Cavaliers',
    points: [90, 117, 108, 89],
    media: function() {
        let soma = 0;
        for (let i = 0; i < this.points.length; i++) {
            soma += this.points[i];
        }
        return soma / this.points.length;
    }
}

let pontuacao = {
    ganhou: function() {
        if (lakers.media() == golden.media() && lakers.media() == cavaliers.media() &&
            golden.media() == lakers.media() && golden.media() == cavaliers.media() &&
            cavaliers.media() == lakers.media() && cavaliers.media() == golden.media()) {
            console.log('Empate entre a pontuação dos times');
        } else {
            if (lakers.media() > golden.media() && lakers.media() > cavaliers.media()) {
                return lakers.media();
            } else if (golden.media() > lakers.media() && golden.media() > cavaliers.media()) {
                return golden.media();
            } else if (cavaliers.media() > lakers.media() && cavaliers.media() > golden.media()) {
                return cavaliers.media();
            }
        }
    }
}

console.log(`Lakers: ${lakers.media()}`);
console.log(`Golden: ${golden.media()}`);
console.log(`Cavaliers: ${cavaliers.media()}`);
console.log(`A maior pontuação foi ${pontuacao.ganhou()}`);