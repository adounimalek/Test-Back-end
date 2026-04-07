const express = require("express");
const app = express();
require("dotenv").config();



const connectDB=require("./config/dbconnect");
app.use(express.json())
connectDB();

app.use("/user" , require("./routes/user"))
app.use("/product" , require("./routes/product"))

app.listen(process.env.PORT, (err) =>
  err ? console.log(err) : console.log("server is runningddd")
);
