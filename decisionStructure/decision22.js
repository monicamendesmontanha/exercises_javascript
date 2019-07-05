// console.log(
//   "-----------------------------------------------------------------------------------------"
// );
// console.log(
//   "----------[Question 2.22]----------------------------------------------------------------"
// );
// 2.22 Make a Program that asks for an integer and determines whether it is even or odd. Tip: Use the module operator (remainder of the division).

const isEven = (number) => {

  if (number % 2 == 0) {
    return `${number} is even`;
  } else {
    return `${number} is odd`;
  }
}

console.log(isEven(2));
console.log(isEven(3));
console.log(isEven(444));
console.log(isEven(555));