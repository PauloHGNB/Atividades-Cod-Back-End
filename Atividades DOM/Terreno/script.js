// 5.

// Utilizando DOM: Crie um programa que leia a largura e o comprimento de um terreno
// retangular, calculando e mostrando a sua área em m² (largura x comprimento).
// O programa também deve mostrar a classificação desse terreno, de acordo com a lista abaixo:
// - Abaixo de 100m² = TERRENO POPULAR
// - Entre 100m² e 500m² = TERRENO MASTER
// - Acima de 500m² = TERRENO VIP

function calcularArea() {
  const largura = parseFloat(document.getElementById("largura").value);
  const comprimento = parseFloat(document.getElementById("comprimento").value);
  const resultado = document.getElementById("resultado");

  if (
    isNaN(largura) ||
    isNaN(comprimento) ||
    largura <= 0 ||
    comprimento <= 0
  ) {
    resultado.textContent = "Digite valores válidos.";
    return;
  }

  const area = largura * comprimento;
  let classificacao;

  if (area < 100) {
    classificacao = "TERRENO POPULAR";
  } else if (area <= 500) {
    classificacao = "TERRENO MASTER";
  } else if (area > 500) {
    classificacao = "TERRENO VIP";
  }

  resultado.textContent = `A área do terreno é de ${area.toFixed(
    2
  )}m². ${classificacao}`;
}
