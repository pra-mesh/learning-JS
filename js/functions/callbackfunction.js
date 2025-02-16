const print = (data) => {
    console.log(`Hello ${data}`);
    return;
} 

const main  = (user = "user", callBackFn) =>{
    const information = `Mr ${user}`;
    return callBackFn(information);
}
main("Pramesh", print);