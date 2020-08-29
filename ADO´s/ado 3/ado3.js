let calculationImc = {
    name: "Bruno",
    surName: "Pontes",
    imc: function() {
        weight = 69.7;
        height = 1.67;
        calculation = weight / Math.pow(height, 2);
        return calculation > 30 ? ' está no grupo de risco ' : ' não esta no grupo de risco ';
    },

    fullName: function() {
        return this.name + ' ' + this.surName + this.imc;
    },
    dataImc: function() {
        return this.imc;
    }
}

console.log(calculationImc.fullName());
console.log(calculationImc.dataImc());