//Write a function that says welcome person
// if user name is provided else it says welcome user;
const user = prompt("Give me user");
console.log(user);
const welcome = (user = "user")=>{
return `Welcome ${user}`;
}
console.log(welcome());
alert(welcome(user));