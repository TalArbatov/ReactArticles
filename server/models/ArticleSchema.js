const mongoose = require('mongoose');

const ArticleSchema = mongoose.Schema({
    title: {type: String},
    content: {type: String},
    author: {type: String},
    dateCreated: {type: Date},
    id: {type: Number},
    comments: [{
        id: Number,
        articleID: Number,
        author: String,
        dateCreated: Date,
        content: String
    }]
})

ArticleSchema.methods.debug = () => {
    console.log('DEBUGGING...');
}

mongoose.model('Article', ArticleSchema);