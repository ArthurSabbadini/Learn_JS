/*
Para um jogo, precisamos saber se um personagem morreu ou não depois de sofrer um ataque. 
Faça uma função que receba 2 parâmetros, 'dano' e 'saude'. A função deve retornar '1' se 
o dano for matar o personagem (ou seja, deixar sua saúde menor ou igual a zero) e '0' caso contrário.
*/


//função que recebe 2 parâmetros e retorna 1 se dano for suficiente para matar e 0 se não for
function personagem(dano, saude) {
    if (dano >= saude) {
        return 'Personagem morreu (codigo de morte é) ' + 1;
    }else {
        return 'Personagem sobreviveu ao dano (codigo de sobrevivência é)' + 0;
    }
  }

// Uso da função
console.log (personagem(100, 100));

