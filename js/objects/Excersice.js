/*
a. Find the value of the price property and if it is greater than 100,
discount it by 10%. If that's not the case, discount it by 7%. 
Update the object with the new property discount and the corresponding
value (7% or 10%) and the new price

b. Use given object and loop through its properties and if it has property
"discount" print  "Already discounted by ..." and add the value how much was the discount/
*/
let product = {
    name: "headphones",
    price:120,
    discount:10
}
let product2 = {
    name: "headphones",
    price:120
}
let productPrice = (item) => {
product.price = item.price>100 ? Number(item.price - item.price*0.1).toFixed(2) :Number(item.price - item.price*0.07).toFixed(2);
product.discount =  item.price>100 ? "10" : "7";
console.log(item);
return product;
}

//console.log(productPrice(product));
let discountedPrice = (item) =>{
   
    Object.hasOwn(item,"discount")?(console.log(`Already discounted by ${item.discount}`) ,
    item.disountedBy  = Number((100*item.price/(100-item.discount))-item.price).toFixed(2))
    : (item=productPrice(item),discountedPrice(item));
    return item;
}

let discountedPriceWithFor = (item) =>{
    let isDicounted =false;
    for(const [key, value] of Object.entries(item)){
        if(key === "discount")
            isDicounted = true;
    }
    isDicounted ? (console.log(`Already discounted by ${item.discount}`) ,
    item.disountedBy  = Number((100*item.price/(100-item.discount))-item.price).toFixed(2))
    : (item=productPrice(item), discountedPriceWithFor(item))
    return item;
}
console.log(discountedPriceWithFor(product2))
//console.log(Object.hasOwn(product,"discount"))