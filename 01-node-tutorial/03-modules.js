// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require("./04-names");
const sayHi = require("./05-utils");
const data = require("./06-alternative-flavor");
const add = require("./07-mind-grenade");
//note that all these variables above are objects because the module imports it as an object.
console.log(data.singlePerson);
add.addValues(10, 20);
sayHi("susan");
// sayHi(names.john);
// sayHi(names.peter);
