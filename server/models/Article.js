const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    id: {type:Number},
    title: { type: String, default: '', trim: true, maxlength: 400 },
    content: { type: String, default: '', trim: true, maxlength: 1000 },
    dateCreated: {type: Date, default: Date.now},
    //author: { type: Schema.ObjectId, ref: 'User' },
    author: {type: String},
    comments: [
      { //id, articleID, dateCreated, author, content
        id: {type: Number},
        articleID: {type: Number},
        content: { type: String, default: '', maxlength: 1000 },
        //author: { type: Schema.ObjectId, ref: 'User' },
        author: {type: String},
        dateCreated: { type: Date, default: Date.now }
      }
    ]
  });
  ArticleSchema.methods.speak = function () {
    console.log(`Test!`);
  }
  

  mongoose.model('Article', ArticleSchema);
