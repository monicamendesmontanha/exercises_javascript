console.log("-----------------------------------------------------------------------------------------");
console.log("----------[Question 2.10]----------------------------------------------------------------");
// 2.10 Make a Program that asks what shift you study. Ask to type M-morning or V-Evening or N-Night. Print the message "Good Morning!", "Good Afternoon!" or good night!" or "Invalid Value!", as the case may be.

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