const name="samad"

const repoCount=4
// this is called string interpolation-
// this is the moern way of writing the multiple outputs
// console.log(`Hello my name is ${name.toUpperCase()} and i have ${repoCount} repos on my github`) ; 

const gameName= new String("the_potato_tummy")
// console.log(gameName.length);

// console.log(gameName.charAt(3));

// console.log(gameName.indexOf("o"));

const newString= gameName.substring(0,4)

console.log(newString);
console.log(gameName.length);

const newStringTwo= gameName.slice(-10,-1);

console.log(newStringTwo);

const arrayFromString=gameName.split("_");
console.log(arrayFromString);