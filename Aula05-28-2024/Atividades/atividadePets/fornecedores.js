let prompt = require("prompt-sync")();

function validarCNPJ(cnpj) {
  return cnpj.length === 14 && !isNaN(cnpj);
}

function validarTelefone(telefone) {
  let tel = /\(\d{2,3}\)\d{4,5}-\d{4}$/;
  return tel.test(telefone);
}

function validarNomeSobrenome(nome) {
    return isNaN(nome);
}

function lerDados() {
  let fornecedor = {};

  let nome;
  let sobrenome;

  do {
    nome = prompt('Nome: ');
    sobrenome = prompt('Sobrenome: ');
    if (!validarNomeSobrenome(nome, sobrenome)) {
        console.log('Não digite números.');
    } } while(!validarNomeSobrenome(nome, sobrenome));
    fornecedor.nome = nome;
    fornecedor.sobrenome = sobrenome;


  let cnpj;
  do {
    cnpj = prompt("CNPJ (14 dígitos): ");
    if (!validarCNPJ(cnpj)) {
      console.log("CNPJ inválido.");
    }
  } while (!validarCNPJ(cnpj));

  fornecedor.cnpj = cnpj;
}

