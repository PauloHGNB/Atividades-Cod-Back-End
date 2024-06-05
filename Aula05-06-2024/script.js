// --------------------------------------------------------------------------------------------------------------------------------------------
// 1.Crie um programa que leia os dados de um aluno:
//     nome, sobrenome, CPF (11 digitos), sexo (M-Masculino, F-Feminino, O-Outros),
//     data de nascimento, endereço e telefone (Formato (032) 0 0000-0000) e exiba no console.

// let pessoa = {};

// while (true) {
//   try {
//     pessoa.nome = prompt("Digite o seu nome: ");
//     let regexNome = /^[a-zA-ZÀ-ÿ\s']{3,}$/;

//     if (regexNome.test(pessoa.nome)) {
//       break;
//     } else {
//       throw new Error("Por favor, digite um nome válido.");
//     }
//   } catch (error) {
//     console.log("Por favor, digite um nome válido.");
//   }
// }

// while (true) {
//   try {
//     pessoa.sobrenome = prompt("Digite o seu sobrenome: ");
//     let regexNome = /^[a-zA-ZÀ-ÿ\s']{3,}$/;

//     if (regexNome.test(pessoa.sobrenome)) {
//       break;
//     } else {
//       throw new Error("Por favor, digite um nome válido.");
//     }
//   } catch (error) {
//     console.log("Por favor, digite um nome válido.");
//   }
// }

// while (true) {
//   try {
//     pessoa.cpf = parseInt(prompt("Digite o seu cpf: "));
//     if (/\d{11}/.test(pessoa.cpf)) {
//       break;
//     } else {
//       throw new Error("Por favor, digite somente números e 11 digitos.");
//     }
//   } catch (error) {
//     console.log("Por favor, digite somente números e 11 digitos.");
//   }
// }

// while (true) {
//   try {
//     pessoa.sexo = prompt(
//       "Digite seu sexo (M-masculino, F-feminino, O-outros?) :"
//     ).toUpperCase();
//     if (pessoa.sexo === "M" || pessoa.sexo === "F" || pessoa.sexo === "O") {
//       break;
//     } else {
//       throw new Error(
//         "Por favor, digite 'M' para masculino, 'F' para feminino ou 'O' para outros."
//       );
//     }
//   } catch (error) {
//     console.log(
//       "Por favor, digite 'M' para masculino, 'F' para feminino ou 'O' para outros."
//     );
//   }
// }

// while (true) {
//   try {
//     let dataNascimento = prompt("Digite sua data de nascimento (dd/mm/yyyy):");

//     if (/^\d{2}\/\d{2}\/\d{4}$/.test(dataNascimento)) {
//       let partesData = dataNascimento.split("/");
//       let dia = parseInt(partesData[0]);
//       let mes = parseInt(partesData[1]);
//       let ano = parseInt(partesData[2]);

//       if (!isNaN(dia) && !isNaN(mes) && !isNaN(ano)) {
//         if (dia > 0 && dia < 32 && mes > 0 && mes < 13 && ano < 2025) {
//           pessoa.dataNascimento = new Date(ano, mes, dia);
//           break;
//         } else {
//           throw new Error("Data inválida.");
//         }
//       } else {
//         throw new Error("Data inválida.");
//       }
//     } else {
//       throw new Error("Formato de data inválido.");
//     }
//   } catch (error) {
//     console.log("Data inválida. Por favor, tente novamente.");
//   }
// }

// pessoa.endereco = prompt("Digite o seu endereço: ");

// while (true) {
//   try {
//     pessoa.telefone = prompt("Digite seu telefone: ");
//     let tel = /\(\d{2,3}\)\d{4,5}-\d{4}/;
//     if (tel.test(pessoa.telefone)) {
//       break;
//     } else {
//       throw new Error("Telefone Inválido");
//     }
//   } catch (error) {
//     console.log("Telefone Inválido.");
//   }
// }

// console.log(pessoa);

// --------------------------------------------------------------------------------------------------------------------------------------------
// 2.Crie um programa que leia o número de alunos de uma turma.
//     Após isso, o programa deve ler as notas das 2 avaliações de cada aluno e calcular e exibir:
//     o nome, a média de cada aluno e se o aluno foi aprovado ou reprovado.
//     Considere como média para aprovação 60 pontos ou mais.

// let turma = [];
// let quantidadeAlunos = 0;
// while (true) {
//   try {
//     quantidadeAlunos = parseInt(
//       prompt("Qual a quantidade de alunos da turma: ")
//     );
//     if (!isNaN(quantidadeAlunos)) {
//       break;
//     } else {
//       throw new Error("Por favor, digite um valor válido.");
//     }
//   } catch (error) {
//     console.log("Por favor, digite um valor válido.");
//   }
// }

// for (let i = 0; i < quantidadeAlunos; i++) {
//   let aluno = {};
//   console.log("------------------------------------------");

//   while (true) {
//     try {
//       aluno.nome = prompt("Digite o nome do aluno: ");
//       let regexNome = /^[a-zA-ZÀ-ÿ\s']{3,}$/;

//       if (regexNome.test(aluno.nome)) {
//         break;
//       } else {
//         throw new Error("Por favor, digite um nome válido.");
//       }
//     } catch (error) {
//       console.log("Por favor, digite um nome válido.");
//     }
//   }

//   while (true) {
//     try {
//       aluno.nota1 = parseInt(
//         prompt(`Qual a primeira nota do ${aluno.nome} (0 a 100) :`)
//       );
//       if (!isNaN(aluno.nota1)) {
//         if (aluno.nota1 > 0 && aluno.nota1 <= 100) {
//           break;
//         } else {
//           throw new Error("Por favor, digite uma nota válida.");
//         }
//       } else {
//         throw new Error("Por favor, digite uma nota válida.");
//       }
//     } catch (error) {
//       console.log("Por favor, digite uma nota válida.");
//     }
//   }

//   while (true) {
//     try {
//       aluno.nota2 = parseInt(
//         prompt(`Qual a segunda nota do ${aluno.nome} (0 a 100) :`)
//       );
//       if (!isNaN(aluno.nota2)) {
//         if (aluno.nota2 > 0 && aluno.nota2 <= 100) {
//           break;
//         } else {
//           throw new Error("Por favor, digite uma nota válida.");
//         }
//       } else {
//         throw new Error("Por favor, digite uma nota válida.");
//       }
//     } catch (error) {
//       console.log("Por favor, digite uma nota válida.");
//     }
//   }

//   aluno.media = ((aluno.nota1 + aluno.nota2) / 2).toFixed("2");

//   if (aluno.media >= 60) {
//     aluno.classificacao = "aprovado";
//   } else {
//     aluno.classificacao = "reprovado";
//   }
//   turma.push(aluno);
// }
// console.log();

// for (let i = 0; i < turma.length; i++) {
//   console.log();
//   console.log(`---------------- Aluno ${i + 1} ----------------`);
//   console.log(
//     `${turma[i].nome} está com a média de ${turma[i].media} está ${turma[i].classificacao}.`
//   );
// }

// --------------------------------------------------------------------------------------------------------------------------------------------
// 3.Crie um programa que leia os dados de um grupo de 10 pessoas:
//     nome, sexo (M-Masculino, F-Feminino, P-Prefiro não dizer, O-Outros),
//     idade e estado civil (C-Casado(a), S-Solteiro(a) e V-Viúvo(a)),
//     exibindo ao final do programa:
//         - A média de idade do grupo
//         - A soma de todas as idades do grupo
//         - De quem foi a maior idade lida, exiba todas as informações da pessoa
//         - De quem foi a menor idade lida, exiba todas as informações da pessoa
//         - Quantas pessoas tem mais de 20 anos, exiba todas as informações dessas pessoas
//         - Quantas pessoas tem menos de 10 anos, exiba todas as informações dessas pessoas
//         - Quantas pessoas do sexo masculino, exiba todas as informações dessas pessoas
//         - Quantas pessoas do sexo feminino, exiba todas as informações dessas pessoas
//         - Quantas pessoas se absteram de dizer o sexo ou marcaram outros,
//         exiba todas as informações dessas pessoas
//         - Quantas pessoas são casadas, exiba todas as informações dessas pessoas
//         - Quantas pessoas são solteiras, exiba todas as informações dessas pessoas
//         - Quantas pessoas são viúvas, exiba todas as informações dessas pessoas

// let pessoas = [];
// let quantidadePessoa = 0;

// while (true) {
//   try {
//     quantidadePessoa = parseInt(prompt("Qual a quantidade de pessoas: "));
//     if (!isNaN(quantidadePessoa)) {
//       break;
//     } else {
//       throw new Error("Por favor, digite um valor válido.");
//     }
//   } catch (error) {
//     console.log("Por favor, digite um valor válido.");
//   }
// }

// for (let i = 0; i < quantidadePessoa; i++) {
//   let pessoa = {};

//   while (true) {
//     try {
//       pessoa.nome = prompt("Digite o nome da pessoa: ");
//       let regexNome = /^[a-zA-ZÀ-ÿ\s']{3,}$/;

//       if (regexNome.test(pessoa.nome)) {
//         break;
//       } else {
//         throw new Error("Por favor, digite um nome válido.");
//       }
//     } catch (error) {
//       console.log("Por favor, digite um nome válido.");
//     }
//   }

//   while (true) {
//     try {
//       pessoa.sexo = prompt(
//         "Sexo (M-Masculino, F-Feminino, P-Prefiro não dizer, O-Outros): "
//       );
//       let regexOU = /(M|F|P|O)/i;

//       if (regexOU.test(pessoa.sexo)) {
//         break;
//       } else {
//         throw new Error("Por favor, digite um caracter válido.");
//       }
//     } catch (error) {
//       console.log("Por favor, digite um caracter válido.");
//     }
//   }

//   while (true) {
//     try {
//       pessoa.idade = parseInt(prompt(`Qual a idade do(a) ${pessoa.nome}: `));
//       if (!isNaN(pessoa.idade)) {
//         break;
//       } else {
//         throw new Error("Por favor, digite um valor válido.");
//       }
//     } catch (error) {
//       console.log("Por favor, digite um valor válido.");
//     }
//   }

//   while (true) {
//     try {
//       pessoa.estadoCivil = prompt(
//         "Estado cívil (C-Casado(a), S-Solteiro(a) e V-Viúvo(a)): "
//       );
//       let regexOU = /^[CSV]$/i;

//       if (regexOU.test(pessoa.estadoCivil)) {
//         break;
//       } else {
//         throw new Error("Por favor, digite um caracter válido.");
//       }
//     } catch (error) {
//       console.log("Por favor, digite um caracter válido.");
//     }
//   }

//   pessoas.push(pessoa);
// }

// let base1 = {
//   nome: "",
//   sexo: "",
//   idade: 0,
//   estadoCivil: "",
// };
// let base2 = {
//   nome: "",
//   sexo: "",
//   idade: 100,
//   estadoCivil: "",
// };
// let somaIdade = 0;
// let maiorIdade = base1;
// let menorIdade = base2;
// menorIdade.idade = 100;
// let pessoasMais20 = [];
// let pessoasMenos10 = [];
// let sexoMasculino = [];
// let sexoFeminino = [];
// let sexoOutros = [];
// let casados = [];
// let solteiros = [];
// let viuvos = [];

// for (let i = 0; i < pessoas.length; i++) {
//   somaIdade += pessoas[i].idade;
//   let pessoa = {
//     nome: pessoas[i].nome,
//     sexo: pessoas[i].sexo,
//     idade: pessoas[i].idade,
//     estadoCivil: pessoas[i].estadoCivil,
//   };

//   if (pessoas[i].idade > maiorIdade.idade) {
//     maiorIdade = pessoa;
//   }

//   if (pessoas[i].idade < menorIdade.idade) {
//     menorIdade = pessoa;
//   }

//   if (pessoas[i].idade > 20) {
//     pessoasMais20.push(pessoa);
//   }

//   if (pessoas[i].idade > 10) {
//     pessoasMenos10.push(pessoa);
//   }

//   if (pessoas[i].sexo === "M") {
//     sexoMasculino.push(pessoa);
//   }

//   if (pessoas[i].sexo === "F") {
//     sexoFeminino.push(pessoa);
//   }

//   if (pessoas[i].sexo === "P" || pessoas[i].sexo === "O") {
//     sexoOutros.push(pessoa);
//   }

//   if (pessoas[i].estadoCivil === "C") {
//     casados.push(pessoa);
//   }

//   if (pessoas[i].estadoCivil === "S") {
//     solteiros.push(pessoa);
//   }

//   if (pessoas[i].estadoCivil === "V") {
//     viuvos.push(pessoa);
//   }
// }

// let idadeMedia = somaIdade / pessoas.length;

// console.log(`A média de idade do grupo é: ${idadeMedia}`);
// console.log(`A soma de todas as idades do grupo é: ${somaIdade}`);
// console.log(
//   `De quem foi a maior idade lida: Nome: ${maiorIdade.nome}, Idade: ${maiorIdade.idade}, sexo: ${maiorIdade.sexo}, estado cívil: ${maiorIdade.estadoCivil}`
// );
// console.log(
//   `De quem foi a menor idade lida: Nome: ${menorIdade.nome}, Idade: ${menorIdade.idade}, sexo: ${menorIdade.sexo}, estado cívil: ${menorIdade.estadoCivil}`
// );
// console.log(`Quantas pessoas tem mais de 20 anos:`);
// console.log(pessoasMais20);
// console.log("------------------------------------------------------------");
// console.log(`Quantas pessoas tem menos de 10 anos:`);
// console.log(pessoasMenos10);
// console.log("------------------------------------------------------------");
// console.log(`Quantas pessoas do sexo masculino:`);
// console.log(sexoMasculino);
// console.log("------------------------------------------------------------");
// console.log(`Quantas pessoas do sexo feminino:`);
// console.log(sexoFeminino);
// console.log("------------------------------------------------------------");
// console.log(`Quantas pessoas se absteram de dizer o sexo ou marcaram outros: `);
// console.log(sexoOutros);
// console.log("------------------------------------------------------------");
// console.log(`Quantas pessoas são casadas:`);
// console.log(casados);
// console.log("------------------------------------------------------------");
// console.log(`Quantas pessoas são solteiras:`);
// console.log(solteiros);
// console.log("------------------------------------------------------------");
// console.log(`Quantas pessoas são viúvas:`);
// console.log(viuvos);
// console.log("--------------------Fim--------------------");
