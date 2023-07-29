## Key notes about node js

- There are no browser APIs in node js
- We can access our file system with node
- Node Js depends on versions
- Node js uses commonJS
  example: module.exports = [exported variable or function]
  You can also use the es6 syntax to `import` and `export` variables and functions when needed

/\*FIXME: NOTE THAT THE LOGS IN THE CODE WORK WHEN YOU REFRESH THE BROWSER

## Reading files

There are 2 ways to read a file, synchronously and asynchronously <br>
We are going to be using asychronously(non-blocking) because we want to be able to allow multiple processes to still run while the file is being read. NOte that to do this more conveniently, you will have to be using `async/await` functions along side `try/catch` blocks to write your code.

When trying to read a file asynchronously from it's path using readFile(), the readFile function takes in 3 parameters, the file path of the file to be read, the encoding and the function that executes, this function will containg error param and the result to be gotten from the file.

**Note that** it is important to always include UTF8 as a parameter for encoding so that you get the right result otherwise you're going to: get a buffer text showing up.

/\*FIXME: NOTE THAT THE LOGS IN THE CODE WORK WHEN YOU REFRESH THE BROWSER

## writing files

You can also write files asynchronously and this requires you to use the `writeFile()` function which takes 3 arguements, the file being writtten to, the content being written and optionally the `{ flag: 'a' }` object to make the content to get appended(add up) in the file without overwriting what was previously in the file. `See file 11 in node-tutorials folder`

## NPM packages

The package with the highest weekly downloads is the one to look out for.

### Readup package.json blog in basics of package.json blog post

/\*FIXME: NOTE THAT THE LOGS IN THE CODE WORK WHEN YOU REFRESH THE BROWSER

## Event driven development

This is used heavily in node js. The flow of the program in node js relies on events.

### Event loop

Event loop allows us to handle requests suh that one users request that may take alot of
time does not stop us fom processing other requests.

## Streams

Streams are used when you want to read or write data in chunkcs and don't want to read or write all the file all at once.
`const {createReadStream} = require('fs')` will allow you to use the `createReadStream()` function (which can be set to a variable, e.g `streams` to be used with the `on` method) to take the events such as the `../pathToFile` as a parameter and a function (result) as 2nd parameter to do some work,

/\*FIXME: NOTE THAT THE LOGS IN THE CODE WORK WHEN YOU REFRESH THE BROWSER

```
const {createReadStream} = require('fs')


const streams = createReadStream('../pathToFile', (result)=>{
console.log('hello')
})

streams.on('data', (result) =>{
console.log(result)
} )

streams.on(error =>{
console.log(error)
} )


## Creating servers

Read up Http requests and Http response
Methods invoved are:
GET - his is the default request of the browser
POST
READ
PUT


/*FIXME: NOTE THAT THE LOGS IN THE CODE WORK WHEN YOU REFRESH THE BROWSER


```

const http = require("http");

const server = http.createServer((req, res) => {
res.writeHead(200, { "content-type": "text/html" });
//Note that whatever you type as the content type will affect the type of content that you send. so if this content type is "text/plain", it will send the full string contained in res.write all together with the h1 tags to appear on the page.
res.write(`<h1 style="text-align : center;">Testing out express js</h1>`);
res.end(); //Note that you always need to call res.end()
});

server.listen(5000);

```

/*FIXME: NOTE THAT THE LOGS IN THE CODE WORK WHEN YOU REFRESH THE BROWSER

### Ports

There are designated port numbers for each type of connection that you want to establish. Read up on ports to find out what they are.

## Express js

Express js is a framwork that is built on top node js used to write better node js applications.

- Status codes, content-type and MIME types are important factors while using express js.
- `npm install express --save` to install express js

/*FIXME: NOTE THAT THE LOGS IN THE CODE WORK WHEN YOU REFRESH THE BROWSER


## API VS SSR

API - json
send data
res.json
ssr template
send
res.render()
```

### Query string parameters

the words that come after the ? mark in the link that tells the browser the spcific resourse that the user wants for example
www.example.com/toys?color=red

In this case te color=red is the query string parameter that points to the details of the toys that is needed

/\*TODO: Don't forget to use the rturn keyword inside the app.get function.

### Middleware
