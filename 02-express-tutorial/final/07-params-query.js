const express = require("express");
const app = express();
const { products } = require("../data"); //to get the products arrray from data file using destructuring

app.get("/", (req, res) => {
	res.send('<h1> Home Page</h1><a href="/api/products">products</a>');
});

//this code is to select the the specific peoperties in the product array such as the id, name and image.
app.get("/api/products", (req, res) => {
	//to get all the products in the products array
	const newProducts = products.map((product) => {
		const { id, name, image } = product;
		return { id, name, image };
	});
	res.json(newProducts); // sending the list of objects in the products array as json
});
app.get("/api/products/:productID", (req, res) => {
	//this app.get allows us to get the resourse we need to serve to or users from the file system.
	console.log(req.params);
	const { productID } = req.params;

	const singleProduct = products.find(
		(product) => product.id === Number(productID)
		// checking if the product.id is === to any product with a productID which converted to a number because it normally returns a string. This product that has an ID of whatever number is searched in the URL is then passed as the singleProduct and the json of that singleProduct is returned at the end of this app.get function.
	);

	//give me a single product, if the singleproduct doesn't exist, return 404 status and a message "Product does not exis":
	if (!singleProduct) {
		return res.status(404).send("Product Does Not Exist");
	}

	return res.json(singleProduct);
});
///Route parameter
//Route parameters like productID  allow us to setup place holder to point to the item being requested and  to take care of the posibility of having many products each having an ID and further having child resourses and then having to hard code each ID and sub IDs.

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
	console.log(req.params);
	res.send("hello world");
});

app.get("/api/v1/query", (req, res) => {
	console.log(req.query);
	const { search, limit } = req.query;
	let sortedProducts = [...products];

	if (search) {
		sortedProducts = sortedProducts.filter((product) => {
			return product.name.startsWith(search);
		});
	}
	if (limit) {
		sortedProducts = sortedProducts.slice(0, Number(limit));
	}
	if (sortedProducts.length < 1) {
		// res.status(200).send('no products matched your search');
		return res
			.status(200)
			.json({ success: "no product matched your search", data: [] });
	}
	res.status(200).json(sortedProducts);

	// 	This code is an endpoint handler for a GET request to "/api/v1/query". It accepts two query parameters, "search" and "limit", and returns a JSON response containing a list of products that match the search query, limited to the specified limit.
	//  Step by step explanation of the code:
	//  1. The code defines the endpoint handler for the GET request using the  app.get()  method.
	//  2. The  console.log(req.query)  statement logs the query parameters received in the request to the console for debugging purposes.
	//  3. The code uses destructuring assignment to extract the values of the "search" and "limit" query parameters from the  req.query  object.
	//  4. A new variable  sortedProducts  is initialized as a copy of the  products  array.
	//  5. If a "search" query parameter is provided, the code filters the  sortedProducts  array using the  filter()  method. It checks if the  name  property of each product starts with the provided search query. Only the products that match the search query are kept in the  sortedProducts  array.
	//  6. If a "limit" query parameter is provided, the code limits the  sortedProducts  array to the specified number of products using the  slice()  method.
	//  7. If the  sortedProducts  array is empty (no products matched the search query), a JSON response with status code 200 and an empty data array is sent back to the client.
	//  8. If there are products in the  sortedProducts  array, a JSON response with status code 200 and the  sortedProducts  array is sent back to the client.
});

app.listen(5000, () => {
	console.log("Server is listening on port 5000....");
});
