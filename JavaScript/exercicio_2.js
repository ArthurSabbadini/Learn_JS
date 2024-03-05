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

const precoCombustivelEtanol = 6.6;
const precoCombustivelGasolina = 4.4;
const KmPorLitros = 7;
const DistanciaEmKm = 100;
let TipoCombustivel = "Etanol ";

const LitrosConsumidos = DistanciaEmKm / KmPorLitros;

if (TipoCombustivel === "Etanol") {
  const ValorGasto = LitrosConsumidos * precoCombustivelEtanol;
  console.log(
    "Seu combustivel é " +
      TipoCombustivel +
      "e o valor total ficou em " +
      ValorGasto.toFixed(2)
  );
} else {
  const ValorGasto = LitrosConsumidos * precoCombustivelGasolina;
  console.log(
    "seu combusvel é " +
      TipoCombustivel +
      "e o valor total ficou em " +
      ValorGasto.toFixed(2)
  );
}
