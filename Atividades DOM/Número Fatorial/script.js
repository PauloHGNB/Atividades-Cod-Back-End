// 4.

// Utilizando DOM: Crie um programa que leia um valor inicial A e exiba a sequência de valores do cálculo de A! e o seu resultado.
//   Ex: 5! = 5 X 4 X 3 X 2 X 1 = 120

function calcularFatorial() {
  const valorInicial = parseInt(document.getElementById("numero").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(valorInicial) || valorInicial < 0) {
    resultado.textContent = "Digite um número válido.";
    return;
  }

  let fatorial = 1;
  let sequencia = "";

  for (let i = valorInicial; i > 0; i--) {
    if (i == 1) {
      sequencia += ` 1 = `;
    } else {
      fatorial *= i;
      sequencia += ` ${i} x`;
    }
  }

  sequencia += fatorial;

  resultado.textContent = `Resultado: ${valorInicial}! = ${sequencia}`;
}
