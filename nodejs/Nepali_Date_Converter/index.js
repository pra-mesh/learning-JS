//import NepaliDate from "nepali-datetime";
const NepaliDate = require("nepali-datetime");
const covertor = () => {
  const now = new NepaliDate("71/71/2071 23:11");
  try {
    console.log(now.toString());
  } catch (err) {
    console.log("Error occured");
  }
};
covertor();
