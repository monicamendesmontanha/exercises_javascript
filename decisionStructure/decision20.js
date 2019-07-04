console.log(
  "-----------------------------------------------------------------------------------------"
);
console.log(
  "----------[Question 2.20]----------------------------------------------------------------"
);

// 2.20 Make a Program for reading a student's three partial scores. The program should calculate the average attained per student and present:

// a. The message "Approved", if the average is greater than or equal to 7, with the respective average reached;
// b. The message "Disapproved", if the average is less than 7, with the respective average reached;
// c. The "Approved with Distinction" message, if the mean is 10.


const average = (score1, score2, score3) => {

  const averageReached= (score1 + score2 + score3) / 3
  return averageReached
}

const studentScore = (score1, score2, score3) => {

  const averageReached = average(score1, score2, score3)

  if (averageReached == 10) {
    return `Approved with Distinction! ${averageReached}`;
  } else if (averageReached >= 7) {
    return `Approved! ${averageReached}`;
  } else if (averageReached < 7) {
    return `Disapproved! ${averageReached}`;
  }

}

console.log(studentScore(10,10,10));
console.log(studentScore(8,9,7));
console.log(studentScore(7,6,5));


