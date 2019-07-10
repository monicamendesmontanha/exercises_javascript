console.log(
  "----------[Question 15]----------------------------------------------------------------"
);
// 15. The Fibonacci series is formed by the sequence 1,1,2,3,5,8,13,21,34,55, ... Make a program capable of generating the series up to the nth term.

// 16. The Fibonacci series is formed by the sequence 0,1,1,2,3,5,8,13,21,34,55, ... Make a program that generates the series until the value is greater than 500 .


// 01. SOLUTION - While loop - It has a O(n) time complexity.
const fibonacci = (number) => {
  let currentNumber = 1
  let oldNumber = 0
  let tempNumber

  while (number >= 0){
    tempNumber = currentNumber;
    currentNumber = currentNumber + oldNumber;
    console.log(`Sequence: ${currentNumber}`)

    if (currentNumber >= 500) {
      return `The value is greater than 500: ${currentNumber}`
    }

    oldNumber = tempNumber;
    number = number - 1;
  }

  return `The last value is ${currentNumber}`
}
console.log("*01. SOLUTION - While loop *")
console.log(fibonacci(10))
console.log("*************")
console.log(fibonacci(15))
console.log("*************")




////////////////////////////////
// 02. SOLUTION - Recursion - It has a (2^N) time complexity, which means that our current implementation is exponential.
// const fibonacciRecursion = (num) => {
//   if (num <= 1) return 1;

//   let currentNumber = fibonacciRecursion(num - 1) + fibonacciRecursion(num - 2);
//   return currentNumber
// }

// console.log("*02. SOLUTION - Recursion *")
// console.log(fibonacciRecursion(10))
// console.log("*************")
// console.log(fibonacciRecursion(15))
// console.log("*************")


////////////////////////////////
// 03. SOLUTION - Memoization
// This change will increase the space complexity of our new algorithm to O(n) but will dramatically decrease the time complexity to 2N which will resolve to linear time since 2 is a constant.
// const fibonacci = (num, memo) => {
//   memo = memo || {};

//   if (memo[num]) return memo[num];
//   if (num <= 1) return 1;

//   return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
// }

// console.log(fibonacci(10))




//*************
// 01 Solution
// While loop

// Time complexity: O(N)
// Space complexity: Constant
// Function calls: 51
// Time needed: 0.000001ms

//*************
// 02 Solution
// Recursion

// Time complexity: O(2^N)
// Space complexity: O(n)
// Function calls: 20.365.011.074
// Time needed: 176.742ms

//*************
// 03 Solution
// Memoization

// Time complexity: O(2N)
// Space complexity: O(n)
// Function calls: 99
// Time needed: 0.000001ms


// Memoization
// Is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls.