const d = new Date(); //get full date and time
console.log(d);
const date = String(d.getDate()).padStart(2,"0"); // get day part
console.log(date);
const month = String(d.getMonth()+1).padStart(2,"0"); //d.getmonth give month of the date varaible represented by 0-11 number
//pad stert add s the vallue to the start of the data if value if length is less than pad value
const year = d.getFullYear();
console.log(`Full date: ${year}/${month}/${date}`);
