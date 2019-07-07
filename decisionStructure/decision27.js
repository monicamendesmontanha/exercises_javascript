console.log(
  "-----------------------------------------------------------------------------------------"
);
console.log(
  "----------[Question 2.27]----------------------------------------------------------------"
);
// 2.27 A fruit bowl is selling fruit with the following price list:

//              Bellow to 5 kg   Above to 5 kg
// Strawberry  $ 2,50 per kg    $ 2,20 per kg
// Apple       $ 1.80 per Kg    $ 1.50 per Kg

// If the customer buys more than 8 kg in fruit or the total value of the purchase exceeds $ 25.00,
// you will still receive a 10% discount on this total. Write an algorithm to read the amount (in kg)
// of strawberries and the amount (in kg) of purchased apples and write the amount to be paid by the customer.

const fruitBowl = (type, amountKg, bellowTo5, aboveTo5) => {
  let price = 0

  if (amountKg < 5) {
    price = bellowTo5 * amountKg
  } else if (amountKg >= 5 ) {
    price = aboveTo5 * amountKg
  }

  if (amountKg >= 8 || price > 25) {
    const discount = 0.10
    price = price - (price * discount)
  }

  return `${amountKg}kg ${type}: $${price.toFixed(2)}`
}

const kindOfFruits = (type, amountKg) => {
  let bellowTo5 = 0
  let aboveTo5 = 0

  if (type === "strawberries") {
    bellowTo5 = 2.50
    aboveTo5 = 2.20
  } else if (type === "apple") {
    bellowTo5 = 1.80
    aboveTo5 = 1.50
  }

  return fruitBowl(type, amountKg, bellowTo5, aboveTo5)
}

console.log(kindOfFruits("strawberries", 3));
console.log(kindOfFruits("strawberries", 8));
console.log(kindOfFruits("strawberries", 9));
console.log(kindOfFruits("strawberries", 25));
console.log(
  "********************************************"
);
console.log(kindOfFruits("apple", 3));
console.log(kindOfFruits("apple", 8));
console.log(kindOfFruits("apple", 9));
console.log(kindOfFruits("apple", 25));