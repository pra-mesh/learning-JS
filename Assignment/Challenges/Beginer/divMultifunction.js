//Write a JavaScript program to calculate multiplication and division of two numbers.(use same function to achieve this)
function mathOperation(val1,val2){
    let multiplication = val1*val2;
    let division =val1/val2;
    return [multiplication,division];
}
let multidiv = mathOperation(4,2);
console.log(`Division ${multidiv[1]}. Multiplication ${multidiv[0]}`);