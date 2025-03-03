const personA = [
  { name: "iphone", price: 100 },
  { name: "earpds", price: 50 },
];
const personB = [
  { name: "baby formula", price: 500 },
  { name: "diaper", price: 200 },
];

//send data of each person from event using emit with data to claculate tax 13% using event

//create an event handler to calculate tax

const events = require("events");

const taxCalc = new events.EventEmitter();

const calcTax = (person, taxpercent) => {
  let total = person.reduce((acc, item) => acc + item.price, 0);
  console.log(`Tax of : ${total * taxpercent}`);
};

//taxCalc.addListener("personA", () => calcTax(personA));
//taxCalc.addListener("personB", () => calcTax(personB));

taxCalc.on("calTax", (data, taxpercent) => {
  calcTax(data, taxpercent);
});

taxCalc.emit("calTax", personA, 0.13);
taxCalc.emit("calTax", personB, 0.15);
