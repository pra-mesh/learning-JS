let publicvar = "test1";

const showName=()=>{
    publicvar = "test2"
    return;
    function publicvar() {}
}
showName();
console.log(publicvar);