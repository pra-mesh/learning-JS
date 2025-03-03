const events = require("events");

const eventEmitter = new events.EventEmitter();

/* eventEmitter.addListener() creates a event
eventEmitter.emit() // fires event;
ententEmitter.on() //listen event;
*/

//Create an event handler:
const eventHandler = () => {
    console.log("I am Screaming");
}

eventEmitter.addListener("scream",eventHandler);

//Fire
eventEmitter.emit("scream");
