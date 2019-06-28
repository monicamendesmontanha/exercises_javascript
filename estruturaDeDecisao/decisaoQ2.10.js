console.log("-----------------------------------------------------------------------------------------");
console.log("----------[Question 2.10]----------------------------------------------------------------");
// 2.10 Faça um Programa que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-Vespertino ou N- Noturno. Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.

const turnoDeEstudo = (resposta) => {

  turno = resposta.toUpperCase();

  if (turno == "M") {
    return "Bom dia!";
  } else if ( turno == "V") {
    return "Bom tarde!";
  } else if (turno == "N") {
    return "Bom noite!";
  } else {
    return "Valor Inválido!"
  }

}

console.log(turnoDeEstudo('m'));
console.log(turnoDeEstudo('V'));
console.log(turnoDeEstudo('n'));
console.log(turnoDeEstudo('a'));