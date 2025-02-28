import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "pra.mesh.dhan@gmail.com",
    pass: "",
  },
});

export const sendmail = (to = "", subject, message) => {
  const mailoptions = {
    from: "pra.mesh.dhan@gmail.com",
    to,
    subject,
    text: message,
  };
  transporter.sendMail(mailoptions, (error, info) => {
    if (error) {
      console.log("Error: " + error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
