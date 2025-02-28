const jwt = require("jsonwebtoken");
//{name:Pramesh Pradhan, email:pra@pra.com }
const generateJWT = (data) => {
  return jwt.sign(data, "Privatekey", { //algorithm: "ES256", 
  expiresIn: "7d" });
};

const verifyToken = (token) => jwt.verify(token, "Privatekey");
module.exports = { generateJWT, verifyToken };
