console.log(
  "-----------------------------------------------------------------------------------------"
);
console.log(
  "----------[Question 2.26]----------------------------------------------------------------"
);
// 2.26 One station is selling fuels with the following discount chart:
// * **Alcohol:**
// - up to 20 liters, 3% discount per liter
// - above 20 liters, 5% discount per liter
// * **Gasoline:**
// - up to 20 liters, 4% discount per liter
// - above 20 liters, 6% discount per liter
// Write an algorithm that reads the number of liters sold,
// the type of fuel (coded as follows: A-alcohol, G-petrol),
// calculate and print the amount to be paid by the customer knowing that
// the price of the liter of gasoline is R $ 2,50 the price of the liter of alcohol is R $ 1,90.


const LITER_OF_GAS = 2.50
const LITER_OF_ALCOHOL = 1.90

const alcohol = (amountLiters) => {
  const price = amountLiters * LITER_OF_ALCOHOL
  let priceWithDiscount = 0

  if (amountLiters <= 20) {
    priceWithDiscount = price - (price * 0.03)
  } else if (amountLiters > 20) {
    priceWithDiscount = price - (price * 0.05)
  }
  return `Total price: $ ${priceWithDiscount.toFixed(2)}`
}

const gasoline = (amountLiters) => {
  const price = amountLiters * LITER_OF_ALCOHOL
  let priceWithDiscount = 0

  if (amountLiters <= 20) {
    priceWithDiscount = price - (price * 0.04)
  } else if (amountLiters > 20) {
    priceWithDiscount = price - (price * 0.06)
  }
  return `Total price: $ ${priceWithDiscount.toFixed(2)}`
}

const fuelStation = (typeFuel, amountLiters) => {

  if (typeFuel == "G") {
    return gasoline(amountLiters)
  } else if (typeFuel == "A") {
    return alcohol(amountLiters)
  }

}

console.log(fuelStation("A", 100));

console.log(fuelStation("A", 15));

console.log(fuelStation("G", 200));

console.log(fuelStation("G", 10));