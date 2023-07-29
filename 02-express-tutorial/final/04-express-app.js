const express = require("express");
const path = require("path");

const app = express();

//Line 8 `app.use` allows us to not go through the hassle of pullin each resources one by one as you would have using plain node js, you can put all of the resources in this public folder and have them loaded from there.
// setup static and middleware
app.use(express.static("../public"));

// app.get("/", (req, res) => {
// 	res.sendFile(path.resolve(__dirname, "../navbar-app/index.html"));

//adding this block of code to static assets just as the others in public will give the same resu;ts but this is what is going to e done moving forward.
// });

app.all("*", (req, res) => {
	res.status(404).send("resource not found");
});

app.listen(5000, () => {
	console.log("server is listening on port 5000....");
});
