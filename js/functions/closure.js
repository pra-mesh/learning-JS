const counter = () => {
    let count =1;
    return ()=>{
    return count++;    
    };
}
const counterA = counter();
const counterB = counter();

console.log(counterA());
console.log(counterA());
console.log(counterA());

console.log(counterB());
console.log(counterB());