// Block-Scoped Variables
let x = 10;
const y = 20;
console.log(`let x = ${x}, const y = ${y}`);

//  Arrow Functions
const add = (a, b) => a + b;
console.log(`Arrow function add(2, 3): ${add(2, 3)}`);

//  Template Literals
let name = 'John';
let greeting = `Hello, ${name}!`;
console.log(greeting);

//  Destructuring Assignment
const [a, b] = [1, 2];
const { name: personName, age } = { name: 'John', age: 30 };
console.log(`Destructuring: a = ${a}, b = ${b}, name = ${personName}, age = ${age}`);

//  Default Parameters
function multiply(a, b = 1) {
    return a * b;
}
console.log(`Default parameters multiply(5): ${multiply(5)}`);

//  Spread Operators
function sum(...args) {
    return args.reduce((acc, val) => acc + val, 0);
}
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
console.log(`Spread operator newArr: ${newArr}`);


// Object.entries and Object.values
const obj = { a: 1, b: 2 };
console.log(`Object.entries: ${JSON.stringify(Object.entries(obj))}`);
console.log(`Object.values: ${Object.values(obj)}`);
console.log(`Object.keys: ${Object.keys(obj)}`);


// Optional Chaining
const user = { address: { city: 'New York' } };
console.log(`Optional Chaining: ${user?.address?.city}`);
console.log(`Optional Chaining with undefined: ${user?.contact?.phone}`);


// Nullish Coalescing Operator
let foo =  null ?? 'default string';
console.log(`Nullish Coalescing Operator: ${foo}`);