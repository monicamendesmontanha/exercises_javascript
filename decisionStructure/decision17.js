console.log(
  "-----------------------------------------------------------------------------------------"
);
console.log(
  "----------[Question 2.17]----------------------------------------------------------------"
);

// 2.17 Make a Program that asks for a number corresponding to a given year, and then report whether or not this year is leap year.

// Every year that is exactly divisible by four is a leap year,
//except for years that are exactly divisible by 100,
//but these centurial years are leap years if they are exactly divisible by 400.
// For example, the years 1700, 1800, and 1900 are not leap years,
// but the years 1600 and 2000 are.


const leapYear = (year) => {
  if (year % 4 == 0  && year % 100 !=0 || year % 400 ==0) {
    return `${year} is a leap year!`
  } else {
    return `${year} is a common year!`
  }
}

console.log(leapYear(1600)) //leap year
console.log(leapYear(1700)) //common year
console.log(leapYear(1800)) //common year
console.log(leapYear(1900)) //common year
console.log(leapYear(2000)) //leap year
console.log(leapYear(2020)) //leap year