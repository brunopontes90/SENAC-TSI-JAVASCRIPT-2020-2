//NAO FINALIZADO


let player1 = {
    nome: 'Bruno',
    jogo: function() {
        let jokempo = Math.floor(Math.random() * 3);
        switch (jokempo) {
            case 0:
                return 'Pedra';
            case 1:
                return 'Papel';
            case 2:
                return 'Tesoura';
            default:
                return 'ERRO!!';
        }
    }

}


let player2 = {
    nome: 'Maria',
    jogo: function() {
        let jokempo = Math.floor(Math.random() * 2 + 1);
        switch (jokempo) {
            case 1:
                return 'Pedra';
            case 2:
                return 'Papel';
            case 3:
                return 'Tesoura';
            default:
                return 'ERRO!!';
        }
    }

}




console.log(player1.jogo());
console.log(player2.jogo());