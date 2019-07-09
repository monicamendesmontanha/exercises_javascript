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
console.log("*****************************")




// 3. With a FOR loop
const largestOfArray = (numbers) => {

  let largest = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i]
    }
  }

  return `The largest number is ${largest}.`
}

console.log(largestOfArray([1, 2, 3, 4, 5]));
console.log("*****************************")




// 4. With Sort an array and get the last element
const sortToFindthelargestElement = (array) => {
  const sortArray = array.sort()
  const largest = sortArray[sortArray.length - 1]

  return `The largest number is ${largest}.`

}

console.log(sortToFindthelargestElement([5, 2, 0, 6, 1, 3]));
console.log("*****************************")




// 5. With map() and reduce()
// The map() method creates a new array with the results of calling a provided function on every element in this array. Using map will call a provided callback function once for each element in an array, in order, and constructs a new array from the results.
// The reduce() method applies a function against an accumulator and each value of the array to reduce it to a single value.