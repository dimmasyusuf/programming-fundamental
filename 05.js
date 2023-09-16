/* EXERCISE */

// 1. Write a function to get the lowest, highest and average value in the array (with and without sort function).
console.log('\nNumber 1');
console.log('Get the lowest, highest and average value in the array');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getLowestHighestAverage(numbers) {
  const sortedNumbers = numbers.sort((a, b) => a - b);
  const lowest = sortedNumbers[0];
  const highest = sortedNumbers[sortedNumbers.length - 1];
  const average =
    sortedNumbers.reduce((acc, cur) => acc + cur) / sortedNumbers.length;

  return {
    lowest,
    highest,
    average,
  };
}

console.log(getLowestHighestAverage(numbers));

// 2. Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and the last word by an 'and'.
console.log('\nNumber 2');
console.log('Concatenate the words in the array');

const words = ['Hello', 'World', 'JavaScript'];

function concatenateWords(words) {
  const lastWord = words.pop();
  const concatenatedWords = words.join(', ');

  return `${concatenatedWords} and ${lastWord}`;
}

console.log(concatenateWords(words));

// 3. Write a function to split and convert it into an array of words.
// Example: 'Hello World' -> ['Hello', 'World']
console.log('\nNumber 3');
console.log('Split and convert it into an array of words');

const sentence = 'Hello World';

function splitSentence(sentence) {
  return sentence.split(' ');
}

console.log(splitSentence(sentence));

// 4. Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length.
// Example: [1, 2, 3] + [4, 5, 6] -> [5, 7, 9]
console.log('\nNumber 4');
console.log('Calculate each element in the same position from two arrays');

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

function calculateEachElement(array1, array2) {
  const result = [];

  for (let i = 0; i < array1.length; i++) {
    result.push(array1[i] + array2[i]);
  }

  return result;
}

console.log(calculateEachElement(array1, array2));

// 5. Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array.
console.log('\nNumber 5');
console.log('Add an element to the end of an array');

const array = [1, 2, 3, 4, 5];

function addElement(array, element) {
  if (array.includes(element)) {
    return array;
  } else {
    array.push(element);
    return array;
  }
}

console.log(addElement(array, 6));

// 6. Write a funtion to remove all odd numbers in an array and return a new array that contains even numbers only.
console.log('\nNumber 6');
console.log('Remove all odd numbers in an array');

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function removeOddNumbers(numbers) {
  return numbers.filter((number) => number % 2 === 0);
}

console.log(removeOddNumbers(numbers2));
