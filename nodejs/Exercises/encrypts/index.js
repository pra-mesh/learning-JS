import { generateHash, compareHash } from "./bcrypt.js";

const encryptedPassword = generateHash("MyPassword");
console.log(encryptedPassword);
console.log(compareHash(encryptedPassword, "MyPassword"));
