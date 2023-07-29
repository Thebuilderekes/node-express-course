const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

//writeFileSync function is used to create a file and write values into it. It can take up to 3 parameters which are the file path, the value and the flag to indicate that the file will have the value appended to it rather than overwritign what is in the file.
writeFileSync(
	"./content/testing-out.txt",
	`Here is the result of testing out writing`,
	{ flag: "a" } // this object will make sure that value is appended to the file and not overwritten
);

writeFileSync("./content/testing-out.txt", `${first}`, { flag: "a" });
writeFileSync("./content/testing-out.txt", ` ${second}`, { flag: "a" });
