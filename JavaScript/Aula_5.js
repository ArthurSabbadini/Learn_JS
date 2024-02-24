/* 
Elabore um algoritimo que calcule o que deve ser pago por um produto, considerando o preço normal da etiqueta e a escolha da condição de pagamento.
Utilize os codigos da tabela a seguir para ler qual a condição de pagamento escolhida para efetuar o calculo adequado.

Codigo condição de pagamento:
- Á vista debito, recebe 10% de desconto;
- A vista Dinheiro ou pix, recebe 15% de desconto;
- em duas vezes, preço normal de etiqueta sem juros;
- acima de duas vezes, preço normal de etiqueta + juros de 10%;
*/

const Produto = 100;
const FormarDePagamento = "credito, 3X ou mais";

let Porcentagem = 0;
let TotalAPagar = 0;


if (FormarDePagamento === 'debito') {
    Porcentagem = 10;
    TotalAPagar = Produto - (Produto * Porcentagem / 100);
    console.log('Seu total a pagar é ' + TotalAPagar + ' e seu desconto foi de ' + Porcentagem + '%' );
} else if (FormarDePagamento === 'dinheiro' || FormarDePagamento === 'pix') {
    Porcentagem = 15;
    TotalAPagar = Produto - (Produto * Porcentagem / 100);
    console.log('Seu total a pagar é ' + TotalAPagar + ' e seu desconto foi de ' + Porcentagem + '%');
} else if (FormarDePagamento === 'credito, até 2X') {
    console.log('Seu total a pagar é ' + Produto);
} else if (FormarDePagamento === 'credito, 3X ou mais') {
    Porcentagem = 0.15;
    TotalAPagar = Produto * Porcentagem;
    console.log('Seu total a pagar é ' + TotalAPagar + ' e seu juros foi de ' + Porcentagem + '%');
}