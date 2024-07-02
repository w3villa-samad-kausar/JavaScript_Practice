// Classes
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
    greet() {
        console.log(`Hello, ${this.name} and my age is ${this.age}`);
    }
}
const person = new Person('Alice', 50);
person.greet();
