console.log(
  "-----------------------------------------------------------------------------------------"
);
console.log(
  "----------[Question 2.15]----------------------------------------------------------------"
);
// 2.15 Make a Program that asks for the 3 sides of a triangle. The program should tell you whether the values ​​can be a triangle. Indicate, if the sides form a triangle, if it is: equilateral, isosceles or scalene.
// Tips:
// * Three sides form a triangle when the sum of any two sides is greater than the third;
// * Triangle Equilateral: three equal sides;
// * Isosceles triangle: any two sides equal;
// * Scalene triangle: three different sides;

const isTriangle = (side1, side2, side3) => {
  if (side1+side2 > side3 && side1+side3 > side2 && side2+side3 > side1) {
    if (side1 == side2 && side1 == side3) {
      return `> Is a triagle equilateral!`
    } else if (side1 == side2 || side1 == side3 || side2 == side3) {
      return `> Is a triagle isosceles!`
    } else if (side1 != side2 && side1 != side3 && side2 != side3) {
      return `> Is a triagle scalene!`
    }
  } else {
    return `Is not a triagle!`
  }
}

console.log(isTriangle(3,3,3));
console.log(isTriangle(3,3,2));
console.log(isTriangle(3,4,5));
console.log(isTriangle(0,10,12));