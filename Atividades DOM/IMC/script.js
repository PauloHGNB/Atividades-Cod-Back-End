// 1. Utilizando DOM: Tendo como dados de entrada o peso (em quilogramas)
//    e a altura (em metros) de uma pessoa,
//    crie um programa que calcule o Índice de Massa Corporal (IMC) dessa pessoa.
// Calcule o IMC usando a fórmula: IMC = peso / (altura * altura).
// Classifique o IMC da seguinte forma:
// - IMC < 18,5 Kg/m²: Abaixo do Peso
// - IMC >= 18,5 Kg/m² e < 24,9 Kg/m²: Peso Normal
// - IMC >= 25 Kg/m² e < 29,9 Kg/m²: Sobrepeso
// - IMC >= 30 Kg/m² e < 34.9 Kg/m²: Obesidade Grau I
// - IMC >= 35 Kg/m² e < 39.9 Kg/m²: Obesidade Grau II
// - IMC >= 39.9 Kg/m²: Obesidade Grau III

function calcularIMC() {
  const altura = parseFloat(document.getElementById("altura").value);
  const peso = parseFloat(document.getElementById("peso").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(altura) || isNaN(peso) || altura == 0 || peso == 0) {
    resultado.textContent =
      "Por favor, digite valores válidos para altura e peso.";
    return;
  }

  const imc = peso / (altura * altura);

  let classificacao;

  if (imc < 18.5) {
    classificacao = "Abaixo do Peso";
  } else if (imc >= 18.5 && imc < 24.9) {
    classificacao = "Peso Normal";
  } else if (imc >= 25 && imc < 29.9) {
    classificacao = "Sobrepeso";
  } else if (imc >= 30 && imc < 34.9) {
    classificacao = "Obesidade Grau I";
  } else if (imc >= 35 && imc < 39.9) {
    classificacao = "Obesidade Grau II";
  } else if (imd >= 39.9) {
    classificacao = "Obesidade Grau III";
  }

  resultado.textContent = `Seu IMC é ${imc.toFixed(
    2
  )}. Classificação: ${classificacao}`;
}
