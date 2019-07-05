console.log(
  "-----------------------------------------------------------------------------------------"
);
console.log(
  "----------[Question 2.23]----------------------------------------------------------------"
);
// 2.23 Make a Program that asks for a number and tells whether the number is integer or decimal. Tip: Use a rounding function.


 const integerOrDecimal = (number) => {

  if (number % 1 != 0) {
    return `Decimal number: ${number}`;
  } else {
    return `integer number: ${number}`;
  }

 }

 console.log(integerOrDecimal(0.5));
 console.log(integerOrDecimal(1.5));
 console.log(integerOrDecimal(-1));
 console.log(integerOrDecimal(-4.5));
 console.log(integerOrDecimal(1));