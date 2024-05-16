document
  .getElementById("calc1Form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operaçao = document.getElementById("operaçao").value;

    let result;

    switch (operaçao) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          alert("ERRO: DIVISÃO NÃO PODE SER POR 0");
          return;
        }
        break;
      default:
        result = "OPERAÇÃO INVÁLIDA";
    }

    document.getElementById("calc1Result").textContent = `Resultado: ${result}`;
  });

document
  .getElementById("calc2Form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);

    if (altura <= 0 || peso <= 0) {
      alert("ERRO: ALTURA E PESO DEVEM SER POSITIVOS");
      return;
    }

    const imc = peso / (altura * altura);

    if (imc <= 0) {
      alert("ERRO: IMC INVÁLIDO");
      return;
    }

    let imcResult;
    if (imc < 18.5) {
      imcResult = "Baixo Peso";
    } else if (imc >= 18.5 && imc < 24.9) {
      imcResult = "Peso Normal";
    } else if (imc >= 25 && imc < 29.9) {
      imcResult = "Excesso de Peso";
    } else if (imc >= 30 && imc < 34.9) {
      imcResult = "Obesidade Classe I";
    } else if (imc >= 35 && imc < 39.9) {
      imcResult = "Obesidade Classe II";
    } else {
      imcResult = "Obesidade Mórbida";
    }

    document.getElementById(
      "calc2Result"
    ).textContent = `RESULTADO: IMC = ${imc.toFixed(2)} (${imcResult})`;
  });

document
  .getElementById("calc3Form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const gasolinaPreco = parseFloat(
      document.getElementById("gasolinaPreco").value
    );
    const alcoolPreco = parseFloat(
      document.getElementById("alcoolPreco").value
    );
    const gasolinaLitro = parseFloat(
      document.getElementById("gasolinaLitro").value
    );
    const alcoolLitro = parseFloat(
      document.getElementById("alcoolLitro").value
    );

    if (
      gasolinaPreco <= 0 ||
      alcoolPreco <= 0 ||
      gasolinaLitro <= 0 ||
      alcoolLitro <= 0
    ) {
      alert("ERRO: INSIRA VALORES POSITIVOS");
      return;
    }

    const gasolinaTotal = gasolinaPreco * gasolinaLitro;
    const alcoolTotal = alcoolPreco * alcoolLitro;

    let resultMsg;
    if (gasolinaTotal < alcoolTotal) {
      resultMsg = `Gasolina é mais econômica.`;
    } else if (alcoolTotal < gasolinaTotal) {
      resultMsg = `Álcool é mais econômico.`;
    } else {
      resultMsg = `Ambos têm o mesmo custo.`;
    }

    document.getElementById("calc3Result").textContent = `RESULTADO:
    Gasolina: R$ ${gasolinaTotal.toFixed(2)}
    Álcool: R$ ${alcoolTotal.toFixed(2)}.
    ${resultMsg}`;
  });

document.getElementById("calc1").addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("calc1Div").classList.add("active");
  document.getElementById("calc2Div").classList.remove("active");
  document.getElementById("calc3Div").classList.remove("active");
});

document.getElementById("calc2").addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("calc1Div").classList.remove("active");
  document.getElementById("calc2Div").classList.add("active");
  document.getElementById("calc3Div").classList.remove("active");
});

document.getElementById("calc3").addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("calc1Div").classList.remove("active");
  document.getElementById("calc2Div").classList.remove("active");
  document.getElementById("calc3Div").classList.add("active");
});
