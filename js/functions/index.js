// Function takes input, uses lgic and returns output


//syntax
//ES5
// function <fn-Name> (input){
//     //logic
//     //return
// }

//Write a function to add 2 numbers
// function declaration // intalization
function sum(num1,num2){
    const result = num1+num2;
    return result;
}

// Input data
const val1 = +prompt("Enter First number");
const val2 = + prompt("Enter Second number");
const ans = sum(val1,val2);
alert(ans);

//Write a function to calcute the area of circle
const radius = +prompt("Enter circle radius");

function area(rad){
    return Math.PI * Math.pow(+rad,2);
}
alert(`area of circle is ${area(radius)}`);