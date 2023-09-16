/* EXERCISE */

// 1. Create a function that can create a triangle pattern according to the height we provide like the following:
// 01
// 02 03
// 04 05 06
// 07 08 09 10
// parameters: height => triangle height

console.log('\nNumber 1');
console.log('Create a triangle pattern according to the height we provide');

const triangleHeight = 10;

function triangle(height) {
  let result = '';
  let number = 1;

  for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= i; j++) {
      result += `${number} `;
      number++;
    }
    result += '\n';
  }

  return result;
}

console.log(triangle(triangleHeight));

// 2. Create a function that can loop the number of times according to the input we provide, and will replace multiples of 3 with 'Fizz', multiples of 5 with 'Buzz', and multiples of 3 and 5 with 'FizzBuzz'.
// parameters: n => total looping

console.log('\nNumber 2');
console.log(
  'Loop the number of times according to the input we provide, and will replace multiples of 3 with Fizz, multiples of 5 with Buzz, and multiples of 3 and 5 with FizzBuzz'
);

const totalLooping = 15;

function fizzBuzz(n) {
  let result = '';

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) result += 'FizzBuzz ';
    else if (i % 3 === 0) result += 'Fizz ';
    else if (i % 5 === 0) result += 'Buzz ';
    else result += `${i} `;
  }

  return result;
}

console.log(fizzBuzz(totalLooping));

// 3. Create a function that calculate Body Mass Index (BMI)
// Formula: BMI = weight (kg) / (height (m) * height (m))
// parameters: weight (kg), height (cm)
// return values:
// - BMI < 18.5 => "less weight"
// - 18.5 <= BMI <= 24.9 => "ideal"
// - 25.0 <= BMI <= 29.9 => "overweight"
// - 30.0 <= BMI <= 39.9 => "very overweight"
// - BMI >= 40.0 => "obesity"
console.log('\nNumber 3');
console.log('Calculate Body Mass Index (BMI)');

const weight = 80;
const height = 170;

function bmi(weight, height) {
  const bmi = weight / ((height / 100) * (height / 100));

  if (bmi < 18.5) return 'less weight';
  else if (bmi >= 18.5 && bmi <= 24.9) return 'ideal';
  else if (bmi >= 25.0 && bmi <= 29.9) return 'overweight';
  else if (bmi >= 30.0 && bmi <= 39.9) return 'very overweight';
  else return 'obesity';
}

console.log(bmi(weight, height));

// 4. Write a function to remove all odd numbers in array and return a new array that contains even numbers only.
console.log('\nNumber 4');
console.log(
  'Remove all odd numbers in array and return a new array that contains even numbers only'
);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function removeOddNumbers(numbers) {
  return numbers.filter((number) => number % 2 === 0);
}

console.log(removeOddNumbers(numbers));

// 5. Write a function to split a string to convert it into an array of words.
// Example: 'Hello World' => ['Hello', 'World']
console.log('\nNumber 5');
console.log('Split a string to convert it into an array of words');

const string = 'Hello World';

function splitString(string) {
  return string.split(' ');
}

console.log(splitString(string));
