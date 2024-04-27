const prompt = require('prompt-sync')();
// atividade 1
/* let msg = prompt('Digite uma mensagem: ');
console.log(msg); */

// atividade 2
/* let nome = prompt('Digite seu nome: ');
console.log(`Seja bem-vindo(a) ${nome}.`); */

// atividade 3
// let person = {
//   nome: ',
//   sobrenome: ',
//   cpf: null,
//   sexo: ',
//   dataDeNascimento: ',
//   endereco: ',
//   telefone: null,
// };

// person.nome = prompt('Digite seu nome: ');
// person.sobrenome = prompt('Digite seu sobrenome: ');
// person.cpf = prompt('Digite seu cpf: ');
// person.sexo = prompt('Digite seu sexo (M ou F): ');
// person.dataDeNascimento = prompt(
//   'Digite sua data de nascimento (dd-mm-yyyy): '
// );
// person.endereco = prompt('Digite seu endereço: ');
// person.telefone = prompt('Digite seu telefone: ');
// console.log(person);

// atividade 4
// let disciplina = prompt('Digite nome da disciplina: ');
// let nome = prompt('Digite seu nome: ');
// let nota1 = parseInt(prompt('Digite a primeira nota: '));
// let nota2 = parseInt(prompt('Digite a segunda nota: '));
// let nota3 = parseInt(prompt('Digite a terceira nota: '));
// let nota4 = parseInt(prompt('Digite a quarta nota '));
// console.log(
//   `A sua média, ${nome}, na disciplina de ${disciplina} é de: ${
//     (nota1 + nota2 + nota3 + nota4) / 4
//   }`
// );

// atividade 5
// let numero = parseInt(prompt('Digite um número: '));
// console.log(`Tabuada do ${numero}`);
// for (let i = 1; i < 11; i++) {
//   console.log(`${numero} x ${i} = ${i * numero}`);
// }

// atividade 6
// let nome = prompt('Digite um nome: ');
// let salario = parseInt(prompt('Digite seu salário: '));
// console.log(`${nome} seu salário é ${salario.toFixed('3')}.`)

// atividade 7
// let resultado = 0;
// for(let i = 1; i <6; i++){
//     let numero = parseInt(prompt(`Digite o ${i}° número: `));
//     resultado += numero;
// };
// console.log(`A soma dos números é: ${resultado}`);

// atividade 8
// let dia = parseInt(prompt('Digite o dia de seu nascimento: '));
// let mes = parseInt(prompt('Digite o mes de seu nascimento: '));
// let ano = parseInt(prompt('Digite o ano de seu nascimento: '));
// ano = 2024 - ano;
// let resultado = ano * 365;
// resultado += mes * 30;
// resultado += dia;
// console.log(`Você viveu ${resultado} dias`);

// atividade 9
// let dia = parseInt(prompt('Digite quantos dias de vida você tem: '));
// let anos = dia / 365;
// let meses = dia % 365;
// let ultimoDia = meses;
// meses = meses / 30;
// ultimoDia = ultimoDia % 30;
// console.log(
//   `Você viveu ${anos.toFixed('0')} anos, ${meses.toFixed(
//     '0'
//   )} meses e ${ultimoDia.toFixed('0')} dias`
// );

// atividade 10
// let hora = parseInt(prompt('Digite as horas: '));
// let minuto = parseInt(prompt('Digite os minutos: '));
// let segundo = parseInt(prompt('Digite os segundos: '));
// let resultado = segundo;
// resultado = resultado + minuto * 60;
// resultado = resultado + hora * 3600;
// console.log(`A atividade vai levar ${resultado} segundos.`);

// atividade 11
// let segundos = parseInt(prompt('Digite quantos segundos: '));
// let horas = segundos / 3600;
// let minutos = segundos % 3600;
// let segundosFinal = minutos;
// segundosFinal = minutos % 60;
// minutos = minutos / 60;
// console.log(
//   `A atividade vai levar ${horas.toFixed('0')} horas, ${minutos.toFixed(
//     '0'
//   )} minutos e ${segundosFinal.toFixed('0')} segundos`
// );

// atividade 12
// let preco = parseInt(prompt('Digite o preço do produto: '));
// let desconto = (preco * 15) / 100;
// let resultado = preco - desconto;
// console.log(`O preço do produto com desconto é de R$ ${resultado.toFixed('3')}.`);

// atividade 13
// let salario = parseInt(prompt('Digite o salário do funcionário: '));
// let aumento = (salario * 27.5) / 100;
// let resultado = salario + aumento;
// console.log(
//   `O salário do funcionário com o aumento é de R$ ${resultado.toFixed('3')}.`
// );

// atividade 14
// let matricula = parseInt(prompt('Digite o preço da matrícula: '));
// let desconto = matricula*20/100
// let resultado = matricula - desconto;
// console.log(`O valor da matrícula com desconto é de R$ ${resultado.toFixed('3')}`);

// atividade 15
// let valor = parseInt(prompt('Digite o valor do boleto: '));
// let dias = parseInt(prompt('Digite os dias de atraso: '));
// dias = dias * 1.25;
// let acrescimo = (valor * dias) / 100;
// let resultado = valor + acrescimo;
// console.log(`O valor do boleto é de R$ ${resultado.toFixed('3')}`);
