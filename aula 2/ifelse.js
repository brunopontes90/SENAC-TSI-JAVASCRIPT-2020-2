/* IF - ELSE IF - ELSE
if (imc >= 24.9) {
    alert();
} else if (imc > 24.9 && imc <= 29.9) {
    alert();
} else if (imc > 29.9 && imc <= 34.9) {
    alert();
} else if (imc > 34.9 && imc <= 39.9) {
    alert();
} else {
    alert()
}*/
let resultado = imc > 30 ? 'está' : 'não esta';
alert(`Você ${resultado} no grupo de risco`);