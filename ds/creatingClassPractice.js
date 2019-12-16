class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName() {
    return 'Hello, my name is ' + this.firstName + ' ' + this.lastName;
  }
}

var brian = new Student('Brian', 'Kim');
var hr = new Student('Hack', 'Reactor');

// console.log('Hello, my name is ' + brian.firstName + ' ' + brian.lastName);
// console.log('Hello, my name is ' + hr.firstName + ' ' + hr.lastName);

console.log(brian.fullName());
console.log(hr.fullName());
