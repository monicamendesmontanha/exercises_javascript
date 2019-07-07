console.log(
  "-----------------------------------------------------------------------------------------"
);
console.log(
  "----------[Question 2.28]----------------------------------------------------------------"
);
// 2.28 The Hypermarket Tabajara has a meat promotion which is unmissable. Check out:
//                  Bellow to 5 kg    Above to 5 kg
// File Double      $ 4,90 per kg     $ 5,80 per kg
// Alcatra          $ 5,90 per kg     $ 6,80 per kg
// Picanha          $ 6,90 per kg     $ 7,80 per kg

// In order to serve all customers, each customer may take only one of the types of meat in the promotion,
// but there is no limit to the amount of meat per customer. If purchase is made on the Tabajara card the customer
// will still receive a 5% discount on the total purchase. Write a program that asks for the type and quantity
// of meat purchased by the user and generates a tax coupon containing the purchase information:
// type and quantity of meat, total price, type of payment, amount of discount and amount payable.

const tabajaraMarket = (typeMeat, quantityOfMeat, bellowToXkg, aboveToXkg) => {
  let price = 0
  const kg = 5
  const discount = 0.05

  if (quantityOfMeat < kg ) {
    price = quantityOfMeat * bellowToXkg
  } else if (quantityOfMeat >= kg ) {
    price = quantityOfMeat * aboveToXkg
  }

  const priceWithDiscount = price - (price * discount)

  return `${typeMeat}: ${priceWithDiscount.toFixed(2)}`
}


const promotionMeat = (typeMeat, quantityOfMeat) => {

  let bellowToXkg = 0;
  let aboveToXkg = 0;

  if (typeMeat === "file double") {
    bellowToXkg = 4.90
    aboveToXkg = 5.80
  } else if (typeMeat === "alcatra") {
    bellowToXkg = 5.90
    aboveToXkg = 6.80
  } else if (typeMeat === "picanha") {
    bellowToXkg = 6.90
    aboveToXkg = 7.80
  }

  return tabajaraMarket(typeMeat, quantityOfMeat, bellowToXkg, aboveToXkg)

}

console.log(promotionMeat("file double", 3));
console.log(promotionMeat("file double", 10));
console.log(promotionMeat("alcatra", 3));
console.log(promotionMeat("alcatra", 10));
console.log(promotionMeat("picanha", 3));
console.log(promotionMeat("picanha", 10));