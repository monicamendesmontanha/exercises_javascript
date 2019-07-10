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

///////////////////////////////
// Solution 01 using While loop
///////////////////////////////
const tableGenerator = (number) => {
  let index = 1
  let end = 10

  while (index <= end) {

    let result = number * index

    console.log(`${number} * ${index} = ${result}`);
    index = index + 1
  }
}

tableGenerator(5)
console.log("***************");





/////////////////////////////
// Solution 02 using FOR loop
/////////////////////////////
const table = (number) => {

  for (let i = 1 ; i <= 10 ; i++) {
    let result = number * i

    console.log(`${number} * ${i} = ${result}`);
  }

}

table(8)


