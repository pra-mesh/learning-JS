// Write a js program to ask user their drink order
//(tea, coffee)
// alert => You have ordered ....

let drink = +prompt("What would you like to drink? \n \
1. Tea \n 2. coffee \n 3. milk \n 4. coke \n 5. water");
const orderDrink = `You have ordered  ${drink ===1 ? "Tea": drink === 2 ?"Coffee" : drink === 3 ? "Milk" :
drink === 4 ? "Coke" : "Water"}`;
alert(orderDrink);
