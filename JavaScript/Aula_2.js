// " % " significa resto da divisão 
// uma condição (condicional) sempre retorna um boolean
// = "atribuição", == "igualdade", === "ele é igualdade idenpendete do tipo"

// Desafio aula 2

// Faça um programa para calcular o valor de uma viagem.
// Você tera 5 variaveis. sendo elas: 
// 1- preço do etanol
// 2-preço da gasolina
// 3- o tipo de combustivel do carro
// 4- gasto medio de combustivel do carro por km;
// 5- distancia em KM da viagem;

// imprima o valor que será gasto de combustivel para realizar esta viagem;


let PrecoEtanol = 5;
let PrecoGasolina = 6;
let TipoCombustivel;
let GastoPorKM;

if (PrecoEtanol < PrecoGasolina) {
    TipoCombustivel = 1;
    GastoPorKM = 9.0; // Definindo o valor de GastoPorKM para Etanol
} else {
    TipoCombustivel = 2;
    GastoPorKM = 5.5; // Definindo o valor de GastoPorKM para Gasolina
}

let DistanciaEmKM = 25;
let GastoMedioGasolina = PrecoGasolina * GastoPorKM * DistanciaEmKM;
let GastoMedioEtanol = PrecoEtanol * GastoPorKM * DistanciaEmKM;
let resultado = TipoCombustivel;

if (resultado === 1) {
    console.log('Seu tipo de combustivel é o Etanol e seu valor é ' + GastoMedioEtanol);
} else if (resultado === 2) {
    console.log('Seu tipo de combustível é a Gasolina e seu valor é ' + GastoMedioGasolina);
}
