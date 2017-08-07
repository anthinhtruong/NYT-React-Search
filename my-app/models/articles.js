import mongoose from "mongoose"

let Schema = mongoose.Schema

let Article = new Schema({
    title: {type: String, required: true, trim: true},
    date:{type: Date, default: Date.now, required: true},
    url:{type: String, unique: tru, required: true},
});

let Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;
