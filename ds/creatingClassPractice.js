class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

var brian = new Student('Brian', 'Kim');

console.log('Hello, my name is ' + brian.firstName + ' ' + brian.lastName);
