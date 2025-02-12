// If-Else
const gender = prompt("Gender");
if (gender === "m"){
    console.log("Male");
}
else {
    console.log("Female");
}

//Switch
const day = +prompt("Enter day from 1 to 7");
switch(day)
{
    case 1:
        alert("Sunday");
        break;
    case 2:
        alert("Monday");
        break;
    default:
        alert("Invalid Number")
}

/* Write a js program that handles the grading
logic 
80% and above: distinction
70% -79.99%: first division
60% - 69.99% second division
below 60%: fail
*/

// ES6 Ternary Operator
gender === "m" ? alert("Male") : alert("Female");
