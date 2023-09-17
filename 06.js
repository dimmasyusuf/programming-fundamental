/* EXERCISE */

/* 
1. Create a function to calculate array of student data
The object has this following properties:
Name -> String
Email -> String
Age -> Date
Score -> Number
Parameters: array of student
Return values:
Object with this following properties:
Score:
- Highest
- Lowest
- Average
Age:
- Highest
- Lowest
- Average
*/
console.log('\nNumber 1');
console.log('Calculate array of student data');

const students = [
  {
    name: 'John',
    email: 'john@mail.com',
    age: 20,
    score: 90,
  },
  {
    name: 'Peter',
    email: 'peter@mail.com',
    age: 21,
    score: 100,
  },
  {
    name: 'Mark',
    email: 'mark@mail.com',
    age: 19,
    score: 70,
  },
  {
    name: 'Maria',
    email: 'maria@mail.com',
    age: 22,
    score: 80,
  },
];

const calculate = (students) => {
  let score = [];
  let age = [];

  students.forEach((student) => {
    score.push(student.score);
    age.push(student.age);
  });

  const scoreResult = {
    highest: Math.max(...score),
    lowest: Math.min(...score),
    average: score.reduce((a, b) => a + b, 0) / score.length,
  };

  const ageResult = {
    highest: Math.max(...age),
    lowest: Math.min(...age),
    average: age.reduce((a, b) => a + b, 0) / age.length,
  };

  return { score: scoreResult, age: ageResult };
};

console.log(calculate(students));

/*
2. Create a program to create transaction
Product Class
Properties:
- Name
- Price
Transaction Class
Properties:
- Total
- Product:
- All Product Data
- Quantity
Add to cart method -> add product to transaction
Show total method -> show total current transaction
Checkout method -> finalize transaction, return transaction data
*/
console.log('\nNumber 2');
console.log('Create a program to create transaction');

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Transaction {
  constructor() {
    this.total = 0;
    this.products = [];
  }

  addToCart(product, quantity) {
    this.products.push({ product, quantity });
  }

  showTotal() {
    this.products.forEach((product) => {
      this.total += product.product.price * product.quantity;
    });

    return this.total;
  }

  checkout() {
    return this.products;
  }
}

const transaction = new Transaction();
transaction.addToCart(new Product('Milk', 10000), 1);
transaction.addToCart(new Product('Bread', 5000), 2);
console.log(transaction.showTotal());
console.log(transaction.checkout());
