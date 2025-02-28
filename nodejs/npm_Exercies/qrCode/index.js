const qrcode = require("qrcode");
const http = require("http");

// qrcode,
//   qrcode.toDataURL("https://pradhanpramesh.com", (err, url) =>
//     console.log(url)
//   );

// qrcode.toString("Pramesh Pradhan!", { type: "terminal" }, (err, url) =>
//   console.log(url)
// );

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    const url = "https://pradhanpramesh.com.np";
    //req.url exists print qrcode
    if(req.url.includes("?url=")){
      url =req.url.split("?url=")[1];
      qrcode.toDataURL(req.url, (err, url) => {
        res.end(`<img src=${url} />`);
      });
    }
    // if (!String(req.url).includes("ico")) {
    //   qrcode.toDataURL(req.url, (err, url) => {
    //     res.end(`<img src=${url} />`);
    //   });
    //   console.log(req.url);
    // }
  })
  .listen(8000);
console.log("Server is running on port 8000");
