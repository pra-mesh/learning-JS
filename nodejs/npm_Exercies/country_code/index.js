const countries = require("i18n-iso-countries");
//import countries from "i18n-iso-countries"
const http = require("http");
//import http from "http";
console.log("US (Alpha-2) => " + countries.getName("US", "en"));
console.log(
  "United States of America => " + countries.getAlpha3Code("Nepal", "en")
);

const server = http
  .createServer((req, res) => {
    if (req?.url && req?.url.includes("?country=")) {
      const country =
        req?.url.includes("?country=") && req?.url.split("=")[1]
          ? req?.url.split("=")[1]
          : "";
      res.writeHead(200, { "content-type": "text/html" });
      const code = countries.getAlpha2Code(country, "en");
      res.end(code);
    } else {
      res.writeHead(400);
      res.end("invalid query");
    }
  })
  .listen(8000);
console.log("Server is running at http://localhost:8000");
