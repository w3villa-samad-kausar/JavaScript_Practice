// Hoisting in JavaScript

// Hoisting JavaScript ka ek default behavior hai jisme variables aur functions ko unke define hone se pehle memory me allocate kar diya jata hai. JavaScript interpreter code ko execute karne se pehle pura code scan karta hai aur declarations ko memory me place kar leta hai.

// Variables hoisting
// JavaScript me variables ko hoist kiya jata hai, par unhe undefined value assign ki jati hai jab tak unhe explicitly initialize nahi kiya jata.

console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5
// Upar wale code me, var x declaration ko hoist kiya gaya hai, par initialization x = 5 wahi pe rahta hai jahan pe wo likha gaya hai. Isliye pehle undefined print hota hai.

// Functions hoisting
// Function declarations bhi hoist ki jati hain. Par functions ke case me pura function definition hoist kiya jata hai.

hoistedFunction(); // Output: "This function is hoisted"

function hoistedFunction() {
  console.log("This function is hoisted");
}
// Upar wale code me, hoistedFunction ko pehle hi call kiya gaya hai jahan pe wo declare hua hai, phir bhi wo sahi se execute hoti hai.

// Let aur Const hoisting
// let aur const bhi hoist hote hain, par unhe unki declaration se pehle access nahi kiya ja sakta. Ye "Temporal Dead Zone" kehlata hai.

console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;
console.log(y); // Output: 10
// Upar wale code me, let y ko hoist kiya gaya hai, par initialize hone se pehle usko access karne ki koshish ki gayi to ReferenceError aata hai.

// Hindi me note:
// Hoisting JavaScript ka ek important concept hai jisme variables aur functions ko unke define hone se pehle hi memory me allocate kar diya jata hai. Variables ko undefined value assign ki jati hai jab tak unhe initialize nahi kiya jata. Functions ke case me, pura function definition hoist kiya jata hai. let aur const bhi hoist hote hain, par unhe unki declaration se pehle access nahi kiya ja sakta.

// Hoisting ke karan kabhi kabhi unexpected behavior ho sakta hai, isliye code likhte waqt iska dhyan rakhna chahiye.


// Execution Context
// Execution Context JavaScript ka ek concept hai jo batata hai ki code kis context me execute ho raha hai. Jab bhi koi code execute hota hai, ek execution context create hota hai. Har execution context me do phases hote hain:

// Creation Phase:

// Variable Object (VO) create hota hai.
// Scope Chain set hota hai.
// this binding hota hai.
// Execution Phase:

// Code line by line execute hota hai.
// Variable assignments aur function invocations perform hote hain.
// Hindi me note:
// Execution context ek aisa environment hai jahan JavaScript code execute hota hai. Har execution context ke do phases hote hain: creation phase aur execution phase. Creation phase me variables aur functions memory me allocate hote hain, aur execution phase me code execute hota hai.

// Global Scope
// Global Scope JavaScript me sabse outermost scope hota hai. Global scope me declare kiye gaye variables aur functions pure program me kahin bhi accessible hote hain.

var globalVar = "I am a global variable";

function globalFunction() {
  console.log("I am a global function");
}

console.log(globalVar); // Output: I am a global variable
globalFunction(); // Output: I am a global function
// Hindi me note:
// Global scope sabse outermost scope hota hai jahan pe variables aur functions declare hote hain. Global scope ke variables aur functions pure program me kahin bhi accessible hote hain.

// Function Scope
// Function Scope me variables aur functions sirf us function ke andar hi accessible hote hain jahan pe wo declare hote hain. Function scope ko local scope bhi kaha jata hai.

function localScopeExample() {
  var localVar = "I am a local variable";

  function innerFunction() {
    console.log(localVar); // Output: I am a local variable
  }

  innerFunction();
}

localScopeExample();
console.log(localVar); // ReferenceError: localVar is not defined
// Hindi me note:
// Function scope ek aisa scope hota hai jahan variables aur functions sirf usi function ke andar accessible hote hain jahan wo declare hue hain. Function scope ke variables aur functions bahar access nahi kiye ja sakte.

// Block Scope (ES6)
// Block Scope me variables aur functions {} braces ke andar confined hote hain. Block scope ko let aur const ke sath introduce kiya gaya hai.

{
  let blockScopedVar = "I am block scoped";
  console.log(blockScopedVar); // Output: I am block scoped
}

console.log(blockScopedVar); // ReferenceError: blockScopedVar is not defined
// Hindi me note:
// Block scope {} braces ke andar variables aur functions ko confined karta hai. let aur const ko block scope ke sath introduce kiya gaya hai. Block scope ke variables aur functions bahar access nahi kiye ja sakte.

// In sab concepts ko samajhkar, JavaScript code ko aur effectively likha ja sakta hai aur unexpected behaviors ko avoid kiya ja sakta hai.


//function statement or function declaration: jab function ko kisi naam ke saath declare krte hai

a();// jaise yaha pe a(); call krenge to kaam krega
//b(); //par b(); nhi krega kyunki js b ko undeclared baatega

function a (){
  console.log('hello');
  
}

// function expression : jab function ko kisi variable me store kiya jae

let b= function(){
  console.log('hello again');
  
}

// ek difference aur hai function expression aur statement me ki function expression hoisting support nhi krta, yani ki function ke declare hone se pehle
// uske use nhi kr skte hai, lekin function statement hoisting support krta

// anonymous function: wo jinka koi naam nhi hota, jaise upar b me jo function defined hai uska koi naam nhi hai. standalone anonymous function nhi ban skta js me
// function expression me anonymous function use kr skte hai, ya jaha bhi function as a value pass krni hoti hai.

// named function expression : niche ek named function expression hai. ye tab banta jab function expression me function ka bhi naam de dete humlog
// lekin there is a catch.

let c= function xyz(){
  console.log('hello 3');
  
}

c(); //yaha pe call ho jaega function .
xyz(); //yaha pe error de dega function .ReferenceError: xyz is not defined ye error aega kyunki xyz to function ke scope ke andar defined hai usko baar kaise access kr skte
// agar yahi function aise likha hota
let d= function xyz(){
  console.log(xyz);
  
}
// ab ye kaam krega.

// first class functions in javascript
// In JavaScript, first-class functions are functions that are treated like any other variable. This means you can:

// Assign a function to a variable:

const sayHello = function() {
  return "Hello!";
};
// Pass a function as an argument to another function:

function greet(func) {
  console.log(func());
}

greet(sayHello); // Outputs: Hello!

// Return a function from another function:

function createGreeting() {
  return function() {
    return "Hi!";
  };
}

const greeting = createGreeting();
console.log(greeting()); // Outputs: Hi!

// Store functions in data structures:

const functionsArray = [
  function() { return "First function"; },
  function() { return "Second function"; }
];

console.log(functionsArray[0]()); // Outputs: First function

// These capabilities make functions powerful tools in JavaScript, enabling techniques such as higher-order functions, callbacks, and function composition.







