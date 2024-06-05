let fs = require("fs");
let prompt = require("prompt-sync")();

let textoEscrito = prompt("Digite o que deseja escrever no arquivo: ");
fs.writeFile("arquivo.txt", textoEscrito, function (erro) {
  if (erro) {
    throw new erro();
  } else {
    console.log("Escrito com sucesso!");
  }
});

fs.readFile("arquivo.txt", "utf8", function (erro, conteudoArquivo) {
  if (erro) throw new erro();
  console.log(conteudoArquivo);
});
