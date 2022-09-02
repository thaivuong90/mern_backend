const express = require("express");
const serverless = require("serverless-http");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const posts = require("./routers/posts.js");

dotenv.config();

const app = express();
// const PORT = process.env.PORT || 5000;
const uri = process.env.MONBODB_URL;

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());

// app.use("/posts", posts);

// const router = express.Router();

// router.get("/", (req, res) => {
//   res.json({
//     hello: "hi",
//   });
// });

app.use("/.netlify/functions/api", posts);

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to mongodb");
  })
  .catch((err) => {
    console.log("err", err);
  });

module.exports.handler = serverless(app);
