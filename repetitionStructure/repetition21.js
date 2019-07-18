console.log(
  "----------[Question 21]----------------------------------------------------------------"
);
// 21. Make a program that asks for an integer and determines whether or not it is a prime number. A prime number is one that is divisible only by itself and by 1.
// 22. Change the program of calculation of prime numbers, informing if the number is not prime, by which number it is divisible.


const isPrime = (number) => {

  for(let i = 2; i < number; i++) {
    if(number % i === 0) {
      for (let i = 0; i < number; i++) {
        let divisibles = []
        let result = number / i
        if (result % i === 0) {
          divisibles.push(result)
          console.log(divisibles)
        }
      }
      return `${number} isn't prime`;
    } else {
      return `${number} is prime`;;
    }
  }
  return number > 1
}

console.log(isPrime(3)); // prime
console.log(isPrime(4));
console.log(isPrime(5)); // prime
console.log(isPrime(6));
console.log(isPrime(7)); // prime
console.log(isPrime(20));


