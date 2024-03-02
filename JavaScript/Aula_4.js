/* 
O IMC - indice de massa corporal é um criterio de organização mundial de saude para dar uma indicação sobre a condição de peso de uma pessoa adulta

formula IMC:
IMC = peso / (altura * altura)  'altura ao quadrado'

elabore um algoritimo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adulto condições:

Abaixo de 18.5 Abaixo do peso;
entre 18.5 e 25 peso normal;
entre 25 e 30 acima do peso;
entre 30 e 40 obeso;
acima de 40 obesidade grave;
*/

const peso = 30;
const altura = 1.65;

const IMC = peso / Math.pow(altura, 2);

if (IMC > 40) {
  console.log(
    IMC.toFixed(2) +
      " Essa é sua massa corporal, Você está imensa, Procure um medico urgente! (obesidade grave)"
  );
} else if (IMC > 30 && IMC < 40) {
  console.log(
    IMC.toFixed(2) +
      " Essa é sua massa corporal, você está quase imensa, procure um medico! (obesa)"
  );
} else if (IMC > 25 && IMC < 30) {
  console.log(
    IMC.toFixed(2) +
      " Essa é sua massa corporal, Está gorda, vá se tratar! (acima do peso)"
  );
} else if (IMC.toFixed(2) > 18.5 && IMC < 25) {
  console.log(
    IMC.toFixed(2) +
      " Essa é sua massa corporal, Tudo normal, Liberado! (peso normal)"
  );
} else {
  console.log(
    IMC.toFixed(2) +
      " Essa é sua massa corporal, Está uma vareta, coma mais! (abaixo do peso)"
  );
}
