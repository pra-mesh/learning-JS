const val = +prompt("Enter positive number");
if(val<0) {
alert("Invalid Number");
}
else{
    if(val%3===0 || val%7 === 0){
        alert(`The ${val} is multiple of 3 or 7`);
    }
    else {
        alert(`The ${val} is not multiple of 3 or 7`);
    }
}