/*
Primitive datatypes
String, Number, Null, Boolean, Undefined
- Defeault Datatype: String

Complex Datatypes
Object
 Object
 Array
 Date


 */

 const string = "Hello i am Pramesh Pradhan"; // Character, Word, sentence, paragraph
 const pi = 3.14; // check round up and math operation
//  const largeNum = BigInt(3.14); // this is error since BigInt only support 10^9 Integer
 let x;
 const d = null;
 const isMale = true;

//Type Conversion / Type Coercion

const value = "12";
console.log(typeof value)// type Checking
const actualNumber = Number(value);
console.log(actualNumber);
console.log(typeof actualNumber);
// Convert number to string
const num = 13;
const numericval = String(num);
console.log(numericval , num);


// Write a program that divides the two numbers asking user for the 2 number inputs and alert the users
const firstval = Number(prompt("Your first number?"));
const secondval = +(prompt("Your second number"));
alert(`Division is ${num1/num2}`);

//Unary Operator
let val =1;
val++;
console.log(val++) // console.log never perform operation 
val +=1;
console.log(val);
