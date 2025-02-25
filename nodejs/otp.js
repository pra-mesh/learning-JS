//Write a OTP generator function that generate 6 digit numbers
//Math.random()
//Crypto module from node

const http = require("http");
const crypto = require("crypto");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "application/json" });
  const otp = crypto.randomInt(100000, 999999).toString();
  console.log(otp);
  const otpMath = Math.floor(100000 + Math.random() * 900000).toString();
  res.end(JSON.stringify({ otp, otpMath }));
});
server.listen(8000);
console.log("Server is running on port 8000");


const generateOTP = (digits = 6) => {
  const minValue = Math.pow(10, digits - 1);
  const maxValue = Math.pow(10, digits) - 1;
  return crypto.randomInt(minValue, maxValue).toString();
};
console.log(generateOTP());
