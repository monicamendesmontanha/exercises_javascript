console.log(
  "-----------------------------------------------------------------------------------------"
);
console.log(
  "----------[Question 2.25]----------------------------------------------------------------"
);

// 2.25 Make a program that asks 5 questions to a person about a crime. The questions are:
// The. "Did you call the victim?"
// a. "Been at the scene?"
// b. "Do you live near the victim?"
// c. "Should I for the victim?"
// d. "Have you worked with the victim?"
// The program should in the end issue a classification about the person's participation in the crime.
// If the person responds positively to 2 questions it should be classified as
// "Suspicious", between 3 and 4 as "Accomplice" and 5 as "Assassin". Otherwise, it will be classified as "Innocent."


const questions = (answer) => {

const result = answer.filter(answer => answer == "s");  //  filter all the 's' answer on array.
// console.log(result)
const positive = result.length  //  count how many 's' has on array.
// console.log(positive)

  if (positive < 2) {
    return "Innocent"
  } else if (positive == 2) {
    return "Suspicious"
  } else if (positive == 3 || positive == 4)  {
    return "Accomplice"
  } else if (positive == 5)  {
    return "Assassin"
  }
}

console.log(questions(["n","n","n","n","s"]));
console.log(questions(["n","n","n","s","s"]));
console.log(questions(["n","n","s","s","s"]));
console.log(questions(["s","s","s","n","s"]));
console.log(questions(["s","s","s","s","s"]));
