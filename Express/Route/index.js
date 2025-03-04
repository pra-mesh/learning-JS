require("dotenv").config();
const express = require("express");
const app = express();

const indexRouter = require("./routes");

const port = process.env.port || 8000;

//API Routes
app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});