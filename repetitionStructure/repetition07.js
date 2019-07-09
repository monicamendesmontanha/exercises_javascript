console.log(
  "----------[Question 7]----------------------------------------------------------------"
);
// 7. Make a program that reads 5 numbers and enter the largest number.


// 1. Using Math.max()
// The Math.max() function returns the largest of zero or more numbers.
const largestNumber = (num1, num2, num3, num4, num5) => {

  const largest =  Math.max(num1, num2, num3, num4, num5)
  return `The largest number is ${largest}.`
}

console.log(largestNumber(1, 2, 3, 4, 5));
console.log(largestNumber(5, 2, 10, 20, 1));
console.log(largestNumber(50, 0, 1, 4, 3));


console.log("*****************************")
// 2. Using Math.max() - ARRAY
// Getting the maximum element of an array - Using Math.max()
const largestNumberInAnArray = (numbers) => {

  const largest = Math.max(...numbers)
  return `The largest number is ${largest}.`
}

console.log(largestNumberInAnArray([1, 2, 3, 4, 5]));

// 3. With a FOR loop


// 4. Using the reduce() method
// Array.reduce() can be used to find the maximum element in a numeric array, by comparing each value.
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.