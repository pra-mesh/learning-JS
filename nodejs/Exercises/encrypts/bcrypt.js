import bcrypt from "bcryptjs";

const salt = bcrypt.genSaltSync(15);
console.log(salt);
export const generateHash = (text = "") => {
  const salt = bcrypt.genSaltSync(15);
  return bcrypt.hashSync(text, 10);
};
export const compareHash = (hashValue, password) =>
  bcrypt.compareSync(password, hashValue);
