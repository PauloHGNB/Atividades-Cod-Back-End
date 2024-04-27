const prompt = require("prompt-sync")();

// atividade 1
// for (let i = 0; i <= 50; i++) {
//   let teste = i % 2;

//   if (i == 30) {
//     break;
//   } else if (teste == 1) {
//     console.log(i);
//   }
// }

// atividade 2
// for (let i = 0; i <= 50; i++) {
//   let teste = i % 2;

//   if (i == 30) {
//     continue;
//   } else if (teste == 0) {
//     console.log(i);
//   }
// }

// atividade 3
// let numero = parseInt(prompt('Digite um valor: '));

// let nTotal = numero % 2;

// if (nTotal == 0) {
//   console.log(`O número ${numero} é par.`);
// } else {
//   console.log(`O número ${numero} é ímpar.`);
// }

// atividade 4
// let numero = parseInt(prompt('Digite um valor: '));
// let a = numero;
// let mult = 1;

// if (numero == 0) {
//   console.log(`O resultado de ${a}! é 1`);
// } else {
//   for (numero; numero >= 1; numero--) {
//     mult = numero * mult;
//   }
//   console.log(`O resultado de ${a}! é ${mult}`);
// }

// atividade 5
// let result = 'A soma dos números ímpares múltiplos de três entre 1 e 100 é: ';
// let soma = 0;

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 2 !== 0) {
//     soma += i;
//   }
// }

// result += soma;
// console.log(result);

// atividade 6
// let a = parseInt(prompt(`Digite o valor A: `));
// let b = parseInt(prompt(`Digite o valor B: `));
// let c = parseInt(prompt(`Digite o valor C: `));
// let lista = [a, b, c];
// lista.sort((a, b) => a - b);
// console.log('Crescente: ' + lista);
// lista.sort((a, b) => b - a);
// console.log('Decrecente: ' + lista);

// atividade 7
// let a = parseInt(prompt(`Digite o primeiro valor: `));
// let b = parseInt(prompt(`Digite o segundo valor: `));
// let c = 0;
// if (a == b) {
//   c = a + b;
// } else {
//   c = a * b;
// }

// console.log('O resultado é ' + c);

// atividade 8
// let nome = prompt(`Digite o seu nome: `);
// let matricula = parseInt(prompt(`Digite a matrícula: `));
// let disciplina = prompt(`Digite a disciplina: `);
// let nota = parseInt(prompt(`Digite a sua nota: `));

// if (nota >= 60) {
//   console.log('Você foi aprovado');
// } else if (nota >= 50) {
//   console.log('Você está de recuperação');
// } else {
//   console.log('Você foi reprovado');
// }

// atividade 9
// let idadeMedia = 0;
// let maiorDeIdade = 0;
// let menorDeIdade = 0;
// let maiorDe20 = 0;
// let menorDe10 = 0;

// for (let i = 0; i < 10; i++) {
//   let idade = parseInt(prompt('Digite a idade: '));
//   if (idade > 20) {
//     maiorDe20++;
//   }
//   if (idade < 10) {
//     menorDe10++;
//   }
//   if (maiorDeIdade < idade) {
//     maiorDeIdade = idade;
//   }
//   if (menorDeIdade < idade || menorDeIdade != 0) {
//     menorDeIdade = idade;
//   }
//   idadeMedia += idade;
// }
// idadeMedia = idadeMedia / 10;
// console.log(
//   `A idade medida é de: ${idadeMedia}. A maior idade digitada foi: ${maiorDeIdade}.A menor idade digitada foi ${menorDeIdade}`
// );
// console.log(`Teve ${maiorDe20} maior de 20 e ${menorDe10} menor de 10 anos`);

// atividade 10
// let largura = parseInt(prompt('Digite a largura: '));
// let comprimento = parseInt(prompt('Digite o comprimento: '));
// let area = 0;

// area = largura * comprimento;

// console.log(`A area é de ${area}m²`);

// if (area < 100) {
//   console.log(`TERRENO POPULAR.`);
// } else if (area >= 100 && area < 500) {
//   console.log(`TERRENO MASTER.`);
// } else {
//   console.log(`TERRENO VIP.`);
// }

// atividade 11
// let parcela = 0;
// let precoNormal = parseInt(prompt('Digite o preço do produto: '));
// console.log('Condição de pagamento');
// console.log('1- À vista em dinheiro ou cheque, recebe 10% de desconto');
// console.log('2- À vista no cartão de crédito, recebe 15% de desconto');
// console.log('3- Em duas vezes, preço normal de etiqueta sem juros');
// console.log('4- Em duas vezes, preço normal de etiqueta mais juros de 10%');
// let condicaoPagamento = parseInt(prompt('Digite a forma de pagamento: '));
// switch (condicaoPagamento) {
//   case 1:
//     precoNormal = precoNormal * 0.9;
//     console.log(
//       `O valor do produto com desconto é de R$ ${precoNormal.toFixed('2')}.`
//     );
//     break;

//   case 2:
//     precoNormal = precoNormal * 0.85;
//     console.log(
//       `O valor do produto com desconto é de R$ ${precoNormal.toFixed('2')}.`
//     );
//     break;

//   case 3:
//     parcela = precoNormal / 2;
//     console.log(
//       `O valor do produto é de R$ ${precoNormal.toFixed(
//         '2'
//       )} em duas parcelas de R$ ${parcela.toFixed('2')}.`
//     );
//     break;

//   case 4:
//     precoNormal = precoNormal * 1.1;
//     parcela = precoNormal / 2;
//     console.log(
//       `O valor do produto com acrescimo é de R$ ${precoNormal.toFixed(
//         '2'
//       )} em duas parcelas de R$ ${parcela.toFixed('2')}.`
//     );
//     break;

//   default:
//     console.log('Opção Inválida.');
// }

// atividade 12
// let altura = parseFloat(prompt(`Digite a sua altura (em metros): `));
// let sexo = prompt(`Digite o seu sexo (coloque M ou F): `);
// let imcM = 0;
// let imcF = 0;

// imcM = 72.7 * altura - 58;
// imcF = 62.1 * altura - 44.7;

// if (sexo === 'M') {
//   console.log(`O seu peso ideal é: ${imcM.toFixed(2)}.`);
// } else {
//   console.log(`O seu peso ideal é: ${imcF.toFixed(2)}.`);
// }

// atividade 13
// let numero1 = parseInt(prompt('Digite o primeiro número: '));
// let numero2 = parseInt(prompt('Digite o segundo número: '));
// let result = 0;
// console.log('Operação');
// console.log('1- Soma');
// console.log('2- Subtração');
// console.log('3- Divisão');
// console.log('4- Multiplicação');
// let condicaoPagamento = parseInt(prompt('Digite a condição desejada: '));
// switch (condicaoPagamento) {
//   case 1:
//     result = numero1 + numero2;
//     console.log(`O valor da soma entre ${numero1} e ${numero2} é: ${result}.`);
//     break;

//   case 2:
//     result = numero1 - numero2;
//     console.log(
//       `O valor da subtração entre ${numero1} e ${numero2} é: ${result}.`
//     );
//     break;

//   case 3:
//     result = numero1 / numero2;
//     console.log(
//       `O valor da divisão entre ${numero1} e ${numero2} é: ${result}.`
//     );
//     break;

//   case 4:
//     result = numero1 * numero2;
//     console.log(
//       `O valor da multiplicação entre ${numero1} e ${numero2} é: ${result}.`
//     );
//     break;

//   default:
//     console.log('Opção Inválida.');
// }

// atividade 14
// let peso = parseInt(prompt('Digite seu peso (em kilogramas): '));
// let altura = parseInt(prompt('Digite sua altura (em metros): '));
// let result = peso / (altura * altura);

// if (result < 18.5) {
//   console.log('Abaixo do peso.');
// } else if (result >= 18.5 && result < 24.9) {
//   console.log('Peso ideal.');
// } else if (result >= 25 && result < 29.9) {
//   console.log('Excesso de peso.');
// } else {
//   console.log('Obesidade.');
// }

// atividade 15
// function calcularNotas(valor) {
//   const notas = [100, 50, 20, 10, 5, 2, 1];
//   const distribuicao = {};

//   for (let nota of notas) {
//     distribuicao[nota] = Math.floor(valor / nota);
//     valor %= nota;
//   }

//   return distribuicao;
// }

// function realizarSaque() {
//   let valor = parseFloat(
//     prompt('Digite o valor do saque (sem casas decimais): ')
//   );

//   if (isNaN(valor) || !Number.isInteger(valor)) {
//     console.log('Valor inválido. Por favor, digite um valor inteiro.');
//     return;
//   }

//   const distribuicaoNotas = calcularNotas(valor);

//   console.log('Distribuição das notas:');
//   for (let nota in distribuicaoNotas) {
//     if (distribuicaoNotas[nota] > 0) {
//       console.log(`${distribuicaoNotas[nota]} nota(s) de R$ ${nota},00`);
//     }
//   }
// }

// realizarSaque();
