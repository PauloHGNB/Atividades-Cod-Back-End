// 3.

// Utilizando DOM: Crie um programa que leia os dados de um aluno: nome, matrícula,
//      disciplina, nota.
//    - Se a nota do aluno for maior ou igual a 60 exiba no console “Aprovado”.
//    - Se a nota do aluno for menor que 60 porém maior ou igual a 50
//    exiba no console “Em recuperação”
//    - Se a nota do aluno for menor que 50 exiba no console “Reprovado”.
//    criar nova propriedade chamada situacao para o aluno.

function reprovadoOuNao() {
  const nome = document.getElementById("nome").value;
  const matricula = document.getElementById("matricula").value;
  const disciplina = document.getElementById("disciplina").value;
  const nota = parseFloat(document.getElementById("nota").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(nota)) {
    console.log("Por favor, digite uma nota válida.");
    return;
  }

  let situacao;

  if (nota >= 60) {
    situacao = "Aprovado";
  } else if (nota >= 50) {
    situacao = "Em recuperação";
  } else {
    situacao = "Reprovado";
  }

  const aluno = {
    nome: nome,
    matricula: matricula,
    disciplina: disciplina,
    nota: nota,
    situacao: situacao,
  };

  resultado.textContent = `Dados do Aluno: Nome: ${aluno.nome}
    Matrícula: ${aluno.matricula}
    Disciplina: ${aluno.disciplina}
    Nota: ${aluno.nota}
    Situação? ${aluno.situacao}`;
}
