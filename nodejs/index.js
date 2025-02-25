// 1. Write a nodejs function to find the total memory of my pc. -- Operating System information
// 2. Write a nodejs application to create a http server to print hello world

//ES5

const os = require("os");
const server = require("http");
const myModule = require("./my-own");
const { generateDescription, generateTitle } = require("./my-own");

const { volume } = require("./area");
const getTotalMemory = () => os.totalmem() / (1024 * 1024 * 1024);
console.log(getTotalMemory());

const httpServer = server.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      data: "Hello World!",
      url: req.url,
    })
  );
});

httpServer.listen(17420);
console.log("Server us running on port 17420");
console.log(myModule.generateDescription("Hello World!"));
console.log(generateDescription("lorem50  Hello World!"));
console.log(volume({ length: 10, breadth: 5, height: 5 }));

// Write a nodejs fuction to read the content of a file and show it in the browser.
