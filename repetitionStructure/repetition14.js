console.log(
  "----------[Question 14]----------------------------------------------------------------"
);
// 14. Make a program that asks for 10 integers, calculate and show the number of even
// numbers and the number of odd numbers.

const evenOrOdd = (numbers) => {

  const even = numbers.filter(number => number % 2 === 0);
  const odd = numbers.filter(number => number % 2 != 0);

  return `Even: ${even} | Odd: ${odd}`
}

console.log(evenOrOdd([1,2,3,4,5]));