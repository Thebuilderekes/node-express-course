// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require("events");

const customEmitter = new EventEmitter();

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

customEmitter.on("response", (name, id) => {
	console.log(`data recieved user ${name} with id:${id}`);
});

customEmitter.on("response", () => {
	console.log("some other logic here");
});

// the values in the emit method are passed to the parameters in the on method
customEmitter.emit("response", "john", 34);

// note that the string values in the the on and emit methods of the customEmitter need to be the same.

//the order of the emit matters
