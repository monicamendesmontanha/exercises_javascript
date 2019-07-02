console.log(
  "-----------------------------------------------------------------------------------------"
);
console.log(
  "----------[Question 2.16]----------------------------------------------------------------"
);
// 2.16 Make a program that calculates the roots of a second-degree equation, in the form ax2 + bx + c.
// The program should ask for the values ​​of a, b and c and make the consistencies, informing the user in the following situations:

// a. If the user reports the value of A equal to zero, the equation is not of the second degree and the program should not ask for the other values, being closed;
// b. If the calculated delta is negative, the equation has no real roots. Inform the user and exit the program;
// c. If the calculated delta equals zero the equation has only one real root; inform the user;
// d. If the delta is positive, the equation has two real roots; inform them to the user;

const equation = (a, b, c) => {

  const delta = (b**2) - 4*a*c
  // console.log(`Delta: ${delta}`);
  const root_delta = Math.sqrt(delta);
  // console.log(root_delta);
  const positive_root = (-b + root_delta) / (2*a)
  // console.log(positive_root);
  const negative_root = (-b + (-root_delta)) / (2*a)
  // console.log(negative_root);

  if (a == 0) {
    return `The equation is not of the second degree.`;
  } else if (delta < 0) {
    return `Delta: ${delta}. The equation has no real roots.`;
  } else if (delta == 0) {
    return `Delta: ${delta}. The equation has only one real root. root = ${positive_root}`
  } else if (delta > 0) {
    return `Delta: ${delta}. The equation has two real roots. roots = ${positive_root} and ${negative_root}`
  }

}

console.log(equation(0,5,4)); // not second degree
console.log(equation(1,4,5)); // delta < 0
console.log(equation(4,4,1)); // delta = 0 root = 1/2 or 0.5
console.log(equation(1,5,6)); // delta > 0 root = 3 e root 2