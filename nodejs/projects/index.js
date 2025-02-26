const toProperCase = require("proper-upper-case");
const http = require("http");
const properCasing = (txt = "") => toProperCase(txt);
console.log(properCasing("Hello raktim's StUdent."));

const server = http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        data: properCasing("This is npm Class"),
      })
    );
  })
  .listen(8000);
console.log("server is runing on http://localhost:8000");
