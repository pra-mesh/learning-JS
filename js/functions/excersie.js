// Write a js function that calculates the volume of cuboid v=l*b*h
const volume = ({length=0, breadth = 0, height =0}) => length * breadth * height;
console.log(volume({length:10, height:5}));

// Write a js closure function that mimcs the bank account opening and deposit

const Account = () => {
    let balance  =0;
    return (deposit) =>{
        return balance += deposit;
    }
}
const accountHolder1 = Account();
const accountHolder2 = Account();

console.log(accountHolder1(100));
console.log(accountHolder1(200));
console.log(accountHolder2(500));

// Write a js callback function to calculate the vat of the product

const tax = ({productPrice=0, taxrate=0}) => productPrice*taxrate/100;

const productTax = ({taxrate = 0,productPrice=0,callBack}) => callBack({productPrice:productPrice, taxrate:taxrate});
console.log(productTax({productPrice:100,callBack:tax, taxrate:12}));


