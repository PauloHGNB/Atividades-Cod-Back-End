// --------------------------------------------------1. Utilizando objeto: Crie um programa que leia os dados de um usuário:
// nome, sobrenome, CPF, sexo, data de nascimento, endereço e telefone e exiba no console.

// let pessoa = {

// };

// let prompt = require('prompt-sync')();
// pessoa.nome = prompt('Digite seu nome: ');
// pessoa.sobrenome = prompt('Digite seu sobrenome: ');
// pessoa.cpf = prompt('Digite seu CPF: ');
// pessoa.sexo = prompt('Digite seu sexo (M ou F): ');
// pessoa.dataNasc = prompt('Digite sua data de nascimento (dd-mm-aaaa): ');
// pessoa.endereco = prompt('Digite seu endereço: ');
// pessoa.telefone = prompt('Digite seu telefone: ');

// console.log(`\nPessoa: `);
// console.log(pessoa);

// --------------------------------------------------2. Utilizando objeto: Crie um programa que leia os dados de um aluno: nome, matrícula,
//      disciplina, nota.
//    - Se a nota do aluno for maior ou igual a 60 exiba no console “Aprovado”.
//    - Se a nota do aluno for menor que 60 porém maior ou igual a 50
//    exiba no console “Em recuperação”
//    - Se a nota do aluno for menor que 50 exiba no console “Reprovado”.
//    criar nova propriedade chamada situacao para o aluno.

// let aluno = {
//   nome: "paulo",
//   matricula: 159951,
//   disciplina: "filosofia",
//   nota: 30,
// };

// let situacao = "";

// if (aluno.nota >= 60) {
//   situacao = "Aprovado!!!";
// } else if (aluno.nota < 60 && aluno.nota >= 50) {
//   situacao = "Em recuperação.";
// } else {
//   situacao = "Reprovado!";
// }

// console.log(situacao);

// ATIVIDADES ARRAY

// --------------------------------------------------ATIVIDADE 1. Utilizando arrays: A imobiliária ABC vende apenas terrenos retangulares.
// Crie um programa para ler as dimensões de um terreno e depois exibir a área do terreno.

// let terreno = [];
// let prompt = require('prompt-sync')();
// for(i=0; i<= 1; i++){
//     terreno[i] = prompt(`Digite a ${i+1}ª dimensão do terreno (em metros): `);
// }
// console.log(`A área do terreno é ${terreno[0]*terreno[1]}m².`);

// --------------------------------------------------ATIVIDADE 2. Utilizando arrays: Crie um programa que leia o nome e o preço de 8 produtos.
// No final, mostre no console qual foi o nome e preço do maior e qual foi o nome e preço do menor preço digitados.

// let prompt = require('prompt-sync')();
// let nomeProdutos = [];
// let precoProdutos = [];
// for (i=0; i<=7; i++){
//     nomeProdutos[i] = prompt(`Digite o nome do ${i+1} produto: `);
//     precoProdutos[i] = parseFloat(prompt(`Agora digite seu preço (em reais): `));
//     }
// let maiorPrecoIndex = precoProdutos.indexOf(Math.max(...precoProdutos));
// let nomeMaiorPreco = nomeProdutos[maiorPrecoIndex];
// let maiorPreco = precoProdutos[maiorPrecoIndex];

// let menorPrecoIndex = precoProdutos.indexOf(Math.min(...precoProdutos));
// let nomeMenorPreco = nomeProdutos[menorPrecoIndex];
// let menorPreco = precoProdutos[menorPrecoIndex];

// console.log(`O produto que tem o maior preço é ${nomeMaiorPreco}, custando R$${maiorPreco}.
// O produto com o menor preço é ${nomeMenorPreco}, custando R$${menorPreco}.`);

// --------------------------------------------------ATIVIDADE 3. Utilizando arrays:  Crie um programa que leia o nome, a idade e o sexo de 5 pessoas,
// mostrando no final:
// a) Quantos homens foram cadastrados
// b) Quantas mulheres foram cadastradas
// c) A média de idade do grupo
// d) A média de idade dos homens
// e) Quantas mulheres tem mais de 20 anos

// let prompt = require("prompt-sync")();

// let nomes = [];
// let idades = [];
// let sexos = [];
// let tHomens = 0;
// let tMulheres = 0;
// let tIdadeGrupo = 0;
// let tIdadeHomens = 0;
// let mulheres20 = 0;

// for (i = 0; i <= 4; i++) {
//   nomes[i] = prompt(`Digite o nome da ${i + 1}ª pessoa: `);
//   while (true) {
//     idades[i] = parseInt(prompt("Digite a idade: "));
//     if (!isNaN(idades[i])) {
//       break;
//     } else {
//       console.log("Por favor, digite uma idade válida.");
//     }
//   }
//   while (true) {
//     sexos[i] = prompt(
//       "Digite seu sexo (M - masculino / F - feminino): "
//     ).toUpperCase();
//     if (sexos[i] === "M" || sexos[i] === "F") {
//       break;
//     } else {
//       console.log("Por favor, digite 'M' para masculino ou 'F' para feminino.");
//     }
//   }

//   tIdadeGrupo = tIdadeGrupo + idades[i];

//   if (sexos[i] === "M") {
//     tHomens++;
//     tIdadeHomens = tIdadeHomens + idades[i];
//   } else {
//     tMulheres++;
//     if (idades[i] > 20) {
//       mulheres20++;
//     }
//   }
// }

// console.log(`a) Total de homens: ${tHomens}`);
// console.log(`b) Total de mulheres: ${tMulheres}`);
// console.log(`c) Média de idade do grupo: ${tIdadeGrupo / 5}`);
// console.log(`d) Média de idade dos homens: ${tIdadeHomens / tHomens}`);
// console.log(`e) Mulheres acima de 20 anos: ${mulheres20}`);

// --------------------------------------------------ATIVIDADE 4. Utilizando arrays: Crie um programa que leia o peso e a altura de 7 pessoas,
// mostrando no final:
// a) Qual foi a média de altura do grupo
// b) Quantas pessoas pesam mais de 90Kg
// c) Quantas pessoas que pesam menos de 50Kg tem menos de 1.60m
// d) Quantas pessoas que medem mais de 1.90m pesam mais de 100Kg

// let pesos = [];
// let alturas = [];

// for (let i = 0; i < 7; i++) {
//   let peso = parseFloat(prompt(`Digite o peso da pessoa ${i + 1} (em Kg):`));
//   let altura = parseFloat(
//     prompt(`Digite a altura da pessoa ${i + 1} (em metros):`)
//   );
//   pesos.push(peso);
//   alturas.push(altura);
// }

// let somaAlturas = 0;
// for (let i = 0; i < 7; i++) {
//   somaAlturas += alturas[i];
// }

// let mediaAltura = somaAlturas / alturas.length;

// let maisDe90Kg = 0;
// for (let i = 0; i < 7; i++) {
//   if (pesos[i] > 90) {
//     maisDe90Kg++;
//   }
// }

// let menosDe50KgMenosDe160m = 0;
// for (let i = 0; i < 7; i++) {
//   if (pesos[i] < 50 && alturas[i] < 1.6) {
//     menosDe50KgMenosDe160m++;
//   }
// }

// let maisDe190mMaisDe100Kg = 0;
// for (let i = 0; i < 7; i++) {
//   if (alturas[i] > 1.9 && pesos[i] > 100) {
//     maisDe190mMaisDe100Kg++;
//   }
// }

// console.log(`a) A média de altura do grupo é: ${mediaAltura.toFixed(2)}m`);
// console.log(`b) ${maisDe90Kg} pessoas pesam mais de 90Kg`);
// console.log(
//   `c) ${menosDe50KgMenosDe160m} pessoas que pesam menos de 50Kg têm menos de 1.60m`
// );
// console.log(
//   `d) ${maisDe190mMaisDe100Kg} pessoas que medem mais de 1.90m pesam mais de 100Kg`
// );

// --------------------------------------------------ATIVIDADE 5. Utilizando arrays: Crie um programa que leia os dados de um aluno:
// matrícula, nome completo, nome do curso, 5 disciplinas do curso com 5 notas (uma para cada disciplina).
// Ao final, mostre no console a média geral do aluno no curso.

// let listaAlunos = [];
// let aluno = {};
// aluno.nome = prompt("Digite o nome completo do aluno: ");
// aluno.curso = prompt("Digite o nome do curso: ");
// aluno.disciplina1 = prompt("Digite o nome da 1° disciplina: ");
// aluno.notaDisciplina1 = parseFloat(prompt("Digite o nota da 1° disciplina: "));
// aluno.disciplina2 = prompt("Digite o nome da 2° disciplina: ");
// aluno.notaDisciplina2 = parseFloat(prompt("Digite o nota da 2° disciplina: "));
// aluno.disciplina3 = prompt("Digite o nome da 3° disciplina: ");
// aluno.notaDisciplina3 = parseFloat(prompt("Digite o nota da 3° disciplina: "));
// aluno.disciplina4 = prompt("Digite o nome da 4° disciplina: ");
// aluno.notaDisciplina4 = parseFloat(prompt("Digite o nota da 4° disciplina: "));
// aluno.disciplina5 = prompt("Digite o nome da 5° disciplina: ");
// aluno.notaDisciplina5 = parseFloat(prompt("Digite o nota da 5° disciplina: "));
// listaAlunos.push(aluno);

// let mediaAluno =
//   (listaAlunos[0].notaDisciplina1 +
//     listaAlunos[0].notaDisciplina2 +
//     listaAlunos[0].notaDisciplina3 +
//     listaAlunos[0].notaDisciplina4 +
//     listaAlunos[0].notaDisciplina5) /
//   5;

// console.log(
//   `A média do aluno ${listaAlunos[0].nome} do curso ${listaAlunos[0].curso} é de: ${mediaAluno}`
// );
