// 1. Utilizando função: Crie um programa que leia um valor inicial A e exiba a sequência de valores do cálculo de A! e o seu resultado.
// 	Ex: 5! = 5 X 4 X 3 X 2 X 1 = 120*/

// function entradaDados() {
//   let valor = parseFloat(prompt("Digite um valor para o calculo: "));

//   while (true) {
//     valor = parseFloat(prompt("Digite um valor para o calculo: "));
//     if (!isNaN(valor)) {
//       break;
//     } else {
//       console.log("Por favor, digite um valor válido.");
//     }
//   }
//   return valor;
// }

// function fazerCalculo(valorA) {
//   let resultString = `O resultado do calculo de ${valorA} é:`;
//   let resultValor = 1;

//   for (valorA; valorA > 0; valorA--) {
//     if (valorA == 1) {
//       resultString += ` 1 = ${resultValor}`;
//     } else {
//       resultValor *= valorA;
//       resultString += ` ${valorA} x`;
//     }
//   }
//   console.log(resultString);
// }

// fazerCalculo(entradaDados());

// --------------------------------------------------------------------------------------------------------------------------------------------
// 2. Utilizando função: Crie um programa que leia a largura e o comprimento de um terreno
// retangular, calculando e mostrando a sua área em m² (largura x comprimento).
// O programa também deve mostrar a classificação desse terreno, de acordo com a lista abaixo:
// - Abaixo de 100m² = TERRENO POPULAR
// - Entre 100m² e 500m² = TERRENO MASTER
// - Acima de 500m² = TERRENO VIP

// function entradaDados() {
//   let terreno = {};

//   while (true) {
//     terreno.largura = parseFloat(prompt("Digite a largura do terreno: "));
//     if (!isNaN(terreno.largura)) {
//       break;
//     } else {
//       console.log("Por favor, digite uma medida válida.");
//     }
//   }

//   while (true) {
//     terreno.comprimento = parseFloat(
//       prompt("Digite a largura do comprimento: ")
//     );
//     if (!isNaN(terreno.comprimento)) {
//       break;
//     } else {
//       console.log("Por favor, digite uma medida válida.");
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
// 3. Utilizando função: Tendo como dados de entrada o peso (em quilogramas)
//    e a altura (em metros) de uma pessoa,
//    crie um programa que calcule o Índice de Massa Corporal (IMC) dessa pessoa.
// Calcule o IMC usando a fórmula: IMC = peso / (altura * altura).
// Classifique o IMC da seguinte forma:
// - IMC < 18,5 Kg/m²: Abaixo do Peso
// - IMC >= 18,5 Kg/m² e < 24,9 Kg/m²: Peso Ideal
// - IMC >= 25 Kg/m² e < 29,9 Kg/m²: Excesso de Peso
// - IMC >= 30 Kg/m²: Obesidade

// function entradaDados() {
//   let pessoa = {};

//   while (true) {
//     pessoa.altura = parseFloat(prompt("Digite sua altura(m): "));
//     if (!isNaN(pessoa.altura)) {
//       break;
//     } else {
//       console.log("Por favor, digite uma medida válida.");
//     }
//   }

//   while (true) {
//     pessoa.peso = parseFloat(prompt("Digite seu peso(kg): "));
//     if (!isNaN(pessoa.peso)) {
//       break;
//     } else {
//       console.log("Por favor, digite um peso válido.");
//     }
//   }
//   pessoa.imc = pessoa.peso * (pessoa.altura * 2);
//   return pessoa;
// }

// function classificacaoPessoa(pessoa) {
//   if (pessoa.imc < 18.5) {
//     console.log(`Abaixo do peso. Vai comer um hamburguer.`);
//   } else if (pessoa.imc >= 18.5 && pessoa.imc <= 24.9) {
//     console.log(`Peso ideal. Não gosto de gente assim.`);
//   } else if (pessoa.imc >= 25 && pessoa.imc < 500) {
//     console.log(`Excesso de Peso. Comer um alface.`);
//   } else {
//     console.log(`Obesidade. Agora lascou`);
//   }
// }

// classificacaoPessoa(entradaDados());
