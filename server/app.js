require("dotenv").config();
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

//SETUP MONGOOSe
const mongoose = require("mongoose");
require('./models/ArticleSchema');
const Article = mongoose.model('Article');
mongoose.connect(process.env.DB_ADDRESS);
const db = mongoose.connection;
db.on('err', () => {
  console.log('ERR_DB_CONNECTION');
})
db.on('open', () => {
  console.log("SUCCESS_DB_CONNECTION")
})

//SETUP EXPRESS
const publicPath = path.join(__dirname, "..", "client", "public");
const app = express();
const PORT = process.env.PORT || 3000;
//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, useNewUrlParser: true }));
app.use("/", express.static(publicPath));

app.post('/api/articles', (req,res) => {
  const {title, content, dateCreated, id, comments, author} = req.body;
  const newArticle = new Article({
    title,
    content,
    dateCreated,
    id,
    author,
    comments
  });
  newArticle.debug();
  newArticle.save((err, article) => {
    if(!err) res.send(article)
    else res.send(err)
  })
})

app.listen(PORT, () => {
  console.log(`Starting server on port ${PORT}`);
});

