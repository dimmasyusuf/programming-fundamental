/* EXERCISE */

/*
1. Exercise - Employee Salary

Specifications:
- Create a program to calculate total salary based on employee type
- There are two types of employee : full-time & part-time
- Salary for full-time employee :
IDR 100.000 / hour
IDR 75.000 / hour, if the number of working hours per day is more than 6 hours
- Salary for part-time employee :
IDR 50.000 / hour
IDR 30.000 / hour, if the number of working hours per day is more than 6 hours

Requirements :
- Create an Employee as a parent class
- Create a FulltimeEmployee and ParttimeEmployee as a child of Employee class:
Create a method in that class to add working hour per day
Create a method in that class to calculate total salary
- Use inheritance concept
*/

console.log('\nNumber 1');
console.log('Employee Salary');

class Employee {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

class FulltimeEmployee extends Employee {
  constructor(name, type) {
    super(name, type);
    this.workingHour = 0;
  }

  addWorkingHour(hour) {
    this.workingHour += hour;
  }

  calculateSalary() {
    if (this.workingHour > 6) {
      return this.workingHour * 75000;
    } else {
      return this.workingHour * 100000;
    }
  }
}

class ParttimeEmployee extends Employee {
  constructor(name, type) {
    super(name, type);
    this.workingHour = 0;
  }

  addWorkingHour(hour) {
    this.workingHour += hour;
  }

  calculateSalary() {
    if (this.workingHour > 6) {
      return this.workingHour * 30000;
    } else {
      return this.workingHour * 50000;
    }
  }
}

const fulltimeEmployee = new FulltimeEmployee('John', 'Fulltime');
fulltimeEmployee.addWorkingHour(5);
console.log('\nName : ' + fulltimeEmployee.name);
console.log('Type : ' + fulltimeEmployee.type);
console.log('Fulltime Employee Salary :' + fulltimeEmployee.calculateSalary());

const parttimeEmployee = new ParttimeEmployee('Doe', 'Parttime');
parttimeEmployee.addWorkingHour(5);
console.log('\nName : ' + parttimeEmployee.name);
console.log('Type : ' + parttimeEmployee.type);
console.log('Parttime Employee Salary :' + parttimeEmployee.calculateSalary());

/*
2. Exercise - Shooting Game

Specifications :
- Create a shooting game between two player
- Each player has three properties : name, health and power
- Each player will take turns to shooting
- Before shooting, players get a chance to get random items (health +10 or power +10)
- The game will continue until one of the players has health < 0

Requirements :
- Create ShootingGame & Player class
- ShootingGame class :
    constructor(player1, player2) → player objects as a parameter
    getRandomItem() → return { health: 0 or 10, power: 0 or 10 }
    start() → start shooting games
- Player class :
    Property → name, health (default 100), power (default 10)
    hit(power) → subtract player health
    useItem(item) → apply item to player (increase health or power, based on result from getRandomItem())
    showStatus() → show player status (ex : “Player A (Health => 100, Power => 10) ”)
- ShootingGame start() function flow :
    In every turn :
      Show each player status before shooting
      Get random item for each player before shooting
      Show each player status after shooting
    Show winner name
*/

console.log('\nNumber 2');
console.log('Shooting Game');

class ShootingGame {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  getRandomItem() {
    const randomHealth = Math.floor(Math.random() * 2) * 10;
    const randomPower = Math.floor(Math.random() * 2) * 10;
    return { health: randomHealth, power: randomPower };
  }

  start() {
    let turn = 0;
    while (this.player1.health > 0 && this.player2.health > 0) {
      console.log('\nTurn ' + (turn + 1));
      console.log('Player 1');
      this.player1.showStatus();
      console.log('Player 2');
      this.player2.showStatus();

      const item1 = this.getRandomItem();
      const item2 = this.getRandomItem();
      this.player1.useItem(item1);
      this.player2.useItem(item2);

      this.player1.hit(this.player2.power);
      this.player2.hit(this.player1.power);

      turn++;
    }

    if (this.player1.health <= 0) {
      console.log('\nPlayer 2 Win');
    } else {
      console.log('\nPlayer 1 Win');
    }
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.power = 10;
  }

  hit(power) {
    this.health -= power;
  }

  useItem(item) {
    this.health += item.health;
    this.power += item.power;
  }

  showStatus() {
    console.log(
      'Player ' +
        this.name +
        ' (Health => ' +
        this.health +
        ', Power => ' +
        this.power +
        ')'
    );
  }
}

const player1 = new Player('A');
const player2 = new Player('B');
const shootingGame = new ShootingGame(player1, player2);
shootingGame.start();
