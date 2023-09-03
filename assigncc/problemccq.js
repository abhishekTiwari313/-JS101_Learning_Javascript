//Write a function called "addNumber" that take twonumber as argument and return their sum . call the function before it is declare to demonstrate hoisting.
const result = addNumber(5, 7);
console.log(result);
function addNumber(a,b){
return a+b;
}


//problem2.
//write a function called "multiplyNumbers" that take two number as argument and return their product. use function expression to define the function  and call the function before it is declared to demonstrate variable hoisting.


const multiplyNumbers = function(a,b){
     return a*b;
 } 
 const mul = multiplyNumbers(3,4);
 console.log(mul)

 //problem3
 //Write a function that takes two number as an argument and return their sum . Declare a variable inside the function using the var keyword and log  iots value to the console before it is assigned a value to demonstrate variable hoisting.
 function sum(){
    var a = 10;
    var b = 3;
    return a + b;
 }
 let add = sum(10,3);
 console.log(add)

 //Problem4
 // Declare the variables , one usin let ,one using var and one usin const, all inside a block scope. assign them values and log their values to the console before and after they are declare to demonstrate variable hoisting.
 // Block scope
{
    console.log("Before declaration:");
    console.log("letVar:", letVar); // undefined
    console.log("varVar:", varVar); // undefined
    console.log("constVar:", constVar); // ReferenceError: constVar is not defined
  
    let letVar = "I am letVar";
    var varVar = "I am varVar";
    const constVar = "I am constVar";
  
    console.log("After declaration:");
    console.log("letVar:", letVar); // "I am letVar"
    console.log("varVar:", varVar); // "I am varVar"
    console.log("constVar:", constVar); // "I am constVar"
  }
  
  // Outside the block scope
  console.log("Outside the block scope:");
  console.log("letVar:", letVar); // ReferenceError: letVar is not defined
  console.log("varVar:", varVar); // "I am varVar"
  console.log("constVar:", constVar); // ReferenceError: constVar is not defined

  //problem5
  //Declare a variable using the let inside a block scope  and attempt to log its value to console before it is assigned a value to demonstrate the temporal dead zone.
  // Block scope
{
    console.log("Before assignment:");
    console.log(letVar); // ReferenceError: Cannot access 'letVar' before initialization
  
    let letVar = "I am letVar"; // Variable assignment
  
    console.log("After assignment:");
    console.log(letVar); // "I am letVar"
  }