console.log(
  "-----------------------------------------------------------------------------------------"
);
console.log(
  "----------[Question 2.24]----------------------------------------------------------------"
);

// 2.24 Make a Program that reads 2 numbers and then ask the user which operation he wants to perform.
// The result of the operation shall be accompanied by a sentence stating whether the number is:
// * even or odd;
// * positive or negative;
// * integer or decimal.


const sum = (a,b) => {
  return a + b
}

const calculate = (a, b, operation) => {
  if (operation === "sum") {
    const result = sum(a,b)
    return `The result ${a} + ${b} is igual to ${result}`
  }
}


const checkResult = (result) => {

  return {
    even: result % 2 === 0,
    odd: result % 2 != 0,
    positive: result >= 0,  // fix it!
    negative: result < 0,
    integer: result % 1 != 0,
    decimal: result % 1 === 1,
  }
}


const showResult = (result) => {

  const resultChecked = checkResult(result)
  console.log(resultChecked)

  const sentence = []
  for (let [key, value] of Object.entries(resultChecked)) {
    if (value) {
      sentence.push(key)
    }
  }

  return sentence;
}

const result = calculate(2,3,"sum")
console.log(result)
const sentence = showResult(result);
console.log(">>>>>>>", sentence);