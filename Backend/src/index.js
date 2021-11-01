const express = require("express");
const app = express();
const env = require("dotenv");
const connection = require("./connection");
const port = 4000;
const cors = require("cors");
const criminalRoute = require("../src/Routes/user");
const path = require("path");

connection;
env.config();

app.use(cors());
app.use(express.json());
// app.use("/uploads", express.static("uploads"));
app.use("/public", express.static(path.join(__dirname, "uploads")));
app.use("/", criminalRoute);

app.get("/", (req, res) => {
  res.send("This is my first express app");
});

app.listen(port, () => {
  console.log(`The application started successfully on port ${port}`);
});
