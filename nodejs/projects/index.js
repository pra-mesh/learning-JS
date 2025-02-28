const toProperCase = require("proper-upper-case");
const http = require("http");
const cc = require("currency-converter-lt");
const qrcode = require("qrcode");
const pdf = require("pdfkit");
const fs = require("fs");

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

let currencyConverter = new cc({
  from: "USD",
  to: "JPY",
  amount: 100,
  isDecimalComma: true,
});
currencyConverter.convert(100).then((Response) => console.log(Response));
currencyConverter
  .from("USD")
  .to("GBP")
  .amount(+125)
  .convert()
  .then((response) => {
    console.log(response); //or do something else
  });

currencyConverter.rates().then((response) => {
  console.log(response); //or do something else
});

// const canvas = document.getElementById("canvas");

// QRCode.toCanvas(canvas, "sample text", function (error) {
//   if (error) console.error(error);
//   console.log("success!");
// });

//qrcode, qrcode.toDataURL("I am a pony!", (err, url) => console.log(url));
qrcode.toString("Pramesh Pradhan!", { type: "terminal" }, (err, url) =>
  console.log(url)
);

const docwriter = (filename = "output") => {
  const doc = new pdf();
  doc.pipe(fs.createWriteStream(`${filename}.pdf`));
  doc.image("images/test.jpg", {
    fit: [197, 255],
  });
};

docwriter("testing");
