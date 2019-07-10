console.log(
  "----------[Question 12]----------------------------------------------------------------"
);
// 12. Develop a table generator, capable of generating the table of any integer between 1 and 10.
// The user must indicate which number he wants to see the table. The output should be according to the example below:

// Tabuada of 5:
// 5 X 1 = 5
// 5 X 2 = 10
// ...
// 5 X 10 = 50

const tableGenerator = (number) => {
  let index = 1
  let end = 10

  while (index <= end) {

    let result = number * index

    console.log(`${number} * ${index} = ${result}`);
    index = index + 1
  }
}

console.log(tableGenerator(5));
console.log("***************");
console.log(tableGenerator(8));

