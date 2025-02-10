/* Write a js program that handles the grading
logic 
80% and above: distinction
70% -79.99%: first division
60% - 69.99% second division
below 60%: fail
*/
const markobtain = +prompt("Enter your Marks obtained!")
if(markobtain<0){
    alert("Invalid marks entered");
}
else
{
switch(true){
    case (markobtain<60):
        alert("You have failed");
        break;
    case (markobtain<70):
        alert("You have second division");
        break;
    case (markobtain<80):
        alert("You have first division");
        break
    case (markobtain<=100):
        alert("You have distinction division ");
        break;100
    default:
        alert("Invalid marks entered");
}
}

switch(true){
    case (markobtain>=80 && markobtain<=100):
        alert("You have distinction division ");
       
        break;
    case (markobtain<80 && markobtain>=70):
        alert("You have first division");
        break;
    case (markobtain<70 && markobtain>=60):
        alert("You have second division");
        break
    case (markobtain< 60 && markobtain>=0):
        alert("You have failed");
        break;
    default:
        alert("Invalid marks entered");
}