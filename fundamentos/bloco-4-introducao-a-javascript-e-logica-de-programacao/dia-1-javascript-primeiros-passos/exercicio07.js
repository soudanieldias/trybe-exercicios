//Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
//  Porcentagem >= 90 -> A
//  Porcentagem >= 80 -> B
//  Porcentagem >= 70 -> C
//  Porcentagem >= 60 -> D
//  Porcentagem >= 50 -> E
//  Porcentagem < 50 -> F

//O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let nota_aluno = 100;

if (nota_aluno >= 90 && nota_aluno <= 100)
{
    console.log("NOTA: A");
} else if (nota_aluno >= 80 && nota_aluno < 90 )
{
    console.log("NOTA: B");
} else if (nota_aluno >= 70 && nota_aluno < 80)
{
    console.log("NOTA: C");
} else if (nota_aluno >= 60 && nota_aluno < 70)
{
    console.log("NOTA: D");
} else if (nota_aluno >= 50 && nota_aluno < 60)
{
    console.log("NOTA: E");
} else if (nota_aluno < 50 && nota_aluno > 0)
{
    console.log("NOTA: F");
} else if (nota_aluno < 0 || nota_aluno > 100)
{
    console.log("[ERRO] Nota Inválida (Maior que o Máximo ou Menor que o Mínimo): " + nota_aluno);
} else
{
    console.log("[ERRO] Nota Inválida: " + nota_aluno);
}