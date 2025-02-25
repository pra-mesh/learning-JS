// Write a nodejs fuction to read the content of a file and show it in the browser.
const fs = require("fs");
const http = require("http");

// const readFile = () => {
//   let result;
//   fs.readFile("test.tx", "utf-8", (err, data) => {
//     err
//       ? (result = { rescode: 1, data: "Failed to fetch" })
//       : (result = { rescode: 0, data: data.toString() });
//       return result;
//   });
//   console.log(result);
//   return result;
// };
const fileReader = (fileName = "test") => {
  try {
    const fullFillName = `${fileName}.txt`.toString();
    console.log(typeof fullFillName);
    const data = fs.readFileSync(fullFillName, "utf8");

    return { rescode: 0, data: data.toString() };
  } catch (err) {
    console.log(err)
    return { rescode: 1, data: "Failed to fetch" };
  }
};

const httpServer = http
  .createServer((req, res) => {
    const resp = fileReader(req.url);

    if (resp.rescode === 0) {
      res.writeHead(200, { "content-type": "text/plain" });
      res.end(resp.data);
    } else {
      res.writeHead(500, { "content-type": "text/plain" });
      res.end(resp.data);
    }
  })
  .listen(8000);
console.log("Server is running on port 8000");
