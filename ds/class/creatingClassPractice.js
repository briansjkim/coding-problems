class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.days = 0;
    this.scores = [];
  }

  fullName() {
    return 'Hello, my name is ' + this.firstName + ' ' + this.lastName;
  }
  updateDays() {
    this.days++;
    return `Hello, my name is ${this.firstName} ${this.lastName} and I've been here for ${this.days} days`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAvg() {
    let sum = this.scores.reduce(function(a, b) { return a + b});
    return sum / this.scores.length;
  }
}

var brian = new Student('Brian', 'Kim');
var hr = new Student('Hack', 'Reactor');

// console.log('Hello, my name is ' + brian.firstName + ' ' + brian.lastName);
// console.log('Hello, my name is ' + hr.firstName + ' ' + hr.lastName);

// console.log(brian.fullName());
// console.log(hr.fullName());

// console.log(brian.updateDays());
// console.log(brian.updateDays());
// console.log(hr.updateDays());

// brian.addScore(5);
// brian.addScore(15);
// brian.addScore(70);
// brian.addScore(10);
// console.log(brian.calculateAvg());
