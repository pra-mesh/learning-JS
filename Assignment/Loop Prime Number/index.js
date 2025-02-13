//WAP to find user input is prime or not
const num = +prompt("Please enter your number?");
let isprime = true;
for(let i=2; i<= Math.sqrt(num); i++){
    if(num%i === 0){
        isprime =false;
        break;
    }
}
alert( `The given number ${num} is  a ${isprime ? "prime":"not a prime"}`);
isprime = true;