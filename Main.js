var msg = 'Hello World';
console.log(msg);

const Person = require('./person');
var person1 = new Person('John',30);
console.log(person1);
console.log(person1.getPersonStats());
