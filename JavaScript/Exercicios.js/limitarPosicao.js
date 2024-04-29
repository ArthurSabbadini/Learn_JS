/* Precisamos limitar as posições em que um inimigo pode andar na tela. A menor posição possível é 0 e a maior, 100: 
qualquer valor maior que 100 ou menor que 0 sairia fora da tela. Precisamos de uma função LimitaPosicao que recebe 
uma POSICAO que pode ter qualquer valor positivo ou negativo, verifica se ela é válida ou não e retorna sempre um valor 
corrigido entre 0 e 100.
*/


/* quando o usuario digitar um numero maior que 0 a função exibe uma mensagem e ao digitar um maior que 100 ela exibe
outra mensagem e ajusta para o tamanho limite */
function limitaPosicao(posicao) {
    if (posicao < 0) {
        return '0 Você passou do limite permitido, ajustamos o tamanho';
    } else if (posicao > 100) {
        return '100 Você passou do limite permitido, ajustamos o tamanho';
    } else {
        return posicao;
    }
}

// Uso da função
console.log(limitaPosicao(120))
