/* EXERCISE */

/*
1. Create a code that could handle a queue on food ordering process, with this specification:
    - Create a class to handle queuing process in a file.
    - Create file to handle and execute queue class.
    - Each queue process takes a random interval from 1-10 seconds.
    - Clue : Use while & promise

2. Exercise - Output
    - Add orders to queue
    - [Log] Print all data in queue
    - Run process -> process queue based on random interval
    - [Log] Queue 1 Done in XXX minutes
    - [Log] Queue 2 Done in XXX minutes
    - [Log] Queue 3 Done in XXX minutes
    - [Log] Queue 4 Done in XXX minutes
*/

console.log('\nNumber 1 & 2');
console.log('Food Ordering Process');

class Queue {
  constructor() {
    this.queue = [];
    this.foods = [];
  }

  addOrder(order) {
    this.queue.push(order);
  }

  processQueue() {
    let i = 0;
    while (this.queue.length > 0) {
      const order = this.queue.shift();
      this.foods.push(order);
      const random = Math.floor(Math.random() * 10) + 1;
      setTimeout(() => {
        console.log(`${order} done in ${random} minutes`);
        i++;
      }, random * 1000);
    }
  }

  printQueue() {
    console.log(this.queue);
  }
}

const queue = new Queue();
queue.addOrder('Nasi Goreng');
queue.addOrder('Mie Goreng');
queue.addOrder('Nasi Uduk');
queue.addOrder('Nasi Kuning');
queue.printQueue();
queue.processQueue();
