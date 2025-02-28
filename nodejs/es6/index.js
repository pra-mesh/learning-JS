import os from "os";
import getName from "./module.js"; // default
//import { getName } from "./module.js"; // export const

const data = os.totalmem();
getName();
console.log(data);
