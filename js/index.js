console.log("hello");


//ES5
var person ="Pramesh" //variable declare
person ="Shyam" // variable can be initialize and overriden
console.log(person)

//ES6
//let, const

const person2="Raktim"; // no override
console.log(person2);

let school="abc"; // allows overriding
school="xyz";
console.log(school);


// Interaction
alert("Hello world")
const user = prompt("What is your name?");
console.log(user);

const isstudent = confirm("Are you a studend?");
console.log(isstudent);


//WAP a program that asks user fro their name and alerts their name with greeting

const username = prompt("What is your user name?");
//1 Using variable assignment
let greeter = "Hello " +username;
alert(greeter);
greeter = greeter.replace("Hello ", "Learn more about string method");
alert(greeter); 
//2 Using literal
alert(`Welcome back, ${username}`);
