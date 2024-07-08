class Person{
  constructor(name){
    this.name=name;
    this.species="homo sapien";
  }
  eat(){
    console.log("eating");
  }
}

class Engineer extends Person{
  constructor(name){
    super();  // super keyword use krna hota hai parent class ke constructor ko override krne ke liye. aur usme argument pass krni hoti hai
    // console.log(name);
  }
  work(){
    super.eat(); //super keyword is important for accessing the method in the parent class into the child class.
    console.log("working");
  }
}

let engineerObj=new Engineer("samad")