const path = require("path");
const express = require("express");
require("dotenv").config();
const app = express();
const publicPath = path.join(__dirname, "..", "client", "public");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//const Article = mongoose.model("Article");

//connect to mongoDB
mongoose.connect("mongodb://localhost:27017/Articles");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("CONNECTED TO DB");
});

//

app.use(bodyParser.urlencoded({ useNewUrlParser: true, extended: true }));

const PORT = process.env.PORT || 3005;

app.use("/", express.static(publicPath));

app.post("/api/signup", (req, res) => {

});

app.post("/api/createArticle", (req, res) => {
    console.log(req.body);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
