// 2.

// Utilizando DOM: Crie um programa que leia os dados de um usuário:
//     nome, sobrenome, CPF, sexo, data de nascimento, endereço e telefone e exiba no console.

function exibirDados() {
  const nome = document.getElementById("nome").value;
  const sobrenome = document.getElementById("sobrenome").value;
  const cpf = document.getElementById("cpf").value;
  const sexo = document.getElementById("sexo").value;
  const dataNascimento = document.getElementById("dataNascimento").value;
  const endereco = document.getElementById("endereco").value;
  const telefone = document.getElementById("telefone").value;
  const informacoes = document.getElementById("informacoesDoUsuario");

  informacoes.textContent = `Dados do Usuário:
  Nome: ${nome} 
  Sobrenome: ${sobrenome} 
  CPF: ${cpf} Sexo: ${sexo} 
  Data de Nascimento: ${dataNascimento} 
  Endereço: ${endereco} 
  Telefone: ${telefone}`;
}
