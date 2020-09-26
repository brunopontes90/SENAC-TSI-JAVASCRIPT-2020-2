let player1 = {
    id: 1,
    parOuImpar: undefined, //true: par e false: impar
    cerebro: {
        dedos: 0,
        pensarEmUmNumero: function() {
            this.dedos = Math.floor(Math.random() * 6);
        },
        mostrarAMao: function() {
            document.querySelector('#mao-player-1').textContent = this.dedos;
        }
    }
}

let player2 = {
    id = 2,
    parOuImpar: undefined, //true: par e false: impar
    cerebro: {
        dedos: 0,
        pensarEmUmNumero: function() {
            this.dedos = Math.floor(Math.random() * 6);
        },
        mostrarAMao: function() {
            document.querySelector('#mao-player-2').textContent = this.dedos;
        }
    }
}

let parOuImpar = {
    jogadores: [player1, player2],
    atribuiParOuImparAosPlayers: function(select) {
        /**
         * Receber a decisão do player se ele vai escolher Par ou Impar
         */
        let value = select[select.selectIndex].value == "par";
        this.jogadores[0].parOuImpar = value;
        this.jogadores[1].parOuImpar = !value;

    },
    jogada: function() {
        if (this.jogadores[0].parOuImpar === undefined) {
            alert("Selecione par ou impar");
            return;
        }
        this.jogadores[0].cerebro.pensarEmUmNumero();
        this.jogadores[1].cerebro.pensarEmUmNumero();



        this.jogadores[0].cerebro.mostrarAMao();
        this.jogadores[1].cerebro.mostrarAMao();

        let total = this.jogadores[0].cerebro.dedos + this.jogadores[1].cerebro.dedos;
        if (total % 2 == 0) {
            if (this.jogadores[0].parOuImpar) {
                document.querySelector("mesagem").textContent = "Jogador 1 venceu, total = " + total + " o valor é PAR.";
            } else {
                alert("Jogador 2 venceu, total = " + total + " o valor é IMPAR.");
            }
        } else {
            if (!this.jogadores[0]) {

            }

        }
    }
}