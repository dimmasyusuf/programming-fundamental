/* EXERCISE */

// 1. Write a code to display the multiplication table of a given integer.
// Example: Number => 9, Output: 9x1, 9x2, ..., 9x10
const input = 9;
const limit = 10;

console.log('\nNumber 1');
console.log('Multiplication table of a given number are');

for (let i = 1; i <= limit; i++) {
  console.log(`${input} x ${i} = ${input * i}`);
}

// 2. Write a code to check whether a string is a palindrome or not.
console.log('\nNumber 2');
console.log('Check whether a string is a palindrome or not');

const string = 'katak';
const reverseString = string.split('').reverse().join('');

if (string === reverseString) {
  console.log(`${string} is a palindrome`);
} else {
  console.log(`${string} is not a palindrome`);
}

// 3. Write a code to convert centimeter to kilometer.
console.log('\nNumber 3');
console.log('Convert centimeter to kilometer');

const centimeter = 1000;
const kilometer = centimeter / 100000;

console.log(`${centimeter} centimeter is ${kilometer} kilometer`);

// 4. Write a code to format number as currency (IDR)
// Example: 1000 => Rp. 1.000,00
console.log('\nNumber 4');
console.log('Format number as currency (IDR)');

const number = 1000;
const currency = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
}).format(number);

console.log(`${number} => ${currency}`);

// 5. Write a code to remove first occurrence of a given 'search string' from a string.
// Example: string = 'Hello World', search string = 'ell' => 'Ho world'
console.log('\nNumber 5');
console.log('Remove first occurrence of a given search string from a string');

const fullString = 'Hello World';
const searchString = 'ell';
const removeString = fullString.replace(searchString, '');

console.log(`${fullString} => ${removeString}`);

// 6. Write a code to capitalize the first letter of each word in a string.
// Example: 'hello world' => 'Hello World'
console.log('\nNumber 6');
console.log('Capitalize the first letter of each word in a string');

const words = 'hello world';
const capitalizeWords = words
  .split(' ')
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');

console.log(`${words} => ${capitalizeWords}`);

// 7. Write a code to reverse a string.
console.log('\nNumber 7');
console.log('Reverse a string');

const reverse = 'Hello World';
const reverseWords = reverse.split('').reverse().join('');

console.log(`${reverse} => ${reverseWords}`);

// 8. Write a code to swap the case of each character from string.
// Example: 'The QuiCk BrOwN Fox' => tHE qUIcK bRoWn fOX'
console.log('\nNumber 8');
console.log('Swap the case of each character from string');

const swapCase = 'The QuiCk BrOwN Fox';
const swapCaseWords = swapCase
  .split('')
  .map((word) =>
    word === word.toUpperCase() ? word.toLowerCase() : word.toUpperCase()
  )
  .join('');

console.log(`${swapCase} => ${swapCaseWords}`);

// 9. Write a code to find the largest of two given integers.
console.log('\nNumber 9');
console.log('Find the largest of two given integers');

const firstNumber = 5;
const secondNumber = 10;

if (firstNumber > secondNumber) {
  console.log(`${firstNumber} is the largest number`);
} else {
  console.log(`${secondNumber} is the largest number`);
}

// 10. Write a conditional statement to sort three numbers.
console.log('\nNumber 10');
console.log('Sort three numbers');

const first = 1;
const second = 2;
const third = 3;

if (first > second && first > third) {
  if (second > third) {
    console.log(`${first}, ${second}, ${third}`);
  } else {
    console.log(`${first}, ${third}, ${second}`);
  }
} else if (second > first && second > third) {
  if (first > third) {
    console.log(`${second}, ${first}, ${third}`);
  } else {
    console.log(`${second}, ${third}, ${first}`);
  }
} else if (third > first && third > second) {
  if (first > second) {
    console.log(`${third}, ${first}, ${second}`);
  } else {
    console.log(`${third}, ${second}, ${first}`);
  }
}

// 11. Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.
console.log('\nNumber 11');
console.log(
  'Shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type'
);

const inputType = 'string';

if (typeof inputType === 'string') {
  console.log('1');
} else if (typeof inputType === 'number') {
  console.log('2');
} else {
  console.log('3');
}

// 12. Write a code to change every letter into * from a string of input
// Example: 'An apple a day keeps the doctor away' => '*n *pple * d*y keeps the doctor *w*y
console.log('\nNumber 12');
console.log('Change every letter into * from a string of input');

const inputString = 'An apple a day keeps the doctor away';
const changeString = inputString.replace(/[a-z]/gi, '*');

console.log(`${inputString} => ${changeString}`);
