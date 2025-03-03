const events = require("events");

const eventEmitter = new events.EventEmitter();

/* eventEmitter.addListener() creates a event
eventEmitter.emit() // fires event;
ententEmitter.on() //listen event;
*/

//Create an event handler:
const eventHandler = () => {
  console.log("I am Screaming");
};

const eventShouting = () => {
  console.log("I am shouting");
};

const emailHandler = () => {
  console.log("I am Email");
};
eventEmitter.addListener("scream", eventHandler);
eventEmitter.addListener("shout", eventShouting);
eventEmitter.addListener("sendEmail", emailHandler);

//Fire
//eventEmitter.emit("scream");

module.exports = { eventEmitter };
