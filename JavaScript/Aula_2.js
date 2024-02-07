// " % " significa resto da divisão 
// uma condição (condicional) sempre retorna um boolean
// = "atribuição", == "igualdade", === "ele é igualdade idenpendete do tipo"

const numero = 0;
const numeroDivisivelPor5 = (numero % 5) === 0;

if (numero === 0) {
    console.log('o numero é invalido');
} else if (numeroDivisivelPor5) {
    console.log();
}

if (numeroDivisivelPor5) {
    console.log('sim');
} else {
    console.log('não');
}