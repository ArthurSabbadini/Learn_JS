// Desafio aula 1

// Faça um prgrama para calcular o valor de uma viagem.
// Você tera 3 variaveis. sendo elas: 
// 1- preço do combustivel
// 2- gasto médio de combustivel do carro por KM
// 3- Distância em KM da viagem

// imprima o valor que será gasto de combustivel para realizar esta viagem.

const precoCombustivel = 5.40;
const KmPorLitros = 5;
const DistanciaEmKm = 100;

const LitrosConsumidos = DistanciaEmKm / KmPorLitros;
const ValorGasto = LitrosConsumidos * precoCombustivel;
    console.log('O valor que ira gastar é ' + ValorGasto);