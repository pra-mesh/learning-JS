//Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.
const num1 = +prompt("Enter first value:");
const num2 = +prompt("Enter second value:");
if(num1===num2)
{
    alert(`Sum of ${num1} is ${num1*3}`);
}
else{
    alert(`Sum of values is ${num1+num2}`);
}