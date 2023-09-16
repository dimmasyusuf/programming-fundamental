/* EXERCISE */

// 1. Write a code to convert celsius to fahrenheit.
console.log('\nNumber 1');

const celsius = 100;
const fahrenheit = 200;
const temperature = 'fahrenheit';

switch (temperature) {
  case 'celsius':
    console.log(
      `${celsius} °C equal to ${Math.floor((9 / 5) * celsius + 32)} °F`
    );
    break;
  case 'fahrenheit':
    console.log(
      `${fahrenheit} °F equal to ${Math.floor(((fahrenheit - 32) * 5) / 9)} °C`
    );
    break;
  default:
    console.log('Temperature is unknown');
}

// 2. Write a code to check whether the number is odd or even.
console.log('\nNumber 2');

const oddOrEvenNumber = 10;

if (oddOrEvenNumber % 2 === 0) {
  console.log(`${oddOrEvenNumber} is even number.`);
} else {
  console.log(`${oddOrEvenNumber} is odd number.`);
}

// 3. Write a code to check whether the number is prime number or not.
console.log('\nNumber 3');

const checkPrimeNumber = 41;

if (checkPrimeNumber === 1) {
  console.log(`${checkPrimeNumber} is not prime number.`);
} else if (checkPrimeNumber === 2) {
  console.log(`${checkPrimeNumber} is prime number.`);
} else {
  for (let i = 2; i < checkPrimeNumber; i++) {
    if (checkPrimeNumber % i === 0) {
      console.log(`${checkPrimeNumber} is not prime number.`);
      break;
    } else {
      console.log(`${checkPrimeNumber} is prime number.`);
      break;
    }
  }
}

// 4. Write a code to find the sum of the numbers 1 to N.
// Example: 5 => 1 + 2 + 3 + 4 + 5 = 15
const sumNumber = 5;
let total = 0;

for (let i = 1; i <= sumNumber; i++) {
  total += i;
}

console.log('\nNumber 4');
console.log(`Total number from 1 to ${sumNumber} is ${total}`);

// 5. Write a code to find factorial of a number.
const factorialNumber = 3;
let factorialResult = 1;

for (let i = 1; i <= factorialNumber; i++) {
  factorialResult *= i;
}

console.log('\nNumber 5');
console.log(`Factorial from ${factorialNumber} is ${factorialResult}`);

// 6. Write a code to print the first N fibonacci numbers.
console.log('\nNumber 6');

const fibonacciNumber = 10;
let a = 0;
let b = 1;
let c;

console.log(`Fibonacci numbers from ${fibonacciNumber} are`);

for (let i = 1; i <= fibonacciNumber; i++) {
  console.log(a);
  c = a + b;
  a = b;
  b = c;
}
