const express = require("express");
const app = express();
const { products } = require("../data");

app.get("/", (req, res) => {
	const newProducts = products.map((product) => {
		const { id, name, image } = product;
		return { id, name, image };
	});
	res.json(newProducts);
});

app.get("/api/products/:productID", (req, res) => {
	//const { productID } = req.params;
	console.log(req);
	const singleProduct = products.find((product) => product.id === 1);
	res.json(singleProduct);
	//console.log(productID);
});

app.listen(5000, () => {
	console.log("Server is listening on port 5000....");
});
