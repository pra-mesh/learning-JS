const {eventEmitter} = require("./scream");

eventEmitter.emit("shout");
eventEmitter.emit("scream");
eventEmitter.emit("sendEmail");