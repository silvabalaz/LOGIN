class Person {
   constructor(name,age){
        this.name = name;
        this.age = age;
   
   }

   getPersonStats() {
    return `
      Name: ${this.name}
      Age: ${this.age}
    `;
  }
}

module.exports = Person;

