const path = require("path");
const express = require("express");
require("dotenv").config();
const app = express();
const publicPath = path.join(__dirname, "..", "client", "public");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require('./models/Article');
//connect to mongoDB
mongoose.connect("mongodb://localhost:27017/Articles");

var Article = require('mongoose').model('Article');

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("CONNECTED TO DB");
});

//

app.use(bodyParser.urlencoded({ useNewUrlParser: true, extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3005;

app.use("/", express.static(publicPath));

app.post("/api/signup", (req, res) => {});

app.post("/api/createArticle", (req, res) => {
  const newArticle = new Article({
      id: req.body.id,
      author: req.body.author,
      title: req.body.title,
      content: req.body.content,
      dateCreated: req.body.dateCreated,
  })
  newArticle.save((err, article) => {
      if(err)
        console.log(err);
  });
  console.log(req.body);
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
