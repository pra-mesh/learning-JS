/* Write a js program that handles the grading
logic 
80% and above: distinction
70% -79.99%: first division
60% - 69.99% second division
below 60%: fail
*/
const markobtain = +prompt("Enter your Marks obtained!")
switch(markobtain){
    case markobtain<60:
        alert("You have failed");
        break;
    default:
        alert("Invalid marks entered");
}