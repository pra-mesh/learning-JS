//hoisting concept
console.log(hello("shayam"));
function hello(a) {
    return `hello ${a}`;
}
console.log(hello("ram"));

//The arrow function or es6 function unlike es5 does not follow hoisting
console.log(es6("ram"));
const es6 = (a) =>{
    return `hello ${a}`;
}