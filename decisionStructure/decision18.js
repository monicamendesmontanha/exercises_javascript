console.log("-----------------------------------------------------------------------------------------");
console.log("----------[Question 2.18]-----------------------------------------------------------------");
// 2.18 Make a Program that asks for a date in the format dd / mm / yyyy and determine if it is a valid date.

const isvalidDate = (day, month, year) => {

  if (day == 0 || month == 0 || year == 0) {
    return `INVALID DATE! ${day} / ${month} / ${year}.`
  }

  if (month == 02 && day > 29) {
    return `INVALID DATE! ${day} / ${month} / ${year}.`
  }

  if (month == 04 || month == 06 || month == 09 || month == 11) {
    if (day > 30) {
      return `INVALID DATE! ${day} / ${month} / ${year}.`
    }
  }

  if (day > 31 || month > 12 || year < 1000 && year > 2020) {
    return `INVALID DATE! ${day} / ${month} / ${year}.`
  } else {
    return `Valid date: ${day} / ${month} / ${year}.`
  }

}

console.log(isvalidDate(31,01,2019)) // valid
console.log(isvalidDate(31,13,2019)) // invalid (max 12 months)
console.log(isvalidDate(31,00,2019)) // invalid (min 01 months)
console.log(isvalidDate(00,01,2019)) // invalid (min 01 day)
console.log(isvalidDate(32,12,2019)) // invalid (max 31 days jan, mar, jul, aug, oct, dec)
console.log(isvalidDate(31,06,2019)) // invalid (max 30 days apr, jun, sep, nov)
console.log(isvalidDate(30,02,2019)) // invalid (max 29 days february)
console.log(isvalidDate(01,01,0000)) // invalid (min 0000 year)