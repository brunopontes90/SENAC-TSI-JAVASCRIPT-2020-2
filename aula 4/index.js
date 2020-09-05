let usuario = {
    nome: "Bruno Pontes",
    peso: 90,
    altura: 1.90,
    imc: function() {
        return this.peso / (this.altura * this.altura);
    },
    aviso: function() {
        return this.imc() >= 30;
    }

};
// console.log(usuario.aviso());

//FOR

for (let i = 0; i < 10; i++) {
    console.log(i);
}

//FOR PARA RODAR ARRAY

/*let pontos = [100, 101, 102, 103, 104, 105];
let soma = 0;
for (let i = 0; i < pontos.length; i++) {
    soma += pontos[i];
}
console.log(soma);*/

//WHILE RODAR ARRAY
let pontos = [100, 101, 102, 103, 104, 105];
let i = 0;
let soma = 0;

while (i < pontos.length) {
    soma = pontos[i];
    i++;
}
console.log(soma);

let dados = ['Bruno', 29, 'Aluno'];
for (let i = 0; i < dados.length; i++) {
    if (typeof(dados[i]) !== 'string') continue;
    console.log(dados[i]);

}