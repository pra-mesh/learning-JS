//Logical Operator
/// AND
/// OR
/// NOT

/// AND
//// condition 1 && condition 2

const age =+prompt("Age");
const drivingLicense = confirm("Do you have driving license");

const isAllowed = age >= 18 && drivingLicense=== true ?"You are invited":"Sorry";
alert(isAllowed);

//OR
// condition 1 || condition 2

// ask user if they have nagarita or coter card?
// alert their egibility
const citizenship = confirm("Do you have citizenship card?");
const voterId = confirm("Do you have voter ID");
alert(
    citizenship  || voterId ? "You are eligible to vote."
    : "Please bring one of the document to vote"
)

// NOT 
//null, "", false, undefined
const user = prompt("What is your name?");
if(!user){
    alert("User name is missing");
}