import { sendmail } from "./mailer.js";

const email ="pra.mesh.dhan@hotmail.com";
const subject ="test";
const message = "message from test";

sendmail(email,subject,message);