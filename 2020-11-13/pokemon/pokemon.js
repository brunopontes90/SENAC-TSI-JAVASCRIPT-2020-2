class Pokemon {
    constructor(velocidade, vida, idade) {
        this.velocidade = velocidade;
        this.vida = vida;
        this.idade = idade;
    }
}

class Leaf extends Pokemon {
    constructor(velocidade, vida, idade) {
        super(velocidade, vida, idade);

    }
    dano(tipo, pontos) {
        if (tipo == "Fire") {
            pontos *= 2;
        }
        console.log(`Recebi dando do tipo ${tipo},  retirou ${pontos} pontos`);
    }

}

class Fire extends Pokemon {
    constructor(velocidade, vida, idade) {
        super(velocidade, vida, idade);
    }
    dano(tipo, pontos) {
        if (tipo == "Water") {
            pontos *= 2;
        }
        console.log(`Recebi dano do tipo ${tipo}, retirado ${pontos} pontos`);
    }

}

class Water extends Pokemon {
    constructor(velocidade, vida, idade) {
        super(velocidade, vida, idade);
    }
    dano() {
        if (tipo == "Leaf") {
            pontos *= 2;
        }
        console.log(`Recebi dano do tipo ${tipo}, retirado ${pontos} pontos`);
    }
}

class Bulbasaur extends Leaf {
    constructor(velocidade, vida, idade) {
        super(velocidade, vida, idade);
    }
    som() {
        console.log('Buuuuuuulbasaur');
    }
    ataque1() {
        console.log('Folha navalha');
    }
    ataque2() {
        console.log('Chicote de Vinha');
    }
}

class Charmander extends Fire {
    constructor(velocidade, vida, idade) {
        super(velocidade, vida, idade);
    }
    som() {
        console.log('Chamander, char');
    }
    ataque1() {
        console.log('Presas de Fogo');
    }
    ataque2() {
        console.log('Cauda de Chamas');
    }
}
class Squirtle extends Water {
    constructor(velocidade, vida, idade) {
        super(velocidade, vida, idade);
    }
    som() {
        console.log('Squitle, Squi');
    }
    ataque1() {
        console.log("Bolha");
    }
    ataque2() {
        console.log("Chuva Borrifantes");
    }
}

let bulba = new Bulbasaur(10, 50, 3);
bulba.ataque1();
let char = new Charmander(10, 50, 3);
char.ataque2();
let squir = new Squirtle(10, 50, 3);
squir.som();