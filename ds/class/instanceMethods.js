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
  // fullName, updateDays, and addScore are INSTANCE methods
  // this means that instances of this class have access to it

  static calcAvg() {
    return 'Calculating Average';
  }
  // calcAvg is a CLASS method
  // this means that ONLY the class has access to this method, NOT the instances
}

var brian = new Student('Brian', 'Kim');

console.log(brian.updateDays());
console.log(brian.updateDays());
console.log(brian.updateDays());

// console.log(brian.calcAvg()); // TypeError:
console.log(Student.calcAvg());

