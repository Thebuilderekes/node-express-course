console.log('Welcome to Node Tutorial');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;

  if (req.url === '/about') {
    res.end('About page');
  } else if (req.url === '/') {
    res.end('This is the homepage');
  } else {
    res.end('<h1>Page you have requested cannot be found</h1>');
  }
});

server.listen(port, hostname, () => {
  console.log(`The server is running on port ${port} at the host ${hostname}`);
});
