/* EXERCISE */

// 1. Write a code to check whether the date is a weekend.
console.log('\nNumber 1');
console.log('Check whether the date is a weekend');

const inputDate = '12 Dec 2023';
const dayOfWeek = new Date(inputDate).getDay();

if (dayOfWeek === 0 || dayOfWeek === 6) {
  console.log(`Input Date: ${inputDate}`);
  console.log('It is a weekend');
} else {
  console.log(`Input Date: ${inputDate}`);
  console.log('It is not a weekend');
}

// 2. Write a code to find GCD of two numbers → use while.
console.log('\nNumber 2');
console.log('Find GCD of two numbers');

const num1 = 12;
const num2 = 8;
let greatestCommonDivisor = 1;
let divisor = 1;

while (divisor <= num1 && divisor <= num2) {
  if (num1 % divisor === 0 && num2 % divisor === 0) {
    greatestCommonDivisor = divisor;
  }
  divisor++;
}

console.log(`GCD of ${num1} and ${num2} is ${greatestCommonDivisor}`);

// 3. Write a code to find LCM of two numbers → use do … while.
console.log('\nNumber 3');
console.log('Find LCM of two numbers');

const number1 = 12;
const number2 = 8;
let leastCommonMultiple = 1;
let multiple = 1;

do {
  if (multiple % number1 === 0 && multiple % number2 === 0) {
    leastCommonMultiple = multiple;
  }
  multiple++;
} while (multiple <= number1 * number2);

console.log(`LCM of ${number1} and ${number2} is ${leastCommonMultiple}`);

// 4. Write a code to find most common character from a string.
console.log('\nNumber 4');
console.log('Find most common character from a string');

const inputString = 'Hello World';
const characters = inputString.split('');
const characterCount = {};

for (let i = 0; i < characters.length; i++) {
  const character = characters[i];
  if (characterCount[character]) {
    characterCount[character]++;
  } else {
    characterCount[character] = 1;
  }
}

let maxCount = 0;
let mostCommonChar = '';

for (const char in characterCount) {
  if (characterCount[char] > maxCount) {
    maxCount = characterCount[char];
    mostCommonChar = char;
  }
}

console.log(`Input String: ${inputString}`);
console.log(`Most common character: ${mostCommonChar}`);

// 5. Write a code to sort a string alphabetically (with and without sort function)
console.log('\nNumber 5');
console.log('Sort a string alphabetically');

const stringToSort = 'Hello World';
const stringToArray = stringToSort.split('');
const sortedStringWithSort = [...stringToArray].sort().join('');
const sortedStringWithoutSort = [];

for (let i = 0; i < stringToArray.length; i++) {
  let minChar = stringToArray[0];
  let minIndex = 0;
  for (let j = 0; j < stringToArray.length; j++) {
    if (stringToArray[j] < minChar) {
      minChar = stringToArray[j];
      minIndex = j;
    }
  }
  sortedStringWithoutSort.push(minChar);
  stringToArray.splice(minIndex, 1);
}

console.log(`Input String: ${stringToSort}`);
console.log(`Sorted (with sort): ${sortedStringWithSort}`);
console.log(`Sorted (without sort): ${sortedStringWithoutSort.join('')}`);

// 6. Write a code to get minimum date from array of dates.
console.log('\nNumber 6');
console.log('Get minimum date from array of dates');

const dateStrings = [
  '11 Dec 2023',
  '10 Dec 2023',
  '09 Dec 2023',
  '08 Dec 2023',
  '07 Dec 2023',
];

const dateObjects = {};

for (const dateString of dateStrings) {
  dateObjects[dateString] = new Date(dateString).getTime();
}

let minDateTimestamp = Infinity;
let minDateString = '';

for (const dateString in dateObjects) {
  if (dateObjects[dateString] < minDateTimestamp) {
    minDateTimestamp = dateObjects[dateString];
    minDateString = dateString;
  }
}

console.log(`Date Strings: ${dateStrings}`);
console.log(`Minimum Date: ${minDateString}`);

// 7. Write a code that calculates the sum of all elements of a two-dimensional array.
console.log('\nNumber 7');
console.log('Calculate the sum of all elements of a two-dimensional array');

const twoDimArray = [
  [1, 2, 3],
  [4, 5, 6],
];

let totalSum = 0;

for (const innerArray of twoDimArray) {
  for (const element of innerArray) {
    totalSum += element;
  }
}

console.log(`Two-Dimensional Array: ${twoDimArray}`);
console.log(`Total Sum: ${totalSum}`);

// 8. Write a code to find the longest common prefix string amongst an array of strings.
console.log('\nNumber 8');
console.log(
  'Find the longest common prefix string amongst an array of strings'
);

const stringArray = ['Hello World', 'Hello', 'Hello World', 'Hello World'];
const stringArrayLength = stringArray.length;
let longestCommonPrefix = '';

for (let i = 0; i < stringArrayLength; i++) {
  const currentString = stringArray[i];
  const currentStringLength = currentString.length;
  if (i === 0) {
    longestCommonPrefix = currentString;
  } else {
    let prefixLength = 0;
    for (let j = 0; j < currentStringLength; j++) {
      if (currentString[j] === longestCommonPrefix[j]) {
        prefixLength++;
      } else {
        break;
      }
    }
    longestCommonPrefix = longestCommonPrefix.slice(0, prefixLength);
  }
}

console.log(`String Array: ${stringArray}`);
console.log(`Longest Common Prefix: ${longestCommonPrefix}`);

// 9. Write a code that copies the first half of an array. With an odd number of array elements, the middle element should belong to the first half.
console.log('\nNumber 9');
console.log('Copy the first half of an array');

const originalArray = [1, 2, 3, 4, 5, 6, 7];
const copiedArray = [];

const halfLength = Math.ceil(originalArray.length / 2);

for (let i = 0; i < halfLength; i++) {
  copiedArray.push(originalArray[i]);
}

console.log(`Original Array: ${originalArray}`);
console.log(`Copied Array: ${copiedArray}`);

// 10. Write a code to get the number of days in a month
// Example : month = 1, year = 2022 → 31
console.log('\nNumber 10');
console.log('Get the number of days in a month');

const targetMonth = 1; // February
const targetYear = 2022;
const lastDayOfMonth = new Date(targetYear, targetMonth, 0).getDate();

console.log(`Month: ${targetMonth}`);
console.log(`Year: ${targetYear}`);
console.log(`Days in the Month: ${lastDayOfMonth}`);

// 11. Write a code to count the number of days passed since beginning of the year.
console.log('\nNumber 11');
console.log('Count the number of days passed since the beginning of the year');

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const firstDayOfYear = new Date(currentYear, 0, 1);
const daysPassed = Math.floor(
  (currentDate - firstDayOfYear) / (1000 * 60 * 60 * 24)
);

console.log(`Year: ${currentYear}`);
console.log(`Days Passed: ${daysPassed}`);

// 12. Write a code to calculate age.
console.log('\nNumber 12');
console.log('Calculate age');

const birthDate = new Date('1990-01-01'); // Replace with the birthdate
const today = new Date();
const ageInMilliseconds = today - birthDate;
const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365));

console.log(`Birthdate: ${birthDate.toLocaleDateString()}`);
console.log(`Age: ${ageInYears} years`);
