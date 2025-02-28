const { generateJWT, verifyToken } = require("./jwtGenerate");
const token = generateJWT({ email: "pra@pra.com", name: "Pramesh Pradhan" });
console.log(token);
console.log(verifyToken(token));
