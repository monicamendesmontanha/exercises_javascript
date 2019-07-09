console.log(
  "----------[Question 10]----------------------------------------------------------------"
);
// 10. Make a program that receives two integers and generates the integers that are in the range they comprise.
// 11. Change the previous program to show the sum of the numbers at the end.

const totalSum = (rangeList) => {

  const totalSum = rangeList.reduce((previosValue, currentValue) => currentValue = currentValue + previosValue);
  return `Total sum: ${totalSum}`
}


const range = (start, end) => {
  var list = [];
  for (var i = start; i <= end; i++) {
    list.push(i);
  }

  console.log(totalSum(list));
  return `Range: ${list}`

}

console.log(range(20,30))
