const http = require("http");

const server = http.createServer((req, res) => {
	res.writeHead(200, { "content-type": "text/html" });
	//Note that whatever you type as the content type will affect the type of content that you send. so if this content type is "text/plain", it will send the full string contained in res.write all together with the h1 tags to appear on the page.
	console.log(req.url)
	res.write(`<h1 style="text-align : center;">Testing out express js</h1>`);
	res.end(); //Note that you always need to call res.end()
});

server.listen(5000);
