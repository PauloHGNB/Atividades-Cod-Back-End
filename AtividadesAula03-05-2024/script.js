// 1. Utilizando tratamento de erros: Crie um programa que receba dois números como parâmetros e retorna a divisão do primeiro pelo segundo.
// Use try-catch para lidar com o caso em que o segundo número é zero e imprima uma mensagem de erro apropriada.

// let n1 = 0;
// let n2 = 0;

// while (true) {
//   nun1 = parseFloat(prompt("Digite o primeiro número: "));
//   if (!isNaN(n1)) {
//     break;
//   } else {
//     console.log("Por favor, digite um número.");
//   }
// }

// while (true) {
//   nun2 = parseFloat(prompt("Digite o segundo número: "));
//   if (!isNaN(n2)) {
//     break;
//   } else {
//     console.log("Por favor, digite um número.");
//   }
// }

// try {
//   if (nun2 === 0) {
//     throw new Error("Valor da divisão não pode ser 0.");
//   } else {
//     console.log(
//       `O resultado da divisão entre ${n1} e ${n2} é : ${(
//         n1 / n2
//       ).toFixed("2")}`
//     );
//   }
// } catch (e) {
//   console.error(e.message);
// }

// let n1 = 10;
// let n2 = 0;

// try {
//   if (n2 === 0) {
//     throw new console.erro("Valor da divisão não pode ser 0.");
//   } else {
//     console.log(
//       `O resultado da divisão entre ${n1} e ${n2} é : ${(
//         n1 / n2
//       ).toFixed("2")}`
//     );
//   }
// } catch (e) {
//   console.error(console.log(e.message));
// }

// --------------------------------------------------------------------------------------------------------------------------------------------
// 2. Utilizando tratamento de erros: Crie um programa que receba um array de números e um índice como argumentos e retorna o elemento do array no índice especificado.
// Utilize try-catch para lidar com o caso em que o índice fornecido está fora dos limites do array e imprima uma mensagem de erro apropriada.

// let array = [1, 5, 6, 9, 10, 3, 4];
// let indice = 3;

// try {
//   if (array[indice] === undefined) {
//     throw new Error("Indice não existe no array.");
//   } else {
//     console.log("o valor no indice é : " + array[indice]);
//   }
// } catch (e) {
//   console.error(e.message);
// }

// --------------------------------------------------------------------------------------------------------------------------------------------
// 3. Utilizando tratamento de erros: Crie um programa que leia os dados de uma pessoa:
// nome, sobrenome, CPF (11 caracteres), sexo (M, F, O), data de nascimento (Formato Data), endereço e telefone.
// Valide os dados recebidos e exiba no console.
// Utilize try-catch para lidar com o caso em que os dados não sejam informados no padrão correto
// e imprima uma mensagem de erro (gere uma exceção)  apropriada.

// let pessoa = {};
// pessoa.nome = prompt("Digite o seu nome: ");
// pessoa.sobrenome = prompt("Digite o seu sobrenome: ");
// while (true) {
//   try {
//     pessoa.cpf = parseInt(prompt("Digite o seu cpf: "));
//     if (!isNaN(pessoa.cpf)) {
//       break;
//     } else {
//       throw new Error("Por favor, digite somente números.");
//     }
//   } catch (error) {
//     console.log("Por favor, digite somente números.");
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
//     let partesData = dataNascimento.split("/");

//     if (partesData.length === 3) {
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
//     pessoa.telefone = parseInt(prompt("Digite seu telefone: "));
//     if (!isNaN(pessoa.telefone)) {
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
// 4. Utilizando tratamento de erros: Crie um programa que leia a largura e o comprimento de um terreno retangular,
// calculando e mostrando a sua área em m² (largura x comprimento).
// O programa também deve mostrar a classificação desse terreno, de acordo com a lista abaixo:
// - Abaixo de 100m² = TERRENO POPULAR
// - Entre 100m² e 500m² = TERRENO MASTER
// - Acima de 500m² = TERRENO VIP
// Utilize try-catch para lidar com o caso em que os dados (largura e comprimento) não sejam informados no padrão correto
// e imprima uma mensagem de erro (gere uma exceção)  apropriada.

// function entradaDados() {
//   let terreno = {};

//   while (true) {
//     try {
//       terreno.largura = parseInt(prompt("Digite a largura: "));
//       if (!isNaN(terreno.largura)) {
//         break;
//       } else {
//         throw new Error("Digite uma largura válida.");
//       }
//     } catch (error) {
//       console.log("Digite uma largura válida.");
//     }
//   }

//   while (true) {
//     try {
//       terreno.comprimento = parseInt(prompt("Digite o comprimento: "));
//       if (!isNaN(terreno.comprimento)) {
//         break;
//       } else {
//         throw new Error("Digite uma comprimento válido.");
//       }
//     } catch (error) {
//       console.log("Digite uma comprimento válido.");
//     }
//   }

//   terreno.area = terreno.comprimento * terreno.largura;
//   return terreno;
// }

// function classificacaoTerreno(terreno) {
//   if (terreno.area < 100) {
//     console.log(
//       `A área do terreno é de ${terreno.area.toFixed(
//         0
//       )}. O seu terreno é POPULAR.`
//     );
//   } else if (terreno.area >= 100 && terreno.area <= 500) {
//     console.log(
//       `A área do terreno é de ${terreno.area.toFixed(
//         0
//       )}. O seu terreno é TERRENO MASTER.`
//     );
//   } else {
//     console.log(
//       `A área do terreno é de ${terreno.area.toFixed(
//         0
//       )}. O seu terreno é TERRENO VIP.`
//     );
//   }
// }

// classificacaoTerreno(entradaDados());

// --------------------------------------------------------------------------------------------------------------------------------------------
// 5. Utilizando função: Tendo como dados de entrada o peso (em quilogramas) e a altura (em metros) de uma pessoa, crie um programa que calcule o Índice de Massa Corporal (IMC) dessa pessoa. Calcule o IMC usando a fórmula: IMC = peso / (altura * altura). Classifique o IMC da seguinte forma:
// - IMC < 18,5 Kg/m²: Abaixo do Peso
// - IMC >= 18,5 Kg/m² e < 24,9 Kg/m²: Peso Ideal
// - IMC >= 25 Kg/m² e < 29,9 Kg/m²: Excesso de Peso
// - IMC >= 30 Kg/m²: Obesidade
// Utilize try-catch para lidar com o caso em que os dados (peso e altura) não sejam informados no padrão correto
// e imprima uma mensagem de erro (gere uma exceção)  apropriada.

// function entradaDados() {
//   let pessoa = {};

//   while (true) {
//     try {
//       pessoa.altura = parseFloat(prompt("Digite sua altura(m): "));
//       if (!isNaN(pessoa.altura)) {
//         break;
//       } else {
//         throw new Error("Por favor, digite uma altura válida.");
//       }
//     } catch (error) {
//       console.log("Por favor, digite uma altura válida.");
//     }
//   }

//   while (true) {
//     try {
//       pessoa.peso = parseFloat(prompt("Digite seu peso(kg): "));
//       if (!isNaN(pessoa.peso)) {
//         break;
//       } else {
//         throw new Error("Por favor, digite um peso válido.");
//       }
//     } catch (error) {
//       console.log("Por favor, digite um peso válido.");
//     }
//   }

//   pessoa.imc = pessoa.peso * (pessoa.altura * 2);
//   return pessoa;
// }

// function classificacaoPessoa(pessoa) {
//   if (pessoa.imc < 18.5) {
//     console.log(`Abaixo do peso`);
//   } else if (pessoa.imc >= 18.5 && pessoa.imc <= 24.9) {
//     console.log(`Peso ideal`);
//   } else if (pessoa.imc >= 25 && pessoa.imc < 500) {
//     console.log(`Excesso de Peso`);
//   } else {
//     console.log(`Obesidade`);
//   }
// }

// classificacaoPessoa(entradaDados());
