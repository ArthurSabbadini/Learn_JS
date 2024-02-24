/*  1) faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade
    calcule e imprima sua media e sua classificação conforme sua media a baixo

    media = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
    -media menor que 5, reprovado;
    -media entre 5 e 7, recuperação;
    -media acima de 7, passou de semestre;
*/

const nota1 = 2;
const nota2 = 2;
const nota3 = 2;

const media = (nota1 + nota2 + nota3) / 3;

if (media > 7) {
  console.log("você foi aprovado e sua media é " + media.toFixed(1));
} else if (media > 5 && media < 7) {
  console.log("Você precisa de recuperação e sua media é " + media.toFixed(1));
} else {
  console.log("Você foi reprovado e sua media é " + media.toFixed(1));
}
