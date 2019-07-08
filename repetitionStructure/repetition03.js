console.log(
  "----------[Question 3]----------------------------------------------------------------"
);

// 3. Make a program that reads and validates the following information:
// - Name: greater than 3 characters;
// - Age: between 0 and 150;
// - Salary: greater than zero;
// - Sex: 'f' or 'm';
// - Civil Status: 's', 'c', 'v', 'd';

const validateInfo = (name, age, salary, sex, civilStatus) => {


  const nameToArray = name.split('');
  // console.log(nameToArray);
  if (nameToArray.length < 3) {
    return `Invalid name. Name must have more than 3 characters!`
  }

  if (age < 0 || age > 150) {
    return `Invalid age!`
  }

  if (salary < 0) {
    return `Invalid salary!`
  }

  if (sex != "f" && sex != "m") {
    return `Invalid sex!`
  }

  if (civilStatus != "s" && civilStatus != "c" && civilStatus != "d") {
    return `Invalid civilStatus!`
  }

  return `
      Name: ${name},
      Age: ${age},
      Salary $ ${salary},
      Sex: ${sex},
      Civil Status: ${civilStatus}
      `
}

console.log(validateInfo("John", 30, 3000, "m", "d" ));
console.log("***************************************");
console.log(validateInfo("Mary", 18, 2800, "f", "s" ));
console.log("***************************************");
console.log(validateInfo("Ki", 15, 800, "f", "s" ));
console.log("***************************************");
console.log(validateInfo("Kim", -15, 800, "f", "s" ));
console.log("***************************************");
console.log(validateInfo("Kim", 15, -800, "f", "s" ));
console.log("***************************************");
console.log(validateInfo("Kim", 15, 800, "d", "s" ));
console.log("***************************************");
console.log(validateInfo("Kim", 15, 800, "f", "x" ));