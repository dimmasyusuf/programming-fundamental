/* EXERCISE */

// 1. Write a code to find area of rectangle.
const length = 11;
const width = 12;
const rectangleArea = length * width;
console.log('\nNumber 1');
console.log(`Rectangle Area: ${rectangleArea}`);

// 2. Write a code to find perimeter of rectangle.
const perimeterRectangle = 2 * (length + width);
console.log('\nNumber 2');
console.log(`Rectangle Perimeter: ${perimeterRectangle}`);

// 3. Write a code to find diameter, circumference and area of a circle.
const phi = Math.floor(Math.PI);
const radius = 7;

console.log('\nNumber 3');

const circleDiameter = 2 * radius;
console.log(`Circle Diameter: ${circleDiameter}`);

const circleCircumference = 2 * phi * radius;
console.log(`Circle Circumference: ${circleCircumference}`);

const circleArea = phi * radius ** 2;
console.log(`Circle Area: ${circleArea}`);

// 4. Write a code to find angles of triangle if two angles are given.
const firstAngle = 30;
const secondAngle = 60;
const findedAngle = 180 - (firstAngle + secondAngle);

console.log('\nNumber 4');
console.log(`Finded Angle: ${findedAngle}`);

// 5. Write a code to get difference between dates in days.
const firstDate = new Date('2023-08-17');
const secondDate = new Date('2023-07-25');

const diffDate = (firstDate - secondDate) / (24 * 60 * 60 * 1000);
console.log('\nNumber 5');
console.log(`Difference Between Dates: ${diffDate} days`);

// 6. Write a code to convert days to years, months, and day.
const days = 500;
const years = Math.floor(days / 365);
const months = Math.floor((days % 365) / 30);
const weeks = Math.floor(((days % 365) % 30) / 7);
const day = Math.floor(((days % 365) % 30) % 7);

console.log('\nNumber 6');
console.log(
  `${days} Days = ${years} years, ${months} months, ${weeks} weeks, ${day} day.`
);
