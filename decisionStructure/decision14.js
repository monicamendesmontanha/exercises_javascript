console.log(
  "-----------------------------------------------------------------------------------------"
);
console.log(
  "----------[Question 2.14]----------------------------------------------------------------"
);
// 2.14 Make a program that reads the two partial marks obtained by a student in a course over a semester, and calculate their average.
// The assignment of concepts obeys the table below:

//   Average Utilization Concept
//   Between 9.0 and 10.0 A
//   Between 7.5 and 9.0 B
//   Between 6.0 and 7.5 C
//   Between 4.0 and 6.0 D
//   Between 4.0 and zero E

// The algorithm should display the notes, the mean, the corresponding concept and the message "APPROVED" if the concept is A, B or C or "FAILED" if the concept is D or E.

const assignment = (score1, score2) => {
  const average = (score1 + score2) / 2;
  return average
}

const averageConcept = (score1, score2) => {

  const average = assignment(score1, score2);
  console.log(`
  - Score 1: ${score1.toFixed(1)}
  - Score 1: ${score2.toFixed(1)}
  - Average: ${average.toFixed(1)}
  `)

  if (average >= 9 && average <= 10) {
    return `Concept: A. APPROVED!`
  } else if (average >= 7.5 && average < 9) {
    return `Concept: B. APPROVED!`
  } else if (average >= 6 && average < 7.5) {
    return `Concept: C. APPROVED!`
  } else if (average >= 4 && average < 6) {
    return `Concept: D. FAILED!`
  } else if (average >= 0 && average < 4) {
    return `Concept: E. FAILED!`
  }

}


console.log(averageConcept(9.0, 10.0));
console.log(averageConcept(8.0, 8.0));
console.log(averageConcept(7.0, 7.0));
console.log(averageConcept(5.0, 6.0));
console.log(averageConcept(3.0, 4.0));
