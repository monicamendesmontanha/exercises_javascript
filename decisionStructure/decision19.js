console.log(
  "-----------------------------------------------------------------------------------------"
);
console.log(
  "----------[Question 2.19]----------------------------------------------------------------"
);
// 2.19 Make a Program that reads an integer less than 1000 and prints the number of hundreds, dozens, and units of it.
// Looking at the plural terms the placement of the "s", the comma among others. Example:
// * 326 = 3 hundreds, 2 dozens and 6 units
// * 12 = 1 dozen and 2 units
// Test with: 326, 300, 100, 320, 310,305, 301, 101, 311, 111, 25, 20, 10, 21, 11, 1, 7, and 16


const printTheNumber = (number) => {

  const splitNumber = number.toString().split('');
  console.log(splitNumber)

  const sizeNumber = splitNumber.length
  // console.log(sizeNumber)

  if (sizeNumber == 1) {

    if (number == 1 || number == 0) {
      return `${number} unit`
    } else {
      return `${number} units`
    }
  }

  if (sizeNumber == 2) {
    if (splitNumber[0] <= 1) {
      return `${splitNumber[0]} dozen`
    } else {
      return `${splitNumber[0]} dozens`
    }
  }

  if (sizeNumber == 3) {
    if (splitNumber[0] <= 1) {
      return `${splitNumber[0]} hundred`
    } else {
      return `${splitNumber[0]} hundreds`
    }
  }
}




console.log(printTheNumber(1));
console.log(printTheNumber(7));

// console.log(printTheNumber(11));
console.log(printTheNumber(10));
// console.log(printTheNumber(16));
console.log(printTheNumber(20));
// console.log(printTheNumber(21));
// console.log(printTheNumber(25));

console.log(printTheNumber(100));
// console.log(printTheNumber(111));
// console.log(printTheNumber(101));
console.log(printTheNumber(300));
// console.log(printTheNumber(301));
// console.log(printTheNumber(305));
// console.log(printTheNumber(310));
// console.log(printTheNumber(311));
// console.log(printTheNumber(320));
// console.log(printTheNumber(326));