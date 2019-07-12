console.log(
  "----------[Question 18]----------------------------------------------------------------"
);
// 18. Make a program that, given a set of N numbers, determines the smallest value,
// the largest value, and the sum of the values.


const smallestNumber = (numbers) => {

  let smallest = numbers[0];
  for(let i = 0; i< numbers.length; i++) {
    if (numbers[i] < smallest) {
      smallest = numbers[i]
    }
  }
  console.log(`The smallest number is ${smallest}.`)
  return smallest
}


const largestNumber = (numbers) => {

  let largest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i]
    }
  }
  console.log(`The largest number is ${largest}.`)
  return largest
}

const sumValues = (smallest, largest) => {

  const sum = smallest + largest
  return `The sum is ${sum}`
}

const smallest = smallestNumber([10,20,13,44,75]);
const largest = largestNumber([15,82,93,24,55]);

console.log(sumValues(smallest, largest));