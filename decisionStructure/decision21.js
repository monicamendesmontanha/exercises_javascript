console.log(
  "-----------------------------------------------------------------------------------------"
);
console.log(
  "----------[Question 2.21]----------------------------------------------------------------"
);
// 2.21 Make a Program for an ATM. The program should ask the user for the amount of the draw and then inform how many notes of each value will be provided.
// The available notes will be 1, 5, 10, 50 and 100 reais.
// The minimum amount is 10 reais and the maximum is 600 reais. The program should not worry about the amount of notes on the machine.
// * Example 1: To extract the amount of 256 reais, the program provides two 100 notes, a 50 note, a 5 note, and a 1 note;
// * Example 2: To get the amount of 399 reais, the program provides three 100 notes, a 50 note, four 10 notes, a 5 note and four 1 notes.

const available_notes = [1, 5, 10, 50, 100]

const atm = (amount) => {

  const minimum = 10
  const maximum = 600

  if (amount < minimum || amount > maximum) {
    return `This amount is not allowed to withdraw`
  }

  const notes = []

  while (notes.reduce < amount) {

    const index = available_notes.length - 1
    if (amount = available_notes) {
      notes.push(available_notes[index])
    }

    return index = index - 1
  }

  return `To get the amount of $ ${amount}, will be provide: ${notes}.`

}

console.log(atm(5));
console.log(atm(605));
console.log(atm(10));
console.log(atm(500));