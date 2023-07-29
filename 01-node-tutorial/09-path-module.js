const path = require("path");

console.log(path.sep);

const filePath = path.join("/content/", "subfolder", "test.txt");
console.log(filePath);

const base = path.basename(filePath); //used to get the last file in the file path
console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
//tis provides the absoute path
console.log(absolute);
