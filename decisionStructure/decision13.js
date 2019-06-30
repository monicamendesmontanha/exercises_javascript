console.log(
  "-----------------------------------------------------------------------------------------"
);
console.log(
  "----------[Question 2.13]----------------------------------------------------------------"
);
// 2.13 Make a Program that reads a number and displays the corresponding day of the week.
// (1-Sunday, 2- Monday, etc.), if you enter another value should appear invalid value.

const week = dayOfWeek => {
  let text = "invalid value";

  switch (dayOfWeek) {
    case 1:
      text = "Monday";
      break;
    case 2:
      text = "Tuesday";
      break;
    case 3:
      text = "Wednesday";
      break;
    case 4:
      text = "Thursday";
      break;
    case 5:
      text = "Friday";
      break;
    case 6:
      text = "Sartuday";
      break;
    case 7:
      text = "Sunday";
      break;
  }
  return text;
};

console.log(week(1));
console.log(week(2));
console.log(week(3));
console.log(week(4));
console.log(week(5));
console.log(week(6));
console.log(week(7));
console.log(week(8));
