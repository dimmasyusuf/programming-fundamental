/* EXERCISE */

// 1. Create a function to check if two objects are equal.
console.log('\nNumber 1');
console.log('Check if two objects are equal');

const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 3 };

const isEqual = (obj1, obj2) => {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  } else {
    for (let objKey of obj1Keys) {
      if (obj1[objKey] !== obj2[objKey]) {
        return false;
      }
    }
    return true;
  }
};

console.log('obj1: ', obj1);
console.log('obj2: ', obj2);
console.log('the result is: ', isEqual(obj1, obj2));

/*
2. Create a function to get the intersection of two objects.
Example:
Input: { a: 1, b: 2 } & { a: 1, c: 3 }
Output: { a: 1 }
*/
console.log('\nNumber 2');
console.log('Get the intersection of two objects');

const obj3 = { a: 1, b: 2 };
const obj4 = { a: 1, c: 3 };

const getIntersection = (obj3, obj4) => {
  const obj3Keys = Object.keys(obj3);
  const obj4Keys = Object.keys(obj4);
  const result = {};

  for (let obj3Key of obj3Keys) {
    for (let obj4Key of obj4Keys) {
      if (obj3Key === obj4Key) {
        result[obj3Key] = obj3[obj3Key];
      }
    }
  }
  return result;
};

console.log('obj3: ', obj3);
console.log('obj4: ', obj4);
console.log('the result is: ', getIntersection(obj3, obj4));

/*
3. Create a function to merge two array of student data and remove duplicate data.
Student data: name & email
Example:
Array1: [{ name: 'Student 1', email: 'student1@mail' }, { name: 'Student 2', email: 'student2@mail' }]
Array2: [{ name: 'Student 1', email: 'student1@mail' }, { name: 'Student 3', email: 'student3@mail' }]
Result:
ArrayResult: [{ name: 'Student 1', email: 'student1@mail' }, { name: 'Student 2', email: 'student2@mail' }, { name: 'Student 3', email: 'student3@mail' }]
*/
console.log('\nNumber 3');
console.log('Merge two array of student data and remove duplicate data');

const array1 = [
  { name: 'Student 1', email: 'student1@mail' },
  { name: 'Student 2', email: 'student2@mail' },
];
const array2 = [
  { name: 'Student 1', email: 'student1@mail' },
  { name: 'Student 3', email: 'student3@mail' },
];

const mergeArray = (array1, array2) => {
  const result = [...array1, ...array2];
  const resultKeys = Object.keys(result[0]);
  const unique = [];

  for (let i = 0; i < result.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < unique.length; j++) {
      if (result[i][resultKeys[0]] === unique[j][resultKeys[0]]) {
        isDuplicate = true;
      }
    }
    if (!isDuplicate) {
      unique.push(result[i]);
    }
  }
  return unique;
};

console.log('array1: ', array1);
console.log('array2: ', array2);
console.log('the result is: ', mergeArray(array1, array2));

/*
4. Create a function that can accept input as an array of objects and switch all values into property and property into value.
Example:
Input: [{ name: 'John', age: 20 }]
Output: [{ John: 'name', 20: 'age' }]
*/
console.log('\nNumber 4');
console.log('Switch all values into property and property into value');

const array3 = [{ name: 'John', age: 20 }];

const switchValue = (array3) => {
  const result = [];
  const array3Keys = Object.keys(array3[0]);

  for (let i = 0; i < array3Keys.length; i++) {
    const obj = {};
    obj[array3[0][array3Keys[i]]] = array3Keys[i];
    result.push(obj);
  }
  return result;
};

console.log('array3: ', array3);
console.log('the result is: ', switchValue(array3));

// 5. Create a function to find a factorial number using recursion.
console.log('\nNumber 5');
console.log('Find a factorial number using recursion');

const number = 5;

const factorial = (number) => {
  if (number === 1) {
    return 1;
  }
  return number * factorial(number - 1);
};

console.log('number: ', number);
console.log('the result is: ', factorial(number));
