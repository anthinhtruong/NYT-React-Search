import mongoose from "mongoose"

let Schema = mongoose.Schema

let Article = new Schema({
    title: {type: String, required: true, trim: true},
    date:{type: Date, default: Date.now, required: true},
    url:{type: String, unique: tru, required: true},
});

let Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;




// var mongoose = require("mongoose");
// var Schema = mongoose.Schema;

// var HistorySchema = new Schema({
//   location: {
//     type: String
//   },
//   date: {
//     type: Date
//   }
// });

// var History = mongoose.model("History", HistorySchema);
// module.exports = History;
